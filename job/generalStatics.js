const {
  log,
  getTemplateContent,
  getOutputDirectory,
  getData,
  getDocDirectory,
  writeData,
} = require("./common");
const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");
let bookId = 10000;
let chapterId = 100000;
let chapterInfos = [];
let bookInfos = [];
module.exports = function generalStatics() {
  log("任务名称：《构建非章节内容》");
  generalIndex();
  generalPage();
  log("=========================================");
};

function generalIndex() {
  log("构建静态文件首页");
  const content = Mustache.render(
    getTemplateContent("index.html"),
    getData("base.json")
  );
  fs.writeFileSync(path.join(getOutputDirectory(), "index.html"), content);
}

function generalPage() {
  const common = getData("common.json");
  common.menuList.forEach((item) => {
    log(`构建静态文件${item.name}`);
    let data = Object.assign(getData("base.json"), common, {
      subhead: item.name,
    });
    const templateName = item.url.slice(1);
    if (templateName.split(".")[0] === "classify") {
      Object.assign(data, { categoryList: generalCategory() });
    }
    if (templateName.split(".")[0] === "study") {
      Object.assign(data, { studyList: generalStudy() });
    }
    const content = Mustache.render(getTemplateContent(templateName), data);
    fs.writeFileSync(path.join(getOutputDirectory(), templateName), content);
  });
}

function generalCategory() {
  const categoryData = getData(path.join(getDocDirectory(), "category.json"));
  let result = [];
  let el = categoryData.shift();
  while (el) {
    const categoryItem = {
      id: el.id,
      name: el.name,
      type: "group",
      classifys: [],
    };
    let item = el.children.shift();
    while (item) {
      const classifyItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        type: "classify",
        fullPath: path.join(getDocDirectory(), item.id),
        books: [],
      };
      console.log(`开始获取类别《${item.name}》下的书籍信息`);
      classifyItem.books = getClassifyBooks(classifyItem.fullPath);
      if (classifyItem.books.length) {
        categoryItem.classifys.push(classifyItem);
      }
      item = el.children.shift();
    }
    result.push(categoryItem);
    el = categoryData.shift();
  }
  writeData("chapters.json", chapterInfos);
  writeData("books.json", bookInfos);
  return result;
}

function getClassifyBooks(classifyPath) {
  const result = [];
  if (fs.existsSync(classifyPath) && fs.statSync(classifyPath).isDirectory()) {
    const list = fs.readdirSync(classifyPath);
    let bookName = list.shift();
    while (bookName) {
      const bookPath = path.join(classifyPath, bookName);
      const id = bookId.toString();
      console.log(`开始获取书籍《${bookName}》下的章节信息`);
      const bookInfo = {
        id: id,
        name: bookName,
        fullPath: bookPath,
        chapterList: getBookChapters(bookPath),
        type: "book",
        url: `/${id}_${chapterId}.html`,
      };
      result.push(bookInfo);
      bookInfos.push({ value: bookInfo.chapterList,key: id, bookName: bookName });
      bookId++;
      bookName = list.shift();
    }
  }
  return result;
}

function getBookChapters(bookPath) {
  const result = [];
  if (fs.existsSync(bookPath) && fs.statSync(bookPath).isDirectory()) {
    let currentBookChapterId = chapterId;
    const list = fs.readdirSync(bookPath);
    let chapter = list.shift();
    while (chapter) {
      const chapterPath = path.join(bookPath, chapter);
      if (
        fs.statSync(chapterPath).isFile() &&
        path.extname(chapterPath) === ".md"
      ) {
        const chapterInfo = {
          id: `${bookId}_${currentBookChapterId}`,
          type: "chapter",
          name: path.basename(chapter).slice(0, -3).replace(/^\d*/, ""),
          fullPath: chapterPath,
          url: `/${bookId}_${currentBookChapterId}.html`,
        };
        chapterInfos.push({
          key: `${bookId}_${currentBookChapterId}`,
          path: chapterPath,
        });
        result.push(chapterInfo);
        currentBookChapterId++;
      }
      chapter = list.shift();
    }
  }
  return result;
}

function generalStudy() {
  return getData(path.join(getDocDirectory(), "study.json"));
}
