const path = require("path")
const categoryList = require("../constants/category.json")
const readFile = require('./common/readFile.js')
const writeFile = require('./common/writeFile.js')
module.exports = function generateClassify() {
    try {
        console.log(`开始子任务：生成分类数据`)
        const readFilePath = path.join(process.cwd(), "/serve/data/classify.json");
        const result = general(JSON.parse(readFile(readFilePath)));
        const writeFilePath = path.join(process.cwd(), "/frontend/src/data/classify.json");
        writeFile(writeFilePath, JSON.stringify(result, null, 4))
    } catch (error) {
        throw error;
    }
}

function general(classify) {
    const result = [];
    for (const category of categoryList) {
        result.push({ ...category, children: [] });
    }
    for (const item of classify) {
        result.filter(el => el.value === item.category)[0].children.push({
            ...item,
            url: `/${item.category}_${item.value}`.toLowerCase(),
            className: item.className || "icon-text__easyiconnet"
        })
    }
    return result;
}


