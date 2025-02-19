const path = require("path");
const { rimrafSync } = require("rimraf");
const { src, dest } = require("gulp");
const { log, getOutputDirectory } = require("./common");
const fs = require("fs");
// const getInterview = require("./feishu/getInterview");
module.exports = async function buildBaseData(){
    log("任务名称：《构建基础数据》")
    log("清空历史生成的数据")
    const outputDirectory = getOutputDirectory();
    rimrafSync(outputDirectory)
    fs.mkdirSync(outputDirectory);
    log("开始复制静态文件")
    src(path.join(process.cwd(), "./template/assets/**/*")).pipe(dest(path.join(outputDirectory, "assets")))
    // log("开始获取飞书上的面试题信息")
    // await getInterview();
    // log("完成获取飞书上的面试题信息")
    log("=========================================")
}