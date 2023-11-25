const md5 = require("md5");
const { STATUS } = require("./common/constants");
const readFile = require("./common/readFile");
const parseMarkdownWithBlog = require("./jobs/parseMarkdownWithBlog");
const path = require("path")
const fs = require("fs")
const outputDir = path.join(process.cwd(), 'blog')
const { src, dest } = require('gulp');
const { backups } = require('./jobs/backups');
const writeFile = require("./common/writeFile");
module.exports = async function getBlog(blogList) {
    const result = {
        success: [],
        fail: []
    }
    for (const blogdir of blogList) {
        let blogDirectory = blogdir;
        if (!path.isAbsolute(blogDirectory)) {
            blogDirectory = path.join(process.cwd(), blogDirectory);
        } 
        const blogResult = await _getBlog(blogDirectory);
        if (blogResult.status === STATUS.SUCCESS) {
            result.success.push(blogResult)
        } else {
            result.fail.push(blogResult)
        }
    }
    await backups(path.join(process.cwd(), 'bak'), path.join(process.cwd(), 'temp_blog_bak'), "blog_").then(res => {
        console.log(`完成文章的备份`)
    })
    return result;
}

async function _getBlog(blogDirectory) {
    const result = {
        status: STATUS.PROCESS,
        message: ''
    }
    if (path.extname(blogDirectory) === '.md') {
        content = readFile(blogDirectory);
        _result = await getBlogInfo(content)
        if (_result.status === STATUS.SUCCESS) {
            fs.copyFileSync(blogDirectory, path.join(process.cwd(), `temp_blog_bak/${_result.title}.md`))
            result.status = STATUS.SUCCESS;
            result.path = blogDirectory;
        } else {
            result.status = STATUS.FAIL;
            result.message = _result.message;
        }
    } else {
        result.status = STATUS.FAIL;
        result.message = `无效的后缀名${path.extname(blogDirectory).slice(1)}`
    }
    return result;
}

async function getBlogInfo(content) {
    const result = {
        status: STATUS.PROCESS,
        message: ''
    }
    const contents = content.split("===== 正文内容分割符号 ======").map(el => el.trim()).filter(el => !!el);
    if (contents.length === 2) {
        const _result = _getBlogInfo(contents[0])
        if (_result.status === STATUS.SUCCESS) {
            console.log(`开始解析文章${_result.title}`)
            const fileName = path.join(outputDir, "blog.json");
            updateTag(_result.tag)
            const outputFile = await parseMarkdownWithBlog(contents[1], _result.id);
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
            src(outputFile).pipe(dest(path.join(process.cwd(), `blog`)))
            result.status = STATUS.SUCCESS;
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

function updateTag(tag){
    console.log("开始更新文章的标签信息")
    const tags = tag.split(",").filter(el => !!el);
    const fileName = path.join(outputDir, "blog_tag.json");
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