const path = require("path");
const { rimrafSync } = require("rimraf");
const { execSync } = require('node:child_process');
const { src, dest } = require("gulp");
const { log, getOutputDirectory } = require("./common");
const fs = require("fs")
module.exports = function buildBaseData(){
    log("任务名称：《构建基础数据》")
    const outputDirectory = getOutputDirectory();
    rimrafSync(outputDirectory)
    fs.mkdirSync(outputDirectory);
    buildCSS();
    log("开始复制静态文件")
    src(path.join(process.cwd(), "./template/assets/**/*")).pipe(dest(path.join(outputDirectory, "assets")))
    
}

function buildCSS(){
    log("开始编译css")
    const inputFile = path.join(process.cwd(), "./template/style/base.css")
    const outputFile = path.join(process.cwd(), "./template/assets/styles/main.css")
    execSync(`npx tailwindcss -i ${inputFile} -o ${outputFile}`)
}