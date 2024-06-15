const fs = require('fs');
const path = require('path');
const config = require("./config")
const rootDir = path.join(config.VitePressRootDir, "dist");
const outputDir = path.join(__dirname, "../public");
const { rimrafSync } = require('rimraf')
if(!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}
function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    fs.mkdirSync(dest, { recursive: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
copyDir(rootDir, outputDir);
rimrafSync(rootDir);