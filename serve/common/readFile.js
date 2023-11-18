const fs = require("fs");
module.exports = function readFile(path) {
    if (fs.existsSync(path)) {
        return fs.readFileSync(path).toString()
    }
    console.log(`要读取的文件不存在[${path}]`)
    return ''

}