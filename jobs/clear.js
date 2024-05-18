const config = require("./config");
const path = require("path")
const fs = require("fs");
const { rimrafSync } = require('rimraf')

function clear() {
    const taskName = "开始清理缓存信息"
    console.log(`开始任务：${taskName}`)
    fs.readdirSync(config.OutputRootDir).forEach(dir => {
        let absolutePath = path.join(config.OutputRootDir, dir);
        if(absolutePath === config.MDRootDir){
            removeMDRootDir(absolutePath);
        } else if(absolutePath === config.VitePressRootDir){
            removeVitePressRootDir(absolutePath);
        } else {
            console.log("清楚无用的目录或者文件" + absolutePath);
            rimrafSync(absolutePath)
        }
    })
    console.log(`完成任务：${taskName}`);
}

function removeMDRootDir(directory){
    const retainMDRootDir = {
        files: [
            path.join(config.MDRootDir, "index.md"),
            path.join(config.AssetsRootDir, "logo.svg"), 
        ],
        paths: [
            path.join(config.AssetsRootDir, "style"),
            path.join(config.AssetsRootDir, "script"),
        ]
    }
    fs.readdirSync(directory).forEach(dir => {
        let absolutePath = path.join(directory, dir);
        if(retainMDRootDir.files.includes(absolutePath)){
            console.log("保留文件：" + absolutePath);
        } else if(absolutePath === config.AssetsRootDir){
            fs.readdirSync(absolutePath).forEach(dir2 => {
                const absolutePath2 = path.join(absolutePath, dir2);
                if(retainMDRootDir.files.includes(absolutePath2)){
                    console.log("保留文件：" + absolutePath2);
                } else if(retainMDRootDir.paths.includes(absolutePath2)){
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

function removeVitePressRootDir(directory){
    const retainVitePressDir = {
        files: [
            path.join(config.VitePressRootDir, "config.mts")
        ],
        paths: [
            path.join(config.VitePressRootDir, "theme"),
        ]
    }
    fs.readdirSync(directory).forEach(dir => {
        let absolutePath = path.join(directory, dir);
        if(retainVitePressDir.files.includes(absolutePath)){
            console.log("保留文件：" + absolutePath);
        } else if(retainVitePressDir.paths.includes(absolutePath)){
            console.log("保留文件夹：" + absolutePath);
        } else {
            console.log("清理无用的目录或者文件" + absolutePath);
            rimrafSync(absolutePath)
        }
    })
}
clear();