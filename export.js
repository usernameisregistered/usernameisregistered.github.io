/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const routerList = require("./router.json");
function emptyFolder(folderPath) {
  fs.rmdirSync(folderPath, { recursive: true });
}
let outputDir = path.join(process.cwd(), "output");
function findKey(fullPath) {
  const item = routerList.find(
    (el) => path.normalize(el.path) === path.normalize(fullPath)
  );
  return item ? item.key : "";
}

function findPath(chapterId) {
  const item = routerList.find((el) => chapterId === el.key);
  return item ? item.path : "";
}

function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  fs.readdirSync(dest, { recursive: false });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        console.log(`开始创建文件夹[${destPath}]`);
        fs.mkdirSync(destPath);
      }
      copyDir(srcPath, destPath);
    } else {
      if (path.extname(destPath) === ".json") {
        destPath = destPath.replace(
          outputDir,
          path.join(outputDir, "data/delumengma")
        );
        try {
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
        } catch (err) {
          console.log("目录已存在");
        }
        fs.copyFileSync(srcPath, destPath);
        changeContentJSON(destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
        if ([".css", ".html", ".js"].includes(path.extname(destPath))) {
          console.log(`需要修改文件[${destPath}]的内容`);
          changeContent(destPath);
        }
      }
    }
  }
}
function exportFile(output, inputDir) {
  if (fs.existsSync(output)) {
    console.log(`开始清空文件夹[${output}]`);
    emptyFolder(output);
  }
  console.log(`开始创建文件夹[${output}]`);
  fs.mkdirSync(output);
  console.log(`开始创建文件夹[${path.join(output, "static")}]`);
  fs.mkdirSync(path.join(output, "static"));
  console.log(`开始复制静态资源文件夹[${path.join(inputDir, "static")}]`);
  copyDir(path.join(inputDir, "static"), path.join(output, "static"));
  console.log(
    `开始复制静态页面资源文件夹[${path.join(inputDir, "server/pages")}]`
  );
  copyDir(path.join(inputDir, "server/pages"), path.join(output));
  console.log(
    `开始复制静态图片资源文件夹[${path.join(process.cwd(), "public")}]`
  );
  copyDir(path.join(process.cwd(), "public"), path.join(output));
  emptyFolder(inputDir);
  emptyFolder(path.join(process.cwd(), "public/assets"));
  console.log("删除临时的数据文件");
  fs.rmSync(path.join(process.cwd(), "data.json"));
  fs.rmSync(path.join(process.cwd(), "book.json"));
  fs.rmSync(path.join(process.cwd(), "router.json"));
  fs.rmSync(path.join(process.cwd(), "chapter.json"));
}

function changeContentJSON(filePath) {
  let content = fs.readFileSync(filePath).toString();
  let hrefReg = /<a[^href]*href=\\"([^\\"]*)\\"/g;
  content = content.replace(hrefReg, (match, $1) => {
    if ($1[0] === ".") {
      const chapterId = path.basename(filePath).slice(0, -5);
      const fullPath = findPath(chapterId);
      if (fullPath) {
        const fileFullPath = path.join(
          path.dirname(fullPath),
          decodeURIComponent($1)
        );
        return match.replace($1, `/chapter/${findKey(fileFullPath)}`);
      }
      return match;
    }
    return match;
  });
  fs.writeFileSync(filePath, content);
}

function changeContent(filePath) {
  let content = fs.readFileSync(filePath).toString();
  content = content.replace(/\/_next/g, "");
  content = content.replace(/\/image\?url=[^"]*/g, "/frontend.jpeg");
  content = content.replace(/\/_next\//g, "/");
  content = content.replace('.replace(/^\\\\/data\\//,"")', "");
  fs.writeFileSync(filePath, content);
}
exportFile(outputDir, path.join(process.cwd(), "build"));
