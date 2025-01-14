import { readFileSync } from 'fs';
import { DepGroupItem } from "@/types/depTree";
import path from "path";
const data: DepGroupItem[] =JSON.parse(readFileSync(path.join(process.cwd(), "data.json")).toString());
export const rootGroups: DepGroupItem[] = data;
export const bookIdLists: string[] = JSON.parse(readFileSync(path.join(process.cwd(), "book.json")).toString());
export const chapterLists: string[] =JSON.parse(readFileSync(path.join(process.cwd(), "chapter.json")).toString());

