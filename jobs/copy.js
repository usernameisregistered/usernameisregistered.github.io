const fs = require('fs');
const path = require('path');
const config = require("./config")
const { rimrafSync } = require('rimraf')
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

function clear() {
    taskName = "开始清理缓存信息"
    console.log(`开始任务：${taskName}`)
    fs.readdirSync(config.OutputRootDir).forEach(dir => {
        let absolutePath = path.join(config.OutputRootDir, dir);
        if (absolutePath === config.MDRootDir) {
            removeMDRootDir(absolutePath);
        } else if (absolutePath === config.VitePressRootDir) {
            removeVitePressRootDir(absolutePath);
        } else {
            console.log("清楚无用的目录或者文件" + absolutePath);
            rimrafSync(absolutePath)
        }
    })
    console.log(`完成任务：${taskName}`);
}

function removeMDRootDir(directory) {
    const retainMDRootDir = {
        files: [
            path.join(config.MDRootDir, "index.md"),
            path.join(config.AssetsRootDir, "logo.svg"),
        ],
        paths: [
            path.join(config.AssetsRootDir, "style"),
            path.join(config.AssetsRootDir, "scripts"),
        ]
    }
    fs.readdirSync(directory).forEach(dir => {
        let absolutePath = path.join(directory, dir);
        if (retainMDRootDir.files.includes(absolutePath)) {
            console.log("保留文件：" + absolutePath);
        } else if (absolutePath === config.AssetsRootDir) {
            fs.readdirSync(absolutePath).forEach(dir2 => {
                const absolutePath2 = path.join(absolutePath, dir2);
                if (retainMDRootDir.files.includes(absolutePath2)) {
                    console.log("保留文件：" + absolutePath2);
                } else if (retainMDRootDir.paths.includes(absolutePath2)) {
                    console.log("保留文件夹：" + absolutePath2);
                } else {
                    console.log("清理无用的目录或者文件" + absolutePath2);
                    rimrafSync(absolutePath2)
                }
            })
        } else {
            console.log("清理无用的目录或者文件" + absolutePath);
            rimrafSync(absolutePath)
        }
    })
}

function removeVitePressRootDir(directory) {
    const retainVitePressDir = {
        files: [
            path.join(config.VitePressRootDir, "config.mts")
        ],
        paths: [
            path.join(config.VitePressRootDir, "theme"),
            path.join(config.VitePressRootDir, "dist"),
        ]
    }
    fs.readdirSync(directory).forEach(dir => {
        let absolutePath = path.join(directory, dir);
        if (retainVitePressDir.files.includes(absolutePath)) {
            console.log("保留文件：" + absolutePath);
        } else if (retainVitePressDir.paths.includes(absolutePath)) {
            console.log("保留文件夹：" + absolutePath);
        } else {
            console.log("清理无用的目录或者文件" + absolutePath);
            rimrafSync(absolutePath)
        }
    })
}

let taskName = "复制静态资源"
copyDir(path.join(config.AssetsRootDir), path.join(config.VitePressRootDir, "dist/static"))
console.log("完成任务：" + taskName)
clear();
