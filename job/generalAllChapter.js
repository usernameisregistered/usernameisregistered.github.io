const { log, getData, getOutputDirectory, getTemplateContent, mergeData, getDocDirectory } = require("./common");
const { Notebook } = require("crossnote");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto")
const Mustache = require("mustache");
let uid = 1000000;
module.exports = async function generalAllChapter() {
  log("任务名称：《构建章节内容》");
  const data = getData("chapters.json");
  const total = data.length;
  let i = 1;
  let item = data.shift();
  while (item) {
    let result = await generalChapter(item, total, i );
    generalPage(result);
    item = data.shift();
    i++
  }
  log("=========================================");
};

async function generalChapter(chapterInfo, total, current) {
  const filePath = chapterInfo.path;
  const subhead = path.basename(filePath).slice(0, -3).replace(/^\d*/, "");
  log(`[${current}/${total}] 开始转化章节：${subhead}`);
  const html = await parseMarked(filePath);
  const result = mergeData("base.json", "common.json")
  const chapterdata = getChapterList(chapterInfo.key.split("_")[0]);
  return Object.assign(result,{html, subhead, id: chapterInfo.key, ...chapterdata })
}

async function parseMarked(filePath) {
  const notebook = await Notebook.init({
    config: {
      previewTheme: "atom-light.css",
      mathRenderingOption: "KaTeX",
      codeBlockTheme: "atom-light.css",
      printBackground: true,
      enableScriptExecution: true,
    },
  });
  const engine = notebook.getNoteMarkdownEngine(filePath);
  await engine.htmlExport({ offline: false, runAllCodeChunks: true });
  let html = fs.readFileSync(filePath.replace("md", "html")).toString();
  const imageReg = /<img[^src]*src="([^"]*)"/g;
  let result;
  while ((result = imageReg.exec(html)) !== null) {
    const fileFullPath = path.join(
      path.dirname(filePath),
      decodeURIComponent(result[1])
    );
    const fileName = crypto.createHash("md5").update(fileFullPath.slice(getDocDirectory().length)).digest("hex");
    const outputFile = path.join(
      getOutputDirectory(),
      "assets/images",
      fileName + path.extname(result[1])
    );
    fs.copyFileSync(fileFullPath, outputFile);
    html = html.replace(
      result[1],
      `/assets/images/${fileName + path.extname(result[1])}`
    );
  }
  fs.rmSync(filePath.replace("md", "html"));
  let hrefReg = /<a[^href]*href=\"([^\"]*)\"/g;
  html = html.replace(hrefReg, (match, $1) => {
    if ($1[0] === ".") {
      const fullPath = path.join(path.dirname(filePath), $1);
      if (fullPath) {
        const fileFullPath = path.join(
          path.dirname(fullPath),
          decodeURIComponent($1)
        );
        const key = findKey(fileFullPath);
        if (key) {
          return match.replace($1, `/${key}.html`);
        }
        return match;
      }
      return match;
    }
    return match;
  });
  const contentReg = /<body [^>]*>([\s\S]*)<\/body>/gm;
  result = contentReg.exec(html);
  if (result) {
    html = result[1];
  }
  return html;
}

function findKey(fullPath) {
  const data = getData("chapters.json");
  const item = data.find(
    (el) => path.normalize(el.path) === path.normalize(fullPath)
  );
  return item ? item.key : "";
}

function getChapterList(bookId){
 let result = getData("books.json").find(el => el.key === bookId.toString())
 return {bookName: result.bookName, chapterList: result.value}
}
function generalPage(result) {
  let content = Mustache.render(getTemplateContent("chapter.html"), result);
  content = content.replace(/[(\r\n)|(\n)]/g, '')
  fs.writeFileSync(path.join(getOutputDirectory(), result.id + ".html"), content);
}


