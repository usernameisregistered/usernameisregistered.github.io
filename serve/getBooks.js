const ini = require('iniparser');
const fs = require("fs")
const config = require("./bookConfig.json");
const path = require("path");
const moment = require('moment');
const md5 = require('md5');
const { ParseBook } = require('./jobs/parseBook');
const { loadFile } = require('./jobs/loadFile');
const { backups } = require('./jobs/backups');
const startTime = moment();

async function start() {
    console.log(`[${startTime.format("YYYY-MM-DD HH:mm:ss")} 开始任务]`)
    for (const key of config.bookList) {
        if (key && path.isAbsolute(key)) {
            await parseBookInfo(key)
        } else {
            throw Error("无效的数据目录信息，请确认目录为绝对路径")
        }
    }
    const endTime = moment();
    console.log(`[${startTime.format("YYYY-MM-DD HH:mm:ss")} 结束任务 共耗时${endTime.diff(startTime, "second")}秒]`)

}

start()

/**
 * 获取当前书籍的相关信息
 * @param {String} bookDirectory 
 */
async function parseBookInfo(bookDirectory) {
    const inifile = path.join(bookDirectory, 'readme.ini');
    if (fs.existsSync(inifile)) {
        console.log(`[${startTime.format("YYYY-MM-DD HH:mm:ss")} 开始解析书籍元数据信息]`)
        let iniConfig = ini.parseSync(inifile);
        if (iniConfig.name && iniConfig.classify && iniConfig.description && iniConfig.status) {
            iniConfig.id = md5(iniConfig.name + iniConfig.classify);
            const filePath = path.join(__dirname, config.outputDir, iniConfig.classify + ".json");
            let historyBookData = loadFile(filePath);
            if (historyBookData) {
                const index = historyBookData.findIndex(el => el.id === iniConfig.id);
                if (index === -1) {
                    historyBookData.push(iniConfig);
                } else {
                    historyBookData.splice(index, 1, iniConfig)
                }
            } else {
                historyBookData = [iniConfig]
            }
            ParseBook(iniConfig, bookDirectory, path.join(__dirname, config.outputDir));
            console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 更新${iniConfig.classify}下的书籍信息]`);
            fs.writeFileSync(filePath, JSON.stringify(historyBookData))
            if (config.bakDir) {
                await backups(path.join(__dirname, config.bakDir), iniConfig.classify, bookDirectory, iniConfig.name)
            }
            console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 更新${iniConfig.classify}下的书籍信息]`);
        } else {
            throw Error("无效的书籍描述信息文件[readme.ini]")
        }
    } else {
        throw Error("无效的书籍目录，请确认目录下存在书籍的描述信息文件[readme.ini]")
    }
}
