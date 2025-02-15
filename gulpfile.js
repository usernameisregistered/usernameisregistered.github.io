const { task } = require("gulp");
const { createServer } = require("http-server");
const buildBaseData = require("./job/buildBaseData");
const generalStatics = require("./job/generalStatics");
const { getOutputDirectory } = require("./job/common");
const generalAllChapter = require("./job/generalAllChapter");
const removeData = require("./job/removeData");
const exportPdf = require("./job/feishu/exportPdf");
const generalPdf = require("./job/generalPdf");
async function general(cb) {
  await buildBaseData();
  generalStatics();
  await generalAllChapter();
  removeData();
  cb();
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