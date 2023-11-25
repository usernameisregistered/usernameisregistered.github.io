const fs = require("fs");
const path = require('path');
const writeFile = require("../common/writeFile");
const staratPuppeter = require("./staratPuppeter");
module.exports = async function parseMarkdownWithBlog(content, fileName) {
    const outputDir = path.join(process.cwd(), `temp_blog`)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    const outputHTML = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>${fileName}</title>
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