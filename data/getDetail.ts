import { DepChapterItem } from "./../types/depTree";
import { DepBookItem, DepGroupItem } from "@/types/depTree";
import ParseMarked from "./parseMarked";
import { rootGroups } from "./getClassify";

export default function GetBookDetail(bookId: string): DepBookItem | undefined {
  return getBookInfoById(bookId);
}

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

export function GetChapterDetail(
  bookId: string,
  chapterId: string
): DepBookItem {
  const result: DepBookItem | undefined = getBookInfoById(
    bookId
  ) as DepBookItem;
  const chapterItem: DepChapterItem = result.chapterList.find(
    (chapter: DepChapterItem) => chapter.id === chapterId
  ) as DepChapterItem;
  result.content = ParseMarked(chapterItem.fullPath)
  return result;
}


