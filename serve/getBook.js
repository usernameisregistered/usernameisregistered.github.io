const ini = require('iniparser');
const fs = require("fs")
const path = require("path");
const md5 = require('md5');
const { STATUS } = require("./common/constants")
const { ParseBook } = require('./jobs/parseBook');
const writeFile = require('./common/writeFile');
const { backups } = require('./jobs/backups');
const outputDir = path.join(process.cwd(), 'data')
const { src, dest } = require('gulp');
const clean = require('gulp-clean');
let result = {
    status: STATUS.PROCESS,
    message: "",
    path: "",
};
module.exports = async function getBookInfo(current, total, directory) {
    let bookDirectory = directory;
    if (!path.isAbsolute(bookDirectory)) {
        bookDirectory = path.join(process.cwd(), bookDirectory)
    }
    console.log(`开始子任务：[解析书籍 ${current + 1}/${total}] [路径 ${bookDirectory}]`)
    await parseBookInfo(bookDirectory)
    return result;
}

/**
 * 获取当前书籍的相关信息
 * @param {String} bookDirectory 
 */
async function parseBookInfo(bookDirectory) {
    result.path = bookDirectory;
    const inifile = path.join(bookDirectory, 'readme.ini');
    if (fs.existsSync(inifile)) {
        let iniConfig = ini.parseSync(inifile);
        if (iniConfig.name && iniConfig.classify && iniConfig.description) {
            const fileName = path.join(outputDir, iniConfig.classify + ".json");
            iniConfig.id = md5(iniConfig.name);
            let historyBooks = [];
            if (fs.existsSync(fileName)) {
                historyBooks = require(fileName)
            }
            const index = historyBooks.findIndex(el => el.id === iniConfig.id)
            if (index === -1) {
                historyBooks.push(iniConfig)
            } else {
                historyBooks.splice(index, 1, iniConfig)
            }
            const bookResult = await ParseBook(iniConfig, bookDirectory)
            result.status = bookResult.status;
            if (bookResult.status = STATUS.SUCCESS) {
                writeFile(path.join(outputDir, iniConfig.id + ".json"), JSON.stringify({ ...iniConfig, categoryInfos: bookResult.category }))
                writeFile(fileName, JSON.stringify(historyBooks))
                const temp = path.join(process.cwd(), `temp_${iniConfig.name}`)
                src(path.join(`${temp}/*`)).pipe(clean({ force: true })).pipe(dest(path.join(process.cwd(), `data/${iniConfig.id}`)))
                const bakDir = path.join(process.cwd(), "bak")
                await backups(bakDir, bookDirectory, iniConfig.name + "_" + iniConfig.classify).then(res => {
                    console.log(`完成书籍的备份《${iniConfig.name}》`)
                })
            } else {
                result.status = STATUS.FAIL
                result.message = "未知的错误";
            }
        } else {
            result.status = STATUS.FAIL
            result.message = "无效的书籍描述信息文件[readme.ini]"
        }
    } else {
        result.status = STATUS.FAIL
        result.message = "无效的书籍目录，请确认目录下存在书籍的描述信息文件[readme.ini]"
    }
}
