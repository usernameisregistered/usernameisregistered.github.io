const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const config = require("./config");
module.exports = class HandlerCategory {
    constructor(category, categoryPath) {
        this.category = category;
        this.categoryPath = categoryPath;
        this.taskName = `收集分类《${this.category}》下的电子书信息`;
        this.result = [];
        this.currentBook = {};
        this.currentChapter = {};
        console.log(`开始任务: ${this.taskName}`);
        this.getBook();
        this.outputBook();
        console.log(`完成任务: ${this.taskName}`);
    }

    getBook() {
        fs.readdirSync(this.categoryPath).forEach(bookname => {
            this.getChapter(bookname, path.join(this.categoryPath, bookname));
        })
    }

    getChapter(bookname, bookPath) {
        let childTaskName = `收集电子书《${bookname}》的章节信息`;
        this.currentBook = { bookname, bookPath: bookPath, outoutPath: path.join(config.MDRootDir, this.category, bookname), chapters: [] };
        console.log(`开始任务: ${childTaskName}`);
        fs.readdirSync(bookPath).forEach(chapter => {
            if (path.extname(chapter) === ".md") {
                this._handlerChapter(path.basename(chapter, ".md"), path.join(bookPath, chapter));
            }
        })
        console.log(`完成任务: ${childTaskName}`);
        console.log(this.currentBook)
        this.result.push(JSON.parse(JSON.stringify(this.currentBook)));
        this.currentBook = {};

    }

    _handlerChapter(chapterName, chapterPath) {
        this.currentChapter = { chapterName: chapterName, chapterPath: chapterPath, images: [], outoutPath: path.join(this.currentBook.outoutPath, chapterName + ".md") }
        let childTaskName = `收集章节《${chapterName}》信息`;
        console.log(`开始任务: ${childTaskName}`);
        this.currentChapter.original = fs.readFileSync(chapterPath).toString();
        this._handlerResource();
        console.log(`完成任务: ${childTaskName}`);
        this.currentBook.chapters.push(JSON.parse(JSON.stringify(this.currentChapter)));
        this.currentChapter = {};
    }

    _handlerResource() {
        let childTaskName = `处理章节《${this.currentChapter.chapterName}》的内容信息`;
        console.log(`开始任务: ${childTaskName}`);
        let exexImage = /!\[(.*?)\]\((.*?)\)/mg;
        let matcher;
        while ((matcher = exexImage.exec(this.currentChapter.original)) !== null) {
            if (!path.isAbsolute(matcher[2])) {
                const extname = path.extname(matcher[2]);
                let outputFile = path.join(config.AssetsRootDir, 'images', crypto.randomUUID() + extname);
                let newSrc = outputFile.replace(config.MDRootDir, "");
                this.currentChapter.images.push({ alt: matcher[1], oldSrc: matcher[2], newSrc: newSrc, outputFile });
            }
        }
        this._outputContent();
        console.log(`完成任务: ${childTaskName}`);
    }

    _outputContent() {
        this.currentChapter.content = this.currentChapter.original + ""
        this.currentChapter.images.forEach(imageInfo => {
            this.currentChapter.content = this.currentChapter.content.replaceAll(imageInfo.oldSrc, imageInfo.newSrc);
        })
    }

    outputBook() {
        this.result.forEach(book => {
            let childTaskName = `开始输出电子书《${book.bookname}》`
            console.log(`开始任务：${childTaskName}`)
            book.chapters.forEach(chapter => {
                this.writeFile(chapter);
            })
            console.log(`结束任务：${childTaskName}`)
        })
    }

    writeFile(chapter) {
        let childTaskName = `写入文件《${path.basename(chapter.outoutPath)}》写入路径：${chapter.outoutPath}`
        console.log("开始任务：" + childTaskName);
        const directory = path.dirname(chapter.outoutPath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        fs.writeFileSync(chapter.outoutPath, chapter.content);
        chapter.images.forEach(imageInfo => {
            this.copyFile(imageInfo, chapter);
        })
        console.log(`完成任务: ${childTaskName}`);
    }

    copyFile(imageInfo, chapter) {
        let childTaskName = `复制[${imageInfo.alt}]文件《${path.basename(imageInfo.outputFile)}》`
        console.log("开始任务：" + childTaskName);
        const directory = path.dirname(imageInfo.outputFile);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        
        fs.copyFileSync(path.join(path.dirname(chapter.chapterPath), imageInfo.oldSrc), imageInfo.outputFile);
        console.log(`完成任务: ${childTaskName}`);
    };
}