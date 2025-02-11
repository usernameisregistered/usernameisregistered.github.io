const { task } = require("gulp");
const { createServer } = require("http-server");
const buildBaseData = require("./job/buildBaseData");
const generalStatics = require("./job/generalStatics");
const { getOutputDirectory } = require("./job/common");
const generalAllChapter = require("./job/generalAllChapter");
const removeData = require("./job/removeData");
const exportPdf = require("./job/feishu/exportPdf");
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

async function exportFile(cb){
  await exportPdf();
  cb();
}

exports.general = task(general);
exports.preview = task(preview);
exports.exportFile = task(exportFile);
