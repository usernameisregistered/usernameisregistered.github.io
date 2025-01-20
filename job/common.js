const moment = require("moment");
const fs = require("fs");
const path = require("path");
exports.log = function log(message) {
  console.log(`[${moment().format("HH:mm:ss")}] ${message}`);
};
exports.getOutputDirectory = function getOutputDirectory() {
  const config = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/base.json")).toString()
  );
  let outputDirectory = config.outputDirectory;
  if (!path.isAbsolute(config.outputDirectory)) {
    outputDirectory = path.join(process.cwd(), outputDirectory);
  }
  return outputDirectory;
};

exports.getDocDirectory = function getDocDirectory() {
  const config = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/base.json")).toString()
  );
  let docDirectory = config.docDirectory;
  if (!path.isAbsolute(config.docDirectory)) {
    docDirectory = path.join(process.cwd(), docDirectory);
  }
  return docDirectory;
};

exports.getTemplateContent = function getTemplateFile(fileName){
    const filePath = path.join(process.cwd(), "template", fileName);
    return fs.readFileSync(filePath).toString();
}
