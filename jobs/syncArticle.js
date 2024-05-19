const config = require("./config");
const path = require("path")
const fs = require("fs");
const crypto = require("crypto");
class HandlerArticle {
    constructor(){
        this.articlePath = path.join(config.InputRootDir, config.ArticleRouter);
        this.result = [];
        this.currentArticle = {};
        if(!fs.existsSync(this.articlePath)){
            console.log(`创建${config.ArticleRouter}的工作目录`);
            fs.mkdirSync(this.articlePath)
        } else {
            this.buildArticle();
            this.outputArticle();
            this.updateSideBar();
            this.appendIndexFile();
        }
    }
    buildArticle(){
        const taskName = `处理${config.ArticleRouter}`;
        console.log(`开始任务：${taskName}`);
        fs.readdirSync(this.articlePath).forEach(article => {
            if(path.extname(article) === ".md"){
                this.currentArticle = {
                    name: path.basename(article, ".md"),
                    originPath : path.join(this.articlePath, article),
                    originContent: fs.readFileSync(path.join(this.articlePath, article)).toString(),
                    outoutPath: path.join(config.MDRootDir, config.ArticleRouter, article),
                    images: []
                }
                console.log(`开始文章${this.currentArticle.name}的处理`);
                this.parseArticle();
                this.result.push(JSON.parse(JSON.stringify(this.currentArticle)));
                console.log(`完成文章${this.currentArticle.name}的处理`);
                this.currentArticle = {};
            }
        });
        console.log(`完成任务：${taskName}`);
    }

    parseArticle(){
        let exexImage = /!\[(.*?)\]\((.*?)\)/mg;
        let matcher;
        while ((matcher = exexImage.exec(this.currentArticle.originContent)) !== null) {
            if (!path.isAbsolute(matcher[2])) {
                const extname = path.extname(matcher[2]);
                let outputFile = path.join(config.AssetsRootDir, 'images', crypto.randomUUID() + extname);
                let newSrc = outputFile.replace(config.MDRootDir, "").replace('\\', "/");
                this.currentArticle.images.push({ alt: matcher[1], oldSrc: matcher[2], newSrc: newSrc, outputFile });
            }
        }
        this._outputContent();
    }

    _outputContent() {
        this.currentArticle.content = this.currentArticle.originContent + ""
        this.currentArticle.images.forEach(imageInfo => {
            this.currentArticle.content = this.currentArticle.content.replaceAll(imageInfo.oldSrc, imageInfo.newSrc);
        })
    }

    outputArticle() {
        this.result.forEach(article => {
            let childTaskName = `开始输出文章《${article.name}》`
            console.log(`开始任务：${childTaskName}`)
            this.writeFile(article);
            console.log(`结束任务：${childTaskName}`)
        })
    }

    writeFile(article) {
        let childTaskName = `写入文件《${path.basename(article.outoutPath)}》写入路径：${article.outoutPath}`
        console.log("开始任务：" + childTaskName);
        const directory = path.dirname(article.outoutPath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        fs.writeFileSync(article.outoutPath, `---
layout: doc
title: ${article.name}
---

${article.content}`);
article.images.forEach(imageInfo => {
            this.copyFile(imageInfo, article);
        })
        console.log(`完成任务: ${childTaskName}`);
    }

    copyFile(imageInfo, article) {
        let childTaskName = `复制[${imageInfo.alt}]文件《${path.basename(imageInfo.outputFile)}》`
        console.log("开始任务：" + childTaskName);
        const directory = path.dirname(imageInfo.outputFile);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        
        fs.copyFileSync(path.join(path.dirname(article.originPath), imageInfo.oldSrc), imageInfo.outputFile);
        console.log(`完成任务: ${childTaskName}`);
    };

    appendIndexFile(){
        const filename = path.join(config.MDRootDir, config.ArticleRouter, "index.md");
        const content = `<script setup>
import { useRouter   } from 'vitepress'

const { go } = useRouter();
let url = "/article/${this.result[0].name}"
console.log(url)
go(url)
</script>`;
        fs.writeFileSync(filename, content);
    }

    updateSideBar(){
        let oldData = JSON.parse(fs.readFileSync(path.join(config.VitePressRootDir, "sidebar.json")));
        oldData[`/${config.ArticleRouter}`] = [
            {
                text: "列表",
                items: this.result.map(article => {
                    return { text: article.name, link: `/${config.ArticleRouter}/${article.name}` }
                })
            }
        ]
        fs.writeFileSync(path.join(config.VitePressRootDir, "sidebar.json"), JSON.stringify(oldData, null, 4))
    }
}

new HandlerArticle();