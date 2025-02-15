const { log, getPDFExportDirctory, getDocDirectory, getData } = require("./common");
const { Notebook } = require("crossnote");
const path = require("path");
const fs = require("fs");
const exportPdfDirctory = getPDFExportDirctory();
module.exports = async function generalPDF() {
  log("任务名称：《生成pdf》");
  if (!fs.existsSync(exportPdfDirctory)) {
    fs.mkdirSync(exportPdfDirctory);
  }
  await generalCategory();
};

async function generalCategory() {
  log("获取需要转化的类别信息")
  const categoryData = getData(path.join(getDocDirectory(), "category.json"));
  let result = [];
  let el = categoryData.shift();
  while (el) {
    let item = el.children.shift();
    while (item) {
      const classifyItem = {
        name: item.name,
        id: item.id,
        fullPath: path.join(getDocDirectory(), item.id),
      };
      result.push(classifyItem)
      item = el.children.shift();
    }
    el = categoryData.shift();
  }
  el = result.shift();
  while (el) {
    log(`开始转换<${el.name}>下的文章`)
    const dir = path.join(exportPdfDirctory, el.id)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    }
    if(fs.existsSync(el.fullPath)){
      // await _generalPDF(el.fullPath);
      clearPDF(el.fullPath);
    }
    el = result.shift();
  }
}

async function _generalPDF(direcotry) {
  const dirs = fs.readdirSync(direcotry);
  let item = dirs.shift();
  while (item) {
    if (item !== "assets") {
      const fullPath = path.join(direcotry, item);
      if (fs.statSync(fullPath).isFile()) {
        if (path.extname(item) === ".md") {
          const fileName = path.basename(item).slice(0, -3);
          log(`开始转换文件《${fileName}》`);
          const fullPathPdf = path.join(fullPath.replace(getDocDirectory(), exportPdfDirctory)).replace(".md", ".pdf");
          if (fs.existsSync(fullPathPdf)) {
            log(`删除之前生成的历史数据:${fileName + ".pdf"}`)
            fs.rmSync(fullPathPdf)
          }
          await generalSignlePdf(fullPath, fileName);
        }
      } else {
        if(!fs.existsSync(fullPath.replace(getDocDirectory(), exportPdfDirctory))){
          fs.mkdirSync(fullPath.replace(getDocDirectory(), exportPdfDirctory))
        }
        await _generalPDF(fullPath);
      }
    }
    item = dirs.shift();
  }
}

async function generalSignlePdf(fullPath, fileName) {
  const notebook = await Notebook.init({
    config: {
      previewTheme: "atom-light.css",
      mathRenderingOption: "KaTeX",
      codeBlockTheme: "atom-light.css",
      printBackground: true,
      enableScriptExecution: true,
    },
  });
  const engine = notebook.getNoteMarkdownEngine(fullPath);
  await engine.eBookExport({ fileType: "pdf" });
  log(`完成转化文件：《${fileName}》`);
  const fullPathPdf = path.join(fullPath.replace(getDocDirectory(), exportPdfDirctory)).replace(".md", ".pdf");
  fs.copyFileSync(fullPath.replace(".md", ".pdf"), fullPathPdf)
}

function clearPDF(direcotry){
  const dirs = fs.readdirSync(direcotry);
  let item = dirs.shift();
  while (item) {
    if (item !== "assets") {
      const fullPath = path.join(direcotry, item);
      if (fs.statSync(fullPath).isFile()) {
        if (path.extname(item) === ".pdf") {
          log(`删除临时的历史数据${path.basename(item, ".pdf")}》`)
          fs.rmSync(fullPath)
        }
      }

    }
    item = dirs.shift();
  }
}
