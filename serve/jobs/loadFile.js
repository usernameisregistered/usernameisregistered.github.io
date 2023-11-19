const fs = require("fs")

/**
 * 获取某一个类型下的书籍信息
 * @param {string} calssify 
 * @param {string} directory 
 */
exports.loadFile =  function (filePath) {
    let result = null;
    if (fs.existsSync(filePath)) {
        result = require(filePath)
    } 
    return result;
}