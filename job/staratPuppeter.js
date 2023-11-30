const puppeteer = require('puppeteer-core');
const os = require("os");
const fs = require("fs");
const path = require("path");
const writeFile = require('../common/writeFile');
const { STATUS } = require('../constants/constants');
const image2base64 = require('./image2base64');
const parseConfig = require('../common/parseConfig');
module.exports = async function startPuppeteer(filePath, bookPath) {
    let result = {
        status: STATUS.PROCESS
    }
    try {
        const config = parseConfig();
        console.log("开始文档自动转化")
        const browser = await puppeteer.launch({ headless: true, channel: 'chrome', executablePath: path.join(os.homedir(), 'AppData/Local/Google/Chrome/Application/Chrome') });
        const page = await browser.newPage();
        page.setViewport({ width: 1920, height: 1080 });
        await page.goto(filePath, { waitUntil: ["load", "networkidle0", 'domcontentloaded'] });
        await delay(3000)
        const cssText = await page.evaluate(getStyle)
        const html = await page.$eval('body main', e => e.innerHTML);
        await browser.close();
        console.log("文档自动转化完成")
        const fileContent = `
<style>
${cssText.replaceAll(new RegExp(`http://localhost:${config.tempServicePort}/`, "g"), "/")}
</style>
<div class="markdown-container">
    <main>
        ${convertHTML(html, bookPath)}
    </main>
</div>
        `
        writeFile(filePath, fileContent)
        result.status = STATUS.SUCCESS;
    } catch (error) {
        result.status = STATUS.FAIL;
        result.message = error.toString();
    } finally {
        return result;
    }
}
function getStyle() {
    return new Promise((resolve, reject) => {
        let result = ""
        for (var i = 0; i < document.styleSheets.length; i++) {
            var styleSheet = document.styleSheets[i];
            const cssRules = styleSheet.cssRules;
            for (let i = 0; i < cssRules.length; i++) {
                if (cssRules.item(i).cssText.includes("@font-face")) {
                    result += `${cssRules.item(i).cssText}\r\n`;
                } else if(cssRules.item(i).cssText.includes("@media")){
                    result+= `
@media screen and (min-width: 40em) {
    body { background: rgb(68, 68, 68); }
    .markdown-container main { background: rgb(255, 255, 255); padding: 5em 6em; margin: 1em auto; box-shadow: rgb(34, 34, 34) 0.4em 0.4em 0.4em; }
}
                    `
                } else {
                    result += `.markdown-container ${cssRules.item(i).cssText}\r\n`;
                }
            }
        }
        resolve(result)
    })
}
function delay(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

function convertHTML(content, bookPath) {
    let result;
    let res = content;
    const reg = /<img\s+src="([^"]*)"/g;
    while ((result = reg.exec(res)) !== null) {
        let file = result[1];
        if (!path.isAbsolute(file)) {
            file = path.join(bookPath, file)
        }
        if (fs.existsSync(file)) {
            res = res.replace(result[1], image2base64(file))
        } else {
            console.warn(`文件不存在${file}`)
        }
    }
    return res;
}
