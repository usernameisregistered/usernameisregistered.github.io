const path = require("path")
const categoryList = require("../constants/category.json");
const readFile = require("../common/readFile");
const writeFile = require("../common/writeFile");
module.exports = function generateClassify() {
    try {
        console.log(`开始子任务：生成学习数据`)
        const readFilePath = path.join(process.cwd(), "constants/study.json");
        const result = general(JSON.parse(readFile(readFilePath)));
        const writeFilePath = path.join(process.cwd(), "/frontend/src/data/study.json");
        writeFile(writeFilePath, JSON.stringify(result, null, 4))
        console.log(`完成子任务：生成学习数据`)
    } catch {
        console.log(error);
        process.exit();
    }
}

function general(studyList) {
    const result = [];
    for (const category of categoryList) {
        result.push({ ...category, children: [] });
    }
    for (const item of studyList) {
        result.filter(el => el.value === item.value)[0].children.push({
            ...item
        })
    }
    return result;
}