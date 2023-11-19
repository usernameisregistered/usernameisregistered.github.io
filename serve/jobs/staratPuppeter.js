const puppeteer = require('puppeteer-core');
const writeFile = require('../common/writeFile');

module.exports = async function startPuppetee(filePath) {
    console.log("开始文档自动转化")
    const browser = await puppeteer.launch({
        executablePath: "C:\\Users\\liming\\AppData\\Local\\Google\\Chrome\\Application\\Chrome",
        headless: true
    });
    const page = await browser.newPage();
    page.once('close', () => {
        console.log("文档自动转化完成")
    });
    page.once('error', (error) => {
        console.log(error)
    });
    await page.goto(filePath, { waitUntil: ["load", "networkidle0", 'domcontentloaded'] });
    await delay(2000)
    const cssText = await page.evaluate(getStyle)
    cssText.replace();
    const html = await page.$eval('body main', e => e.innerHTML);
    await browser.close();
    writeFile(filePath, `<style>${cssText}</style><div class="markdown-container"><main>${html}</main></div>`)
}
function getStyle() {
    return new Promise((resolve, reject) => {
        let result = ""
        for (var i = 0; i < document.styleSheets.length; i++) {
            var styleSheet = document.styleSheets[i];
            const cssRules = styleSheet.cssRules;
            for (let i = 0; i < cssRules.length; i++) {
                result += `.markdown-container ${cssRules.item(i).cssText} \r\n`;
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
