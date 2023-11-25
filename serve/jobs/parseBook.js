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
exports.ParseBook = async function (iniConfig, bookDirectory) {
    console.log(`开始解析书籍 《${iniConfig.name}》] `);
    result.status = STATUS.PROCESS;
    result.category = [];
    await getFile(bookDirectory, result, iniConfig.name);
    if (result.status === STATUS.PROCESS) {
        result.status = STATUS.SUCCESS
    }
    return result
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
            if (fs.statSync(dirPath).isDirectory() && result.status === STATUS.PROCESS) {
                await getFile(dirPath, categoryItem, bookName, categoryItem.id)
                categoryNode.category.push(categoryItem)
            } else {
                if (result.status === STATUS.PROCESS) {
                    await parseFile(dirPath, categoryItem, bookName, categoryItem.id);
                    categoryNode.category.push(categoryItem)
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
        const fileName = await parseMarkdown(filePath, bookName, md5(filePath));
        const replaceValue = (process.cwd() + "/temp_" + bookName).split(path.sep).join("/")
        categoryItem.htmlPath = fileName.split(path.sep).join("/").replace(replaceValue, "/" + md5(bookName))
    }
}
