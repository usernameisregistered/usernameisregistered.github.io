/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

function emptyFolder(folderPath) {
    fs.rmdirSync(folderPath, {recursive: true})
}

function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  fs.readdirSync(dest, { recursive: false });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        console.log(`开始创建文件夹[${destPath}]`);
        fs.mkdirSync(destPath);
      }
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      if ([".css", ".html"].includes(path.extname(destPath))) {
        console.log(`需要修改文件[${destPath}]的内容`);
        changeContent(destPath);
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
}

function changeContent(filePath) {
  let content = fs.readFileSync(filePath).toString();
  content = content.replace(/\/_next\/static/g, "/static");
  fs.writeFileSync(filePath, content);
}

exportFile(
  path.join(process.cwd(), "output"),
  path.join(process.cwd(), "build")
);
