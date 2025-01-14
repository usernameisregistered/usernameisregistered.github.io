import { readFileSync } from 'fs';
import { StudyItem } from './../types/study';
import { join } from 'path';
const rootDirectory = JSON.parse(readFileSync(join(process.cwd(), "./config.json")).toString()).docDirectory
export default function getStudyList(): StudyItem[]{
    return JSON.parse(readFileSync(join(rootDirectory, "study.json")).toString())
}
