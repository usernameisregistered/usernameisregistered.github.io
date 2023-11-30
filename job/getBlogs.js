const parseConfig = require("../common/parseConfig");
const { STATUS } = require("../constants/constants");
const ini = require('iniparser');
const fs = require("fs")
const path = require("path");
const md5 = require('md5');
const writeFile = require("../common/writeFile");
const readFile = require("../common/readFile");
const startPuppeteer = require("./staratPuppeter");
const moment = require("moment");
const { backups } = require("./backups");
let config;
module.exports = async function getBlogs() {
    config = parseConfig();
    const result = {
        success: [],
        fail: []
    }
    if (config.blogList && config.blogList.length) {
        const size = config.blogList.length;
        for (let i = 0; i < size; i++) {
            const bookInfo = await getBlog(i, size, config.blogList[i]);
            if (bookInfo.status === STATUS.SUCCESS) {
                result.success.push({
                    path: bookInfo.path
                })
            } else {
                result.fail.push({
                    path: bookInfo.path,
                    message: bookInfo.message
                })
            }
        }
        if (result.fail.length) {
            const errorFile = path.join(config.outputDirectory, "error.blog.json")
            writeFile(errorFile, JSON.stringify(result.fail, null, 4))
            console.log(`存在解析失败的数据，详情请查看[${errorFile}]`)
        }
        if (config.backupEnable && result.success.length) {
            await backups(result.success.map(el => el.path), "blog", false);
        }
        console.log(`[${moment().format("HH:mm:ss")} ] 完成解析任务 共计${size} 成功${result.success.length} 失败 ${result.fail.length}`)
    } else {
        console.log("没有需要解析的文章信息")
    }
}

async function getBlog(current, total, blogPath) {
    console.log(`开始子任务：[解析文章 第${current + 1}/共${total}] [路径 ${blogPath}]`)
    const result = {
        status: STATUS.PROCESS,
        message: ''
    }
    if (path.extname(blogPath) === '.md') {
        content = readFile(blogPath);
        _result = await getBlogInfo(content, blogPath)
        if (_result.status === STATUS.SUCCESS) {
            result.status = _result.status;
            result.path = blogPath;
        } else {
            result.status = STATUS.FAIL;
            result.message = `${_result.message}${path.extname(blogPath).slice(1)}`;
        }
    } else {
        result.status = STATUS.FAIL;
        result.message = `无效的后缀名${path.extname(blogPath).slice(1)}`
    }
    return result;
}

async function getBlogInfo(content, blogPath) {
    const result = {
        status: STATUS.PROCESS,
        message: ''
    }
    const contents = content.split("===== 正文内容分割符号 ======").map(el => el.trim()).filter(el => !!el);
    if (contents.length === 2) {
        const _result = _getBlogInfo(contents[0])
        if (_result.status === STATUS.SUCCESS) {
            console.log(`开始解析文章${_result.title}`)
            const fileName = path.join(config.outputDirectory, "blog.json");
            updateTag(_result.tag)
            const res = await parseMarkdown(contents[1], "blog", _result.id, blogPath);
            if (res.status === STATUS.SUCCESS) {
                let historyBlogs = [];
                if (fs.existsSync(fileName)) {
                    historyBlogs = require(fileName)
                }
                const index = historyBlogs.findIndex(el => el.id === _result.id)
                if (index === -1) {
                    historyBlogs.push(_result)
                } else {
                    historyBlogs.splice(index, 1, _result)
                }
                writeFile(fileName, JSON.stringify(historyBlogs))
                result.status = STATUS.SUCCESS;
            } else {
                result.status = res.status;
                result.message = res.message
            }
        } else {
            result.status = STATUS.FAIL;
            result.message = _result.message
        }
    } else {
        result.status = STATUS.FAIL;
        result.message = `无效的内容，内容必须包含2部分文章内容和文章信息`
    }
    return result
}

function _getBlogInfo(contents) {
    const mustFiled = ["title", "desc", "tag"]
    const result = []
    let info = {};
    mustFiled.forEach(field => {
        const res = getField(field, contents);
        result.push(res)
        info[field.toLowerCase()] = res.message;
    })
    if (result.every(el => el.status === STATUS.SUCCESS)) {
        return {
            status: STATUS.SUCCESS,
            ...info,
            id: md5(info.title + info.desc)
        }
    } else {
        return {
            status: STATUS.FAIL,
            message: `缺少文章的必须字段`
        }
    }
}

function getField(field, content) {
    const reg = new RegExp(`${field}\\s*=\\s*(\\S*)`, 'i');
    const result = reg.exec(content);
    if (result) {
        return {
            status: STATUS.SUCCESS,
            message: result[1]
        }
    } else {
        return {
            status: STATUS.FAIL,
            message: `获取${filed}失败`
        }
    }
}

function updateTag(tag) {
    console.log("开始更新文章的标签信息")
    const tags = tag.split(",").filter(el => !!el);
    const fileName = path.join(config.outputDirectory, "blog_tag.json");
    let historyTag = [];
    if (fs.existsSync(fileName)) {
        historyTag = require(fileName)
    }
    tags.forEach(item => {
        const index = historyTag.findIndex(el => el === item)
        if (index === -1) {
            historyTag.push(item)
        } else {
            historyTag.splice(index, 1, item)
        }
    })
    writeFile(fileName, JSON.stringify(historyTag))
}

async function parseMarkdown(content, bookName, fileName, blogPath) {
    let result = {
        status: STATUS.PROCESS
    }
    const config = parseConfig();
    const outputDir = path.join(config.outputDirectory, bookName)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    const outputHTML = `
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <title>passerby-路人甲</title>
        <script src="http://localhost:${config.tempServicePort}/texme.js"></script>
    </head>
    
    <body>
        <textarea>
            ${content}
        </textarea>
    </body>
</html>`
    const outputFile = path.join(outputDir, `${fileName}.html`)
    writeFile(outputFile, outputHTML)
    res = await startPuppeteer(outputFile, path.dirname(blogPath));
    result.status = res.status;
    if (result.status === STATUS.SUCCESS) {
        result.path = outputFile.split(path.sep).join("/").replace(config.outputDirectory, "/" + md5(bookName));
    } else {
        result.message = res.message;
    }
    return result;
}