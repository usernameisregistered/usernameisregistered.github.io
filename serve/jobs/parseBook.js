const fs = require("fs");
const path = require('path');
const md5 = require('md5');
const { STATUS } = require("../common/constants");
const parseMarkdown = require("./parseMarkdown");
let result = {
    status: STATUS.PROCESS,
    category: []
};
/**
 * 解析某一本具体的数据
 * @param {String} iniConfig 
 * @param {String} bookDirectory
 * @param {String} outputDir
 */
exports.ParseBook = function (iniConfig, bookDirectory) {
    console.log(`开始解析书籍 ${iniConfig.name}》] `);
    result.category = [];
    getFile(bookDirectory, result, iniConfig.name);
    return result
}

function getFile(rootPath, categoryNode, bookName, pid = null) {
    const dirs = fs.readdirSync(rootPath);
    for (const dir of dirs) {
        if (dir[0] !== '.' && dir !== "readme.ini") {
            const dirPath = path.join(rootPath, dir);
            let categoryItem = {
                name: pid ? dir : bookName,
                category: [],
                type: 'category',
                selectable: false,
                id: pid ? pid + "-" + md5(dirPath) : md5(dirPath),
            }
            if (fs.statSync(dirPath).isDirectory() && result.status === STATUS.PROCESS) {
                getFile(dirPath, categoryItem, bookName, categoryItem.id)
            } else {
                if (result.status === STATUS.PROCESS) {
                    parseFile(dirPath, categoryItem, bookName, categoryItem.id);
                }
            }
            categoryNode.category.push(categoryItem)
        }
    }
    if (result.status === STATUS.PROCESS) {
        result.status = STATUS.SUCCESS
    }
}

function parseFile(filePath, categoryItem, bookName, pid) {
    if (path.extname(filePath) === '.md') {
        const pageName = path.basename(filePath, ".md")
        console.log(`[开始解析《${pageName}》页面内容《${pageName}》] `);
        categoryItem.type = "file"
        categoryItem.id = pid
        categoryItem.selectable = true;
        const fileName = parseMarkdown(filePath, pageName, bookName, md5(filePath));
        const replaceValue = (process.cwd() + "/temp_" + bookName).split(path.sep).join("/")
        categoryItem.htmlPath = fileName.split(path.sep).join("/").replace(replaceValue, "/" + md5(bookName))
    }
}
