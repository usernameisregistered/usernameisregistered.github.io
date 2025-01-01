import { readFileSync } from 'fs';

import { DepFile, DepGroupItem } from "@/types/depTree";
import path from "path";
const data: DepFile =JSON.parse(readFileSync(path.join(process.cwd(), "data.json")).toString());
export const rootGroups: DepGroupItem[] = data.rootGroups;
export const bookIdLists: string[] = data.bookIdLists;
export const chapterLists: string[] = data.chapterLists;