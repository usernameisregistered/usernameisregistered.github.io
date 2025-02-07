const {  execSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const { log, getOutputDirectory } = require("../common");
const path = require("path");
let chromePath;
module.exports = function getChromePath() {
  const chromePathFile = path.join(getOutputDirectory(), "../data/chromePath.txt");
  if(fs.existsSync(chromePathFile)){
    return fs.readFileSync(chromePathFile).toString()
  }  else {
    log("开始全局查找")
    globalSearch();
    fs.writeFileSync(chromePathFile, chromePath)
    return chromePath
  }
}
function globalSearch(){
  log("开始获取盘符信息");
    const roots = execSync(`wmic logicaldisk get name`)
      .toString()
      .split(os.EOL)
      .map((el) => el.trim())
      .filter((el) => el)
      .slice(1);
    for (let dirve of roots) {
      log(`开始在${dirve}/盘符查找chrome的可执行文件路径`);
      findFile(`C:/`, "chrome.exe");
      if (chromePath) {
        log(`在${dirve}/盘符查找到chrome的可执行文件路径：${chromePath}`);
        break;
      }
    }
}

function findFile(dir, searchFile) {
  const dirs = fs.readdirSync(dir);
  let file = dirs.pop();
  while(file && !chromePath){
    const filePath = path.join(dir, file);
    try {
      const stats = fs.statSync(filePath);
      if (!stats.isDirectory()) {
        const searchPath = path.join(path.dirname(filePath), searchFile)
        if (searchPath.toLowerCase() === filePath.toLowerCase()) {
          chromePath = filePath;
          break;
        }
      } else {
        findFile(filePath, searchFile);
      }
    } catch (err) {}
    file = dirs.pop();
  }
}
