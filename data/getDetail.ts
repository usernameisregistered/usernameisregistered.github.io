import { DepChapterItem } from "./../types/depTree";
import { DepBookItem, DepGroupItem } from "@/types/depTree";
import { rootGroups } from "./getClassify";

function getBookInfoById(id: string): DepBookItem | undefined {
  const bakRootGroup: DepGroupItem[] = JSON.parse(JSON.stringify(rootGroups));
  let result: DepBookItem | undefined = undefined;
  for (const groupItem of bakRootGroup) {
    if (result) {
      break;
    } else {
      for (const classify of groupItem.classifys) {
        if (result) {
          break;
        } else {
          for (const book of classify.books) {
            if (book.id === id) {
              result = book;
              break;
            }
          }
        }
      }
    }
  }
  return result;
}

export function GetChapterDetail(id: string): {
  bookInfo: DepBookItem;
  chapterInfo: DepChapterItem;
} {
  const bookId =  id.split("_")[0];
  const result: DepBookItem | undefined = getBookInfoById(
    bookId
  ) as DepBookItem;
  const chapterItem: DepChapterItem = result.chapterList.find(
    (chapter: DepChapterItem) => chapter.id === id
  ) as DepChapterItem;
  return {
    bookInfo: result,
    chapterInfo: chapterItem,
  };
}
