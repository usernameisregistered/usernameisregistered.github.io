const moment = require('moment');
const fs = require("fs");
const path = require('path');
const compressing = require('compressing')


/**
 * 备份数据
 * @param {String} bakDir 
 * @param {String} classify 
 * @param {String} sourceDir 
 */
exports.backups = async function (bakDir, sourceDir, name) {
    console.log(`开始备份数据 [${sourceDir}]`);
    if (!fs.existsSync(bakDir)) {
        fs.mkdirSync(bakDir);
    }
    const dest = path.join(bakDir, name + '.zip');
    await compressing.zip.compressDir(sourceDir, dest, { ignoreBase: true })
        .then(() => {
            console.log(`完成备份数据 [${dest}]`);
        })
        .catch(err => {
            throw err
        });
}