import { ClassifyItem, ClassifyList } from "@/types/common";
import md5 from "md5";
import {
  DepBookItem,
  DepChapterItem,
  DepClassifyItem,
  DepGroupItem,
} from "@/types/depTree";
import fs from "fs";
import path from "path";
export const rootDirectory: string = "D:/personal/文档/passerby";

export function generalDepTree() {
  if (fs.existsSync(path.join(process.cwd(), "public/assets"))) {
    fs.rmSync(path.join(process.cwd(), "public/assets"), {recursive: true})
  }  else {
    fs.mkdirSync(path.join(process.cwd(), "public/assets"));
  }
  const rootGroups: DepGroupItem[] = [];
  const bookIdLists: string[] = [];
  const chapterLists: string[] = [];
  const filePath: string = path.join(rootDirectory, "category.json");
  const data: ClassifyList[] = JSON.parse(fs.readFileSync(filePath).toString());
  data.forEach((classifyList: ClassifyList) => {
    const groupItem: DepGroupItem = {
      id: classifyList.id,
      name: classifyList.name,
      type: "group",
      classifys: [],
    };
    classifyList.children.forEach((classifyItem: ClassifyItem) => {
      const classifyDir = path.join(rootDirectory, classifyItem.id);
      const depClassifyItem: DepClassifyItem = {
        id: classifyItem.id,
        name: classifyItem.name,
        description: classifyItem.description,
        type: "classify",
        fullPath: classifyDir,
        books: [],
      };
      if (fs.existsSync(classifyDir)) {
        fs.readdirSync(classifyDir).forEach((bookName: string) => {
          const bookPath = path.join(classifyDir, bookName);
          const id: string = uuid(bookPath);
          const bookInfo: DepBookItem = {
            id: id,
            name: bookName,
            fullPath: bookPath,
            chapterList: [],
            title: "",
            type: "book",
            url: `/book/${id}`,
            content: "",
          };
          bookIdLists.push(id);
          fs.readdirSync(bookPath).forEach((chapterName: string) => {
            const chapterPath = path.join(bookPath, chapterName);
            if (fs.statSync(chapterPath).isFile()) {
              if(path.extname(chapterPath) === ".md"){
                const chapterId = uuid(chapterPath);
                const chapterInfo: DepChapterItem = {
                  id: `${id}_${chapterId}`,
                  type: "chapter",
                  name: path.basename(chapterName),
                  fullPath: chapterPath,
                  url: `/chapter/${id}_${chapterId}`,
                };
                chapterLists.push(`${id}_${chapterId}`);
                bookInfo.chapterList.push(chapterInfo);
              } else {
                fs.rmSync(chapterPath)
              }
            }
          });
          depClassifyItem.books.push(bookInfo);
        });
        groupItem.classifys.push(depClassifyItem);
      }
    });
    rootGroups.push(groupItem);
  });
  fs.writeFileSync(
    path.join(process.cwd(), "data.json"),
    JSON.stringify(
      {
        rootGroups: rootGroups,
        bookIdLists: bookIdLists,
        chapterLists: chapterLists,
      },
      null,
      4
    )
  );
}

function uuid(name: string) {
  return md5(name);
}
