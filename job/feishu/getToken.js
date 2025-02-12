const { getData, log } = require("../common");
const getChromePath = require("./getChromePath");
const certificate = getData("certificate.json");
const puppeteer = require("puppeteer-core");
async function getCode() {
  log("开始获取浏览器的路径信息");
  let channelPath = await getChromePath();
  const browser = await puppeteer.launch({ executablePath: channelPath, headless: false });
  const page = await browser.newPage();
  const url = `https://accounts.feishu.cn/open-apis/authen/v1/authorize?client_id=${certificate.appId}&redirect_uri=https%3A%2F%2Fopen.feishu.cn%2Fapi-explorer%2Floading`;
  await page.goto(url);
  sleep(15)
  await page.locator(".bottom-btns-wrapper .ud__button--filled").click()
  sleep(15)
  log(page.url())
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      log("睡眠" + time + "s");
      resolve();
    }, time * 1000);
  });
}
module.exports = async function getToken() {
  await getCode();
};
