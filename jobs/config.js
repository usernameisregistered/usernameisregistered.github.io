const path = require("path");
const fs = require("fs")
const InputRootDir = "D:\\personal\\文档\\passerBy"; // 绝对路径
module.exports = {
    CategoryListTempFile: path.join(__dirname, "./template/categoryList.md"),
    CategoryTempFile: path.join(__dirname, "./template/categor.md"),
    CategoryDataSource: getCategoryDataSource(),
    InputRootDir: InputRootDir, 
    AssetsRootDir: path.join(__dirname, "../docs/src/static"),
    MDRootDir: path.join(__dirname, "../docs/src"),
    VitePressRootDir: path.join(__dirname, "../docs/.vitepress"),
    OutputRootDir:  path.join(__dirname, "../docs"),
}

function getCategoryDataSource(){
    const filePath = path.join(InputRootDir, "category.json")
    return JSON.parse(fs.readFileSync(filePath).toString())
}
