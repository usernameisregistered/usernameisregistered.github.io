export type DepClassifyItem  = {
    id: string,
    name: string,
    type: string,
    fullPath: string,
    description: string,
    books: DepBookItem[]
}

export type DepBookItem = {
    id: string,
    name: string,
    type: string,
    fullPath: string,
    url: string,
    chapterList: DepChapterItem[]
}

export type DepChapterItem = {
    id: string,
    name: string,
    type: string,
    fullPath: string,
    url: string,
    content: string,
}

export type DepGroupItem = {
    name: string,
    id: string,
    type: string,
    classifys: DepClassifyItem[];
}
