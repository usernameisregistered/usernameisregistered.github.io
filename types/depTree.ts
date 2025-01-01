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
    content: string,
    title: string,
    chapterList: DepChapterItem[]
}

export type DepChapterItem = {
    id: string,
    name: string,
    type: string,
    fullPath: string,
    url: string,
}

export type DepGroupItem = {
    name: string,
    id: string,
    type: string,
    classifys: DepClassifyItem[];
}

export type DepFile = {
    rootGroups: DepGroupItem[],
    bookIdLists: string[],
    chapterLists: { bookId: string; chapterId: string }[]
}
