const { log, getTemplateContent, getOutputDirectory } = require("./common");
const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");
module.exports = function generalStatics() {
  generalIndex();
  generalClassify();
};

function generalIndex() {
  log("生成静态文件首页");
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/base.json")).toString()
  );
  const content = Mustache.render(getTemplateContent("index.html"), data);
  fs.writeFileSync(path.join(getOutputDirectory(), "index.html"), content);
}

function generalClassify() {
  log("生成静态文件知识库");
}
