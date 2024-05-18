const fs = require("fs");
const path = require("path")
const config = require("./config");

function buildCategoryList() {
    const taskName = "构建分类页面"
    console.log(`开始任务：${taskName}`);
    const outputFile = path.join(config.MDRootDir, "categoryList.md");
    const categoryListTempContent = fs.readFileSync(config.CategoryListTempFile).toString();
    fs.writeFileSync(outputFile, categoryListTempContent.replace("dataSource", JSON.stringify(config.CategoryDataSource)))
    console.log("完成分类列表页面的构建")
    const categoryTempContent = fs.readFileSync(config.CategoryTempFile).toString();
    config.CategoryDataSource.forEach(category => {
        if (category.children) {
            category.children.forEach(child => {
                let childFile = path.join(config.MDRootDir, `${child.value}.md`);
                fs.writeFileSync(childFile, categoryTempContent.replace("dataSource", JSON.stringify(child)));
                let inputChildDir = path.join(config.InputRootDir, child.value);
                if (!fs.existsSync(inputChildDir)) {
                    console.log(`创建目录${inputChildDir}`)
                    fs.mkdirSync(inputChildDir);
                }
                console.log(`完成分类《${child.value}》页面的构建`)
            })
        }
    })
    console.log(`完成任务：${taskName}`);
}

buildCategoryList();