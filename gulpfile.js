const { task } = require("gulp");
const { createServer } = require("http-server");
const buildBaseData = require("./job/buildBaseData");
const generalStatics = require("./job/generalStatics");
const { getOutputDirectory } = require("./job/common");
function general(cb) {
  buildBaseData();
  generalStatics();
  cb();
}

function preview(cb) {
  const port = 10000;
  let outputDirectory = getOutputDirectory()
  createServer({ root: outputDirectory }).listen(port);
  console.log(`服务地址: http://localhost:${port}`);
  cb();
}

exports.general = task(general);
exports.preview = task(preview);
