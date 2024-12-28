const readFile = require("./readFile")
const path = require("path")
const fs = require("fs")
const config = {}
module.exports = function parseConfig() {
    if (config.outputDirectory) {
        return config;
    } else {
        let content = readFile(path.join(process.cwd(), "config/base.json"));
        if (content) {
            content = JSON.parse(content);
            checkConfig(content);
            config.backupEnable = !!content.backupEnable
            if (config.backupEnable) {
                config.backupDirectory = content.backupDirectory;
                config.backupSingle = content.backupSingle;
                if (!path.isAbsolute(config.backupDirectory)) {
                    config.backupDirectory = path.join(process.cwd(), config.backupDirectory)
                }
                if (!fs.existsSync(config.backupDirectory)) {
                    console.log(`创建目录 [${config.backupDirectory}]`)
                    fs.mkdirSync(config.backupDirectory)
                }
            }
            config.outputDirectory = content.outputDirectory;
            if (!path.isAbsolute(config.outputDirectory)) {
                config.outputDirectory = path.join(process.cwd(), config.outputDirectory)
            }
            if (!fs.existsSync(config.outputDirectory)) {
                fs.mkdirSync(config.outputDirectory)
            }
            config.tempServicePort = +content.tempServicePort
            config.bookList = content.bookList
            config.blogList = content.blogList
            return config;
        } else {
            console.log(`缺少配置文件${path.join(process.cwd(), '../config/base.json')}`)
            process.exit();
        }
    }
}

function checkConfig(config) {
    const fields = ["outputDirectory", 'backupDirectory', "backupEnable", "bookList", "blogList", 'tempServicePort', "backupSingle"]
    const keys = Object.keys(config);
    if (fields.every(el => keys.includes(el))) {
        if (!Array.isArray(config.bookList) && !Array.isArray(config.blogList)) {
            console.log(`bookList,blogList必须为数组`)
            process.exit();
        }
    } else {
        console.log(`配置文件异常缺少必须的字段${fields.filter(el => !keys.includes(el)).join()}`)
        process.exit();
    }

}