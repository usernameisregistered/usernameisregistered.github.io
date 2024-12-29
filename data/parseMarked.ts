import fs from "fs";
import texme from "texme"
export default function ParseMarked(filePath: string): string {
    const content = fs.readFileSync(filePath).toString();
    const  result = texme.render(content);
    return result;
}