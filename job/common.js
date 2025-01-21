const moment = require("moment");
const fs = require("fs");
const path = require("path");
exports.log = function log(message) {
  console.log(`[${moment().format("HH:mm:ss")}] ${message}`);
};
exports.getOutputDirectory = function getOutputDirectory() {
  const config = getData("base.json");
  let outputDirectory = config.outputDirectory;
  if (!path.isAbsolute(config.outputDirectory)) {
    outputDirectory = path.join(process.cwd(), outputDirectory);
  }
  return outputDirectory;
};

exports.getDocDirectory = function getDocDirectory() {
  const config = getData("base.json");
  let docDirectory = config.docDirectory;
  if (!path.isAbsolute(config.docDirectory)) {
    docDirectory = path.join(process.cwd(), docDirectory);
  }
  return docDirectory;
};

exports.getTemplateContent = function getTemplateFile(fileName) {
  const filePath = path.join(process.cwd(), "template", fileName);
  return fs.readFileSync(filePath).toString();
};

exports.mergeData = function mergeData() {
  const fileList = [...arguments];
  const result = {};
  fileList.forEach((file) => {
    Object.assign(result, getData(file));
  });
  return result;
};

exports.writeData = function writeData(fileName, data){
  fs.writeFileSync(path.join(process.cwd(), "data", fileName), JSON.stringify(data, null, 4))
}

function getData(fileName) {
  if (!path.isAbsolute(fileName)) {
    fileName = path.join(process.cwd(), "data", fileName);
  }
  return JSON.parse(fs.readFileSync(fileName).toString());
}

exports.removeDataFile = function removeDataFile (fileName){
  if (!path.isAbsolute(fileName)) {
    fileName = path.join(process.cwd(), "data", fileName);
  }
  fs.rmSync(fileName)
}

exports.getData = getData;
