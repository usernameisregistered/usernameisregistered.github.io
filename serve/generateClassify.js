const moment = require('moment');
const fs = require("fs");
const path = require("path")
function start() {
    const startTime = moment();
    console.log(`${startTime.format("YYYY-MM-DD HH:mm:ss")} 开始读取目录静态数据`)
    const filePath = path.join(__dirname, "data/classify.json");
    try {
        const classify = JSON.parse(fs.readFileSync(filePath));
        console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} 开始生成目录结构`);
        const result = general(classify);
        console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} 完成生成目录结构`);
        writeFile(JSON.stringify(result))
        console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} 开始写入文件`);
        const endTime = moment();
        console.log(`${endTime.format("YYYY-MM-DD HH:mm:ss")} 完成写入文件`);
        console.log(`生成目录结构任务耗时${endTime.diff(startTime, "seconds")}秒`)
    } catch (error) {
        throw error;
    }
}

function general(classify) {
    const result = [];
    let item = classify.shift();
    while (item) {
        if (!item.parent) {
            result.push({ ...item, list: [] })
        } else {
            const parentNode = result.filter(el => el.key === item.parent)[0];
            if (parentNode) {
                parentNode.list.push({
                    ...item, url: `/${parentNode.key}_${item.key}`.toLowerCase(),
                    className: item.className || "icon-text__easyiconnet"
                })
            }
        }
        item = classify.shift();
    }
    return result;
}

function writeFile(content) {
    const writeFilePath = path.join(__dirname, "../frontend/src/data/classify.json");
    if (fs.existsSync(writeFilePath)) {
        console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} 删除已存在的文件`);
        fs.rmSync(writeFilePath);
    }
    fs.writeFileSync(writeFilePath, content);
}

start();
