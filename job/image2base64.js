const fs = require("fs");
module.exports = function image2base64(fileUrl) {
    const imageBase64 =fs.readFileSync(fileUrl).toString("base64");
    const imagePrefix = "data:image/png;base64,";
    return imagePrefix + imageBase64;
}