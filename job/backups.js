const moment = require('moment');
const fs = require("fs");
const path = require('path');
const compressing = require('compressing');
const parseConfig = require('../common/parseConfig');
let config;
/**
 * 备份数据
 * @param {String} bakDir 
 * @param {String} classify 
 * @param {String} sourceDir 
 */
exports.backups = async function (sourceDir, name, single) {
    console.log(`开始备份数据 [${sourceDir}]`);
    config = parseConfig();
    const dest = path.join(config.backupDirectory, single ? `${name}.zip` : `${name}${moment().format("YYYYMMDDHHmmss")}.zip`);
    if (Array.isArray(sourceDir)) {
        const stream = new compressing.zip.Stream();
        sourceDir.forEach(file => {
            stream.addEntry(file)
        })
        await stream.pipe(fs.createWriteStream(dest))
    } else {
        await compressing.zip.compressDir(sourceDir, dest, { ignoreBase: true });
    }
}