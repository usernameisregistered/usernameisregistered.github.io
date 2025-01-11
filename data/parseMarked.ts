const { Notebook } = require("crossnote");
import md5 from "md5";
import fs from "fs";
import path from "path";
import { rootDirectory } from "./generalTree";
export default async function ParseMarked(
  filePath: string
): Promise<{ title: string; content: string }> {
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
    const fileFullPath = path.join(path.dirname(filePath), decodeURIComponent(result[1]));
    const fileName = md5(fileFullPath.slice(rootDirectory.length));
    const outputFile = path.join(process.cwd(), "public/assets", fileName);
    fs.copyFileSync(fileFullPath, outputFile);
    replaceImages[result[1]] = `/assets/${fileName}`;
  }
  const titleReg = /<title>([\s\S]*)<\/title>/gm;
  const contentReg = /<body [^>]*>([\s\S]*)<\/body>/gm;
  let title, content;
  result = titleReg.exec(html);
  if (result) {
    title = result[1];
  }
  result = contentReg.exec(html);
  if (result) {
    content = result[1];
    for (const relativePath in replaceImages) {
      content = content.replace(relativePath, replaceImages[relativePath]);
    }
  }
  fs.rmSync(filePath.replace("md", "html"));
  return {
    title: title,
    content: `${content}`,
  };
}
