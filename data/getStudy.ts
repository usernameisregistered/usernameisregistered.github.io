import { readFileSync } from 'fs';
import { StudyItem } from './../types/study';
import { join } from 'path';
import { rootDirectory } from './generalTree';
export default function getStudyList(): StudyItem[]{
    return JSON.parse(readFileSync(join(rootDirectory, "study.json")).toString())

}