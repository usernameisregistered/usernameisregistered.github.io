const moment = require("moment");
const { task, series, src, dest } = require('gulp');
const path = require("path");
const generateClassify = require("./job/generateClassify");
const generateStudy = require("./job/generateStudy");
const { startServer, closeServer } = require("./job/startStaticService");
const parseConfig = require("./common/parseConfig")
const getBooks = require("./job/getBooks");
const writeFile = require("./common/writeFile");
const getBlogs = require("./job/getBlogs");
const { backups } = require("./job/backups");
const { rimrafSync } = require('rimraf');
const { createServer } = require("http-server");
const fs = require("fs");

function general(cb) {
    console.log(`[${moment().format("HH:mm:ss")}] 开始数据生成任务`)
    generateClassify();
    generateStudy();
    console.log(`[${moment().format("HH:mm:ss")}] 完成数据生成任务`)
    cb();
}

async function parseBook(cb) {
    const config = parseConfig();
    console.log(`[${moment().format("HH:mm:ss")}] 开始解析书籍任务`)
    startServer(config.tempServicePort);
    await getBooks()
    const bakConfig = require(path.join(process.cwd(), "config/base.json"))
    bakConfig.bookList = []
    writeFile(path.join(process.cwd(), "config/base.json"), JSON.stringify(bakConfig, null, 4))
    closeServer();
    console.log(`[${moment().format("HH:mm:ss")}] 完成解析书籍任务`)
    cb();
}

async function parseBlog(cb) {
    const config = parseConfig();
    console.log(`[${moment().format("HH:mm:ss")}] 开始解析文章任务`)
    startServer(config.tempServicePort);
    await getBlogs();
    const bakConfig = require(path.join(process.cwd(), "config/base.json"))
    bakConfig.blogList = []
    writeFile(path.join(process.cwd(), "config/base.json"), JSON.stringify(bakConfig, null, 4))
    closeServer();
    console.log(`[${moment().format("HH:mm:ss")}] 完成解析文章任务`)
    cb();
}

function copy(cb) {
    const config = parseConfig();
    if (fs.existsSync(process.cwd() + "/public/assets")) {
        rimrafSync(process.cwd() + "/public/assets")
    }
    console.log(`[${moment().format("HH:mm:ss")}] 开始数据迁移`)
    src(process.cwd() + "/frontend/dist/**")
        .pipe(dest(process.cwd() + "/public"))
    src(config.outputDirectory + "/*.json")
        .pipe(dest(process.cwd() + "/public/json"))
    src(config.outputDirectory + "/**/*.html")
        .pipe(dest(process.cwd() + "/public"))
    src(process.cwd() + "/blog/*.html")
        .pipe(dest(process.cwd() + "/public/blog"))
    src(process.cwd() + "/lib/output/**")
        .pipe(dest(process.cwd() + "/public/output"))
    console.log(`[${moment().format("HH:mm:ss")}] 完成数据迁移`)
    cb()
}

async function clear(cb) {
    const config = parseConfig();
    await backups(config.outputDirectory, "data", false)
    await backups(path.join(process.cwd(), 'public'), "public", false)
    console.log(`[${moment().format("HH:mm:ss")}] 完成数据备份`)
    rimrafSync(config.outputDirectory)
    fs.mkdirSync(config.outputDirectory);
    src(process.cwd() + "/public/json/*.json")
        .pipe(dest(config.outputDirectory))
    console.log(`[${moment().format("HH:mm:ss")}] 清空数据`)
    cb();
}

function preview(cb) {
    const port = 4173
    createServer({
        root: path.join(process.cwd(), "public")
    }).listen(port)
    console.log(`服务地址: http://localhost:${port}`)
    cb();
}

exports.general = task(general)
exports.parseBook = task(parseBook)
exports.parseBlog = task(parseBlog)
exports.copy = task(copy)
exports.clear = task(clear)
exports.getBlog = series(parseBlog, copy, clear)
exports.getBook = series(parseBook, copy, clear)
exports.default = series(parseBlog, parseBook, copy, clear)
exports.preview = task(preview)
