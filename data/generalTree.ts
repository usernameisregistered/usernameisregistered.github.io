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
const rootDirectory: string = "F:/passerby";

export function generalDepTree() {
  const rootGroups: DepGroupItem[] = [];
  const bookIdLists: string[] = [];
  const chapterLists: { bookId: string; chapterId: string }[] = [];
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
          const chapterIdItem: { bookId: string; chapterId: string } = {
            bookId: id,
            chapterId: "",
          };
          const bookInfo: DepBookItem = {
            id: id,
            name: bookName,
            fullPath: bookPath,
            chapterList: [],
            type: "book",
            url: `/book/${id}`,
            content: "",
          };
          bookIdLists.push(id);
          fs.readdirSync(bookPath).forEach((chapterName: string) => {
            const chapterPath = path.join(bookPath, chapterName);
            if (fs.statSync(chapterPath).isFile()) {
              const chapterId = uuid(chapterPath);
              const chapterInfo: DepChapterItem = {
                id: chapterId,
                type: "chapter",
                name: path.basename(chapterName),
                fullPath: chapterPath,
                url: `/book/${id}/${chapterId}`,
              };
              chapterIdItem.chapterId = chapterId;
              chapterLists.push(chapterIdItem);
              bookInfo.chapterList.push(chapterInfo);
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
