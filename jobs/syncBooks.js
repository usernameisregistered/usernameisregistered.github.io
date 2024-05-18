const HandlerCategory = require("./handlerCategory");
const config = require("./config");
const path = require("path")
config.CategoryDataSource.forEach(category => {
    if(category.children){
        const taskName = `收集顶级分类《${category.value}》下的子类信息`
        console.log(`开始任务: ${taskName}`);
        category.children.forEach(child => {
            let instance = new HandlerCategory(child.value, path.join(config.InputRootDir, child.value), config.AssetsRootDir, config.MDRootDir);
        })
        console.log(`完成任务: ${taskName}`);
    }
});


