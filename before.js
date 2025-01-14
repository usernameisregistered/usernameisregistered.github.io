const path = require("path");
const fs = require("fs");
const parseMarked = require("./parseMarked");
/**
 * 获取文档的信息
 * @param {String} docDirectory 文档所在位置
 */
let bookId = 10000;
let chapterInitId = 100000;
const bookIdLists= [];
const chapterLists = [];
const chapterInfos = [];
async function generalDocTree(docDirectory) {
  if (fs.existsSync(path.join(process.cwd(), "public/assets"))) {
    fs.rmSync(path.join(process.cwd(), "public/assets"), { recursive: true });
  }
  console.log("创建需要的目录", path.join(process.cwd(), "public/assets"));
  fs.mkdirSync(path.join(process.cwd(), "public/assets"));
  console.log("读取分类数据");
  const filePath = path.join(docDirectory, "category.json");
  const result = [];
  const data = JSON.parse(fs.readFileSync(filePath).toString());
  let el = data.shift();
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
        fullPath: path.join(docDirectory, item.id),
        books: [],
      };
      console.log(`开始获取类别《${item.name}》下的书籍信息`);
      classifyItem.books = await getClassifyBooks(classifyItem.fullPath);
      categoryItem.classifys.push(classifyItem);
      item = el.children.shift();
    }
    result.push(categoryItem);
    el = data.shift();
  }
  console.log("开始写入获取到的所有信息");
  fs.writeFileSync(
    path.join(process.cwd(), "book.json"),
    JSON.stringify(bookIdLists, null, 4)
  );
  fs.writeFileSync(
    path.join(process.cwd(), "router.json"),
    JSON.stringify(chapterInfos, null, 4)
  );
  fs.writeFileSync(
    path.join(process.cwd(), "chapter.json"),
    JSON.stringify(chapterLists, null, 4)
  );
  fs.writeFileSync(
    path.join(process.cwd(), "data.json"),
    JSON.stringify(result, null, 4)
  );
}

/**
 * 获取某个分类下的书籍信息
 * @param {String} fullPath
 * @returns {Array}
 */
async function getClassifyBooks(classifyPath) {
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
        chapterList: await getBookChapters(bookPath),
        type: "book",
        url: `/chapter/${id}_${chapterInitId}`,
      };
      bookIdLists.push(id)
      result.push(bookInfo);
      bookId++;
      bookName = list.shift();
    }
  }
  return result;
}

/**
 * 获取某个书下的所有章节信息
 * @param {String} bookPath
 * @returns {Array}
 */
async function getBookChapters(bookPath) {
  const result = [];
  if (fs.existsSync(bookPath) && fs.statSync(bookPath).isDirectory()) {
    let charpterId = chapterInitId;
    const list = fs.readdirSync(bookPath);
    let chapter = list.shift();
    while (chapter) {
      const chapterPath = path.join(bookPath, chapter);
      if (
        fs.statSync(chapterPath).isFile() &&
        path.extname(chapterPath) === ".md"
      ) {
        const chapterInfo = {
          id: `${bookId}_${charpterId}`,
          type: "chapter",
          name: path.basename(chapter).slice(0, -3).replace(/^\d*/, ""),
          fullPath: chapterPath,
          url: `/chapter/${bookId}_${charpterId}`,
          content: await parseMarked(chapterPath),
        };
        chapterInfos.push({key: `${bookId}_${charpterId}`, path: chapterPath})
        result.push(chapterInfo);
        chapterLists.push(`${bookId}_${charpterId}`)
        charpterId++;
      }
      chapter = list.shift();
    }
  }
  return result;
}
const rootDirectory = JSON.parse(fs.readFileSync("./config.json").toString()).docDirectory
generalDocTree(rootDirectory);
