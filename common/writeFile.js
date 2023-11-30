const fs = require("fs");
module.exports = function writeFile(path, content) {
    if (fs.existsSync(path)) {
        console.log(`删除已经存在的文件[${path}]`)
        fs.rmSync(path);
    }
    fs.writeFileSync(path, content);
}