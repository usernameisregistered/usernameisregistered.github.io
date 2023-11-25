const fs = require("fs");
const readFile = require('../common/readFile');
const path = require('path');
const writeFile = require("../common/writeFile");
const staratPuppeter = require("./staratPuppeter");
module.exports = async function parseMarkdown(filePath, bookName, fileName) {
    const outputDir = path.join(process.cwd(), `temp_${bookName}`)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    const content = readFile(filePath);
    const outputHTML = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>${bookName}-${fileName}</title>
        <script src="http://localhost:60000/texme.js"></script>
    </head>
    
    <body>
        <textarea>
            ${content}
        </textarea>
    </body>
</html>`
    const outputFile = path.join(outputDir, `${fileName}.html`)
    writeFile(outputFile, outputHTML)
    await staratPuppeter(outputFile)
    return outputFile
}