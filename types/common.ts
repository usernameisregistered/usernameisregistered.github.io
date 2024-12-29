export type BookItem = {
    id: string,
    name: string,
    url: string,
    fullpath: string,
}

export type ClassifyList = {
    id:string,
    name: string,
    children: ClassifyItem[]
}

export type ClassifyItem = {
    id:string,
    name: string,
    description: string,
    list?: BookItem[]
}



export type CommonHeaderProps = {
    activeItem: string
}

export type MenuItem = {
    name: string, 
    url: string
}

export type BookInfo = {
    name: string,
    chapterList: ChapterItem[],
    content: string,
}

export type ChapterItem = {
    name: string,
    id: string,
    bookId: string,
    fullPath: string,
    url: string,
}