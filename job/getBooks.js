const parseConfig = require("../common/parseConfig");
const { STATUS } = require("../constants/constants");
const ini = require('iniparser');
const fs = require("fs")
const path = require("path");
const md5 = require('md5');
const writeFile = require("../common/writeFile");
const readFile = require("../common/readFile");
const startPuppeteer = require("./staratPuppeter");
const moment = require("moment");
const { backups } = require("./backups");

let config;
let bookResult = {
    status: STATUS.PROCESS,
    category: []
};
module.exports =async function getBooks() {
    config = parseConfig();
    const result = {
        success: [],
        fail: []
    }
    if (config.bookList && config.bookList.length) {
        const size = config.bookList.length;
        for (let i = 0; i < size; i++) {
            const bookInfo = await getBook(i, size, config.bookList[i]);
            if (bookInfo.status === STATUS.SUCCESS) {
                result.success.push({
                    path: bookInfo.path
                })
            } else {
                result.fail.push({
                    path: bookInfo.path,
                    message: bookInfo.message
                })
            }
        }
        if (result.fail.length) {
            const errorFile = path.join(config.outputDirectory, "error.book.json")
            writeFile(errorFile, JSON.stringify(result.fail, null, 4))
            console.log(`存在解析失败的数据，详情请查看[${errorFile}]`)
        }
        console.log(`[${moment().format("HH:mm:ss")} ] 完成解析任务 共计${size} 成功${result.success.length} 失败 ${result.fail.length}`)
    } else {
        console.log("没有需要解析的书籍信息")
    }
}

async function getBook(current, total, bookDirectory) {
    bookResult.status = STATUS.PROCESS;
    bookResult.category = [];
    console.log(`开始子任务：[解析书籍 第${current + 1}/共${total}] [路径 ${bookDirectory}]`)
    bookResult.path = bookDirectory;
    const inifile = path.join(bookDirectory, 'readme.ini');
    if (fs.existsSync(inifile)) {
        let iniConfig = ini.parseSync(inifile);
        if (iniConfig.name && iniConfig.classify && iniConfig.description) {
            const fileName = path.join(config.outputDirectory, iniConfig.classify + ".json");
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
            console.log(`开始解析书籍页面 《${iniConfig.name}》] `);
            await getFile(bookDirectory, bookResult, iniConfig.name);
            if (bookResult.status = STATUS.SUCCESS) {
                writeFile(path.join(config.outputDirectory, iniConfig.id + ".json"), JSON.stringify({ ...iniConfig, categoryInfos: bookResult.category }))
                writeFile(fileName, JSON.stringify(historyBooks))
                if(config.backupEnable){
                    console.log(`开始备份书籍 《${iniConfig.name}》] `)
                    await backups(bookDirectory, iniConfig.name, config.backupSingle);
                    console.log(`完成备份书籍 《${iniConfig.name}》] `)
                }
            }
        } else {
            bookResult.status = STATUS.FAIL
            bookResult.message = "无效的书籍描述信息文件[readme.ini]"
        }
    } else {
        bookResult.status = STATUS.FAIL
        bookResult.message = "无效的书籍目录，请确认目录下存在书籍的描述信息文件[readme.ini]"
    }
    return bookResult;
}

async function getFile(rootPath, categoryNode, bookName, pid = null) {
    const dirs = fs.readdirSync(rootPath);
    for (const dir of dirs) {
        if (dir[0] !== '.' && dir !== "readme.ini" && dir !== 'assets') {
            const dirPath = path.join(rootPath, dir);
            let categoryItem = {
                name: dir,
                category: [],
                type: 'category',
                selectable: false,
                id: pid ? pid + "-" + md5(dirPath) : md5(dirPath),
            }
            if (fs.statSync(dirPath).isDirectory() && bookResult.status === STATUS.PROCESS) {
                getFile(dirPath, categoryItem, bookName, categoryItem.id)
                categoryNode.category.push(categoryItem)
            } else {
                if (bookResult.status === STATUS.PROCESS) {
                    const res = await parseFile(dirPath, categoryItem, bookName, categoryItem.id);
                    if (res.status !== STATUS.FAIL) {
                        categoryItem.htmlPath = res.path;
                        categoryNode.category.push(categoryItem)
                    } else {
                        bookResult.status = STATUS.FAIL;
                        bookResult.message = res.message;
                        break;
                    }
                }
            }
        }
    }
}

async function parseFile(filePath, categoryItem, bookName, pid) {
    if (path.extname(filePath) === '.md') {
        const pageName = path.basename(filePath, ".md")
        console.log(`[开始解析《${pageName}》页面内容《${pageName}》] `);
        categoryItem.type = "file"
        categoryItem.id = pid
        categoryItem.selectable = true;
        categoryItem.name = pageName;
        return await parseMarkdown(filePath, md5(bookName), md5(filePath));
    } else {
        return { status: STATUS.PROCESS }
    }
}

async function parseMarkdown(filePath, bookName, fileName) {
    let result = {
        status: STATUS.PROCESS
    }
    const config = parseConfig();
    const outputDir = path.join(config.outputDirectory, bookName)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    const content = readFile(filePath);
    const outputHTML = `
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <title>passerby-路人甲</title>
        <script>window.texme = { 
            markdownURL : 'http://localhost:${config.tempServicePort}/marked.min.js', 
            MathJaxURL  : 'http://localhost:${config.tempServicePort}/tex-mml-chtml.js'
        }
        </script>
        <script src="http://localhost:${config.tempServicePort}/texme.js"></script>
    </head>
    
    <body>
        <textarea>
            ${content}
        </textarea>
    </body>
</html>`
    const outputFile = path.join(outputDir, `${fileName}.html`)
    writeFile(outputFile, outputHTML)
    res = await startPuppeteer(outputFile, bookResult.path);
    result.status = res.status;
    if (result.status === STATUS.SUCCESS) {
        result.path = outputFile.replace(config.outputDirectory, "").replace(path.sep, "/");
    } else {
        result.message = res.message;
    }
    return result;
}