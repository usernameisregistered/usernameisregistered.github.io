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
exports.backups = async function (bakDir, classify, sourceDir, name) {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 开始备份数据]`);
    if (!fs.existsSync(bakDir)) {
        fs.mkdirSync(bakDir);
    }
    const backupDir = path.join(bakDir, classify)
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
    }
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 开始备份数据 备份路径${backupDir}`);
    const dest = path.join(backupDir, name + moment().format("YYYY-MM-DD_HH_mm_ss") + '.tgz');
    await compressing.tgz.compressDir(sourceDir, dest, { ignoreBase: true })
        .then(() => {
            console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 完成备份数据]`);
        })
        .catch(err => {
            console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")} 备份数据失败，请手动备份]`);
            console.log(err)
        });
}