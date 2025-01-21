const { log, removeDataFile } = require("./common")

module.exports = function removeData(){
    log("任务名称：《清理构建临时数据》");
    removeDataFile("books.json");
    removeDataFile("chapters.json")
    log("=========================================");
}