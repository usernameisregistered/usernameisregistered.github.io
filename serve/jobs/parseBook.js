const moment = require('moment');
const fs = require("fs");
const path = require('path');
const md5 = require('md5');
let result = {};
/**
 * 解析某一本具体的数据
 * @param {String} iniConfig 
 * @param {String} bookDirectory
 * @param {String} outputDir
 */
exports.ParseBook = function (iniConfig, bookDirectory, outputDir) {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 开始解析书籍 《${iniConfig.name}》] `);
    result.filename = iniConfig.id;
    result.category = [];
    _parseBook(bookDirectory, result);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(path.join(outputDir, result.filename + '.json'), JSON.stringify(result));
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 完成解析书籍 《${iniConfig.name}》] `);
}

function _parseBook(rootPath, categoryNode) {
    const dirs = fs.readdirSync(rootPath);
    for (const dir of dirs) {
        const dirPath = path.join(rootPath, dir);
        let categoryItem = {
            name: dir,
            category: []
        }
        if (fs.statSync(dirPath).isDirectory()) {
            _parseBook(dirPath, categoryItem)
        } else {
            _parseFile(dirPath, categoryItem);
        }
        categoryNode.category.push(categoryItem)
    }
}

function _parseFile(filePath, categoryItem) {
    const pageName = path.basename(filePath, ".md")
    if (pageName !== 'readme.ini') {
        console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 开始解析页面内容 《${pageName}》] `);
        categoryItem.id = md5(pageName + moment().format("YYYY-MM-DD HH:mm:ss"))
    }

}