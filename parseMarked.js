const { Notebook } = require("crossnote");
const path = require("path");
const fs = require("fs");
let uid = 100000000;
module.exports = async function ParseMarked(filePath) {
  const notebook = await Notebook.init({
    config: {
      previewTheme: "atom-light.css",
      mathRenderingOption: "KaTeX",
      codeBlockTheme: "atom-light.css",
      printBackground: true,
      enableScriptExecution: true,
    },
  });
  const engine = notebook.getNoteMarkdownEngine(filePath);
  await engine.htmlExport({ offline: false, runAllCodeChunks: true });
  const html = fs.readFileSync(filePath.replace("md", "html")).toString();
  const imageReg = /<img[^src]*src="([^"]*)"/g;
  const replaceImages = {};
  let result;
  while ((result = imageReg.exec(html)) !== null) {
    const fileFullPath = path.join(
      path.dirname(filePath),
      decodeURIComponent(result[1])
    );
    const fileName = uid++;
    const outputFile = path.join(process.cwd(), "public/assets", fileName + path.extname(result[1]));
    fs.copyFileSync(fileFullPath, outputFile);
    replaceImages[result[1]] = `/assets/${fileName + path.extname(result[1])}`;
  }
  const contentReg = /<body [^>]*>([\s\S]*)<\/body>/gm;
  let content;
  result = contentReg.exec(html);
  if (result) {
    content = result[1];
    for (const relativePath in replaceImages) {
      content = content.replace(relativePath, replaceImages[relativePath]);
    }
  }
  fs.rmSync(filePath.replace("md", "html"));
  return content;
};
