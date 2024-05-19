const fs = require('fs');
const path = require('path');
const config = require("./config")
const { clear } = require("./clear")
function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    fs.mkdirSync(dest, { recursive: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

let taskName = "复制静态资源"
copyDir(path.join(config.AssetsRootDir), path.join(config.VitePressRootDir, "dist/static"))
console.log("完成任务：" + taskName)
clear(true);
