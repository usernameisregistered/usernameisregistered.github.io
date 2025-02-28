const { task } = require("gulp");
const { createServer } = require("http-server");
const buildBaseData = require("./job/buildBaseData");
const generalStatics = require("./job/generalStatics");
const { getOutputDirectory, getData, log } = require("./job/common");
const generalAllChapter = require("./job/generalAllChapter");
const removeData = require("./job/removeData");
const exportPdf = require("./job/feishu/exportPdf");
const generalPdf = require("./job/generalPdf");
const path = require("path")
const fs = require("fs");
const addWatermater = require("./job/addWatermater");
async function general(cb) {
  await buildBaseData();
  generalStatics();
  await generalAllChapter();
  removeData();
  await addWaterMarks();
  cb();
}

async function addWaterMarks(){
  const text = getData("base.json").title;
  const directorys = path.join(getOutputDirectory(), "assets/images");
  const files = fs.readdirSync(directorys);
  const total = files.length;
  let item = files.pop();
  let i = 1;
  while(item){
    log(`添加水印 开始处理[${i}/${total}]`)
    if(path.extname(item) === ".png"){
      const fileName = path.join(directorys, item);
      await addWatermater(fileName, text)
    }
    i++
    item = files.pop();
  }
}

function preview(cb) {
  const port = 10000;
  let outputDirectory = getOutputDirectory()
  createServer({ root: outputDirectory }).listen(port);
  console.log(`服务地址: http://localhost:${port}`);
  cb();
}

async function exportFeishuFile(cb){
  await exportPdf();
  cb();
}

async function exportDocPDF(cb){
  await generalPdf();
  cb();
}



exports.general = task(general);
exports.preview = task(preview);
exports.exportFeishuFile = task(exportFeishuFile);
exports.exportDocPDF = task(exportDocPDF);