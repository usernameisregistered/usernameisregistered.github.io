const moment = require("moment");
const { task, series, src, dest } = require('gulp');
const generateClassify = require("./serve/generateClassify");
const generateStudy = require("./serve/generateStudy");
const getBooks = require("./serve/getBooks.js");
const writeFile = require("./serve/common/writeFile.js");
const path = require("path");
const fs = require("fs");
const { backups } = require("./serve/jobs/backups.js");
const { rimrafSync } = require('rimraf');
const { startServer, closeServer } = require("./serve/jobs/startStaticService.js");
const getBlog = require("./serve/getBlog.js");
function general(cb) {
    console.log(`[${moment().format("HH:mm:ss")}] 开始数据生成任务`)
    generateClassify();
    generateStudy();
    console.log(`[${moment().format("HH:mm:ss")}] 完成数据生成任务`)
    cb()
}

function parseBook(cb) {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir)
    }
    backups(path.join(process.cwd(), 'bak'), dataDir, "data_bak").then(async () => {
        console.log(`[${moment().format("HH:mm:ss")} ] 清空data目录`)
        rimrafSync(dataDir)
        fs.mkdirSync(dataDir)
        startServer(60000)
        console.log(`[${moment().format("HH:mm:ss")} ] 开始解析任务`)
        const config = require("./parseBookConfig.json");
        const result = await getBooks(config);
        writeFile("./parseBookConfig.json", JSON.stringify([]))
        if (result.fail.length) {
            const errorFile = path.join(process.cwd(), "error.parseBook.json")
            writeFile(errorFile, JSON.stringify(result.fail, null, 4))
            console.log(`存在解析失败的数据，详情请查看[${errorFile}]`)
        }
        console.log(`[${moment().format("HH:mm:ss")} ] 完成解析任务 共计${config.length} 成功${result.success.length} 失败 ${result.fail.length}`)
        fs.readdirSync(process.cwd()).filter(el => el.startsWith("temp_")).forEach(el => {
            rimrafSync(el)
        })
        closeServer();
        cb()
    })
}

function parseBlog(cb) {
    const dataDir = path.join(process.cwd(), 'blog');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir)
    }
    backups(path.join(process.cwd(), 'bak'), dataDir, "blog_bak").then(async () => {
        console.log(`[${moment().format("HH:mm:ss")} ] 清空blog目录`)
        rimrafSync(dataDir)
        fs.mkdirSync(dataDir)
        rimrafSync(path.join(process.cwd(), 'temp_blog'))
        fs.mkdirSync(path.join(process.cwd(), 'temp_blog'))
        rimrafSync(path.join(process.cwd(), 'temp_blog_bak'))
        fs.mkdirSync(path.join(process.cwd(), 'temp_blog_bak'))
        startServer(60000)
        console.log(`[${moment().format("HH:mm:ss")} ] 开始解析任务`)
        const config = require("./parseBlogConfig.json");
        const result = await getBlog(config);
        writeFile("./parseBlogConfig.json", JSON.stringify([]))
        if (result.fail.length) {
            const errorFile = path.join(process.cwd(), "error.parseBlog.json")
            writeFile(errorFile, JSON.stringify(result.fail, null, 4))
            console.log(`存在解析失败的数据，详情请查看[${errorFile}]`)
        }
        console.log(`[${moment().format("HH:mm:ss")} ] 完成解析任务 共计${config.length} 成功${result.success.length} 失败 ${result.fail.length}`)
        fs.readdirSync(process.cwd()).filter(el => el.startsWith("temp_")).forEach(el => {
            rimrafSync(path.join(process.cwd(), el))
        })
        closeServer();
        cb()
    })
    cb()
}

function move(cb) {
    rimrafSync(process.cwd() + "/public/json/")
    src(process.cwd() + "/data/*.json")
        .pipe(dest(process.cwd() + "/public/json"))
    src(process.cwd() + "/data/**/*.html")
        .pipe(dest(process.cwd() + "/public"))
    src(process.cwd() + "/blog/*.json")
        .pipe(dest(process.cwd() + "/public/json"))
    src(process.cwd() + "/blog/*.html")
        .pipe(dest(process.cwd() + "/public/blog"))
    cb()
}


exports.general = task(general)
exports.parseBook = task(parseBook)
exports.move = task(move)
exports.parseBlog = task(parseBlog)
