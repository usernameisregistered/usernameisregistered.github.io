const fs = require("fs");
const readFile = require('../common/readFile');
const path = require('path');
const writeFile = require("../common/writeFile");
module.exports = function parseMarkdown(filePath, pageName, bookName, fileName) {
    const content = readFile(filePath);
    const outputHTML = `
<!DOCTYPE html>
<html lang="en">
<title>${bookName}-${pageName}</title>
<script src="https://cdn.jsdelivr.net/npm/texme@0.7.0"></script>
<textarea>
${content}
</textarea>`
    const outputDir = path.join(process.cwd(), `temp_${bookName}`)
    if(!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir)
    }
    const fileFullName = path.join(outputDir, `${fileName}.html`)
    writeFile(fileFullName, outputHTML)
    return fileFullName
}