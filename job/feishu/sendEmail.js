const nodemailer = require("nodemailer");
const { getData, log, getWorkSpaceDirectory } = require("../common");
const certificate = getData("certificate.json");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
let transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 587,
  secure: true,
  auth: {
    user: certificate.username,
    pass: certificate.password,
  },
});
function sendMail(address) {
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      log("Server is ready to take our messages");
      main(address).catch(console.error);
    }
  });
}

async function main(address) {
  const text = `这是导出的截至${moment().format(
    "YYYY-MM-DD HH:mm:ss"
  )}的最新的面试题 \n
声明：本站点中的内容有部分来自于网络，如有侵权，请联系本人清除，本站点的资源仅学习交流使用，如果你不认可，烦请离开
`;
  const message = {
    from: `<${certificate.username}>`,
    to: address.join(","),
    subject: "面试题",
    text: text, // plain text body
    html: `<b>你好</b><p>${text}</p><p>更多资料请查看<a href="https://usernameisregistered.github.io">得鹿梦鱼</a>或者联系站主加入飞书团队</p>`,
    attachments: [],
  };
  const feishuDir = path.join(getWorkSpaceDirectory(), "/data/feishu");
  fs.readdirSync(feishuDir).forEach((item) => {
    message.attachments.push({
      filename: item,
      path: path.join(feishuDir, item),
    });
  });
  const info = await transporter.sendMail(message);
  log("Message sent: " + info.messageId);
}
const emailAddress = [];
sendMail(emailAddress);
