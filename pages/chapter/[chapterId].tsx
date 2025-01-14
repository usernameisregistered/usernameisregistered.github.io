import Header from "@/components/pages/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chapterLists } from "@/data/getClassify";
import GetBookDetail, { GetChapterDetail } from "@/data/getDetail";
import { DepBookItem, DepChapterItem } from "@/types/depTree";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
type Props = {
  bookInfo: DepBookItem;
  chapterInfo: DepChapterItem
};
const Classify = ({ bookInfo, chapterInfo }: Props) => {
  const router = useRouter();
  const query = router.query;
  const index = bookInfo.chapterList.findIndex(el => el.id === query.chapterId);
  return (
    <div className="w-screen flex flex-col h-screen">
         <Head>
        <title>得鹿梦鱼-{chapterInfo.name}-{bookInfo.name}</title>
      </Head>
      <Header activeItem=""></Header>
      <div className="w-screen flex flex-1">
        <aside className="basis-2/12 border-r border-gray-300 h-full overflow-hidden">
          <div className="text-md font-bold text-gray-700 m-4">
            {bookInfo.name}
          </div>
          <ScrollArea className="scroll--chapter-height">
            {bookInfo.chapterList.map((chapter: DepChapterItem) => {
              return (
                <Link
                  key={chapter.id}
                  className={`text-md ${query.chapterId !== chapter.id ?"text-gray-600": "text-sky-300"} block mx-4 mb-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-sky-300`}
                  href={chapter.url}
                >
                  {chapter.name}
                </Link>
              );
            })}
          </ScrollArea>
        </aside>
        <section className="basis-10/12 flex flex-col p-1">
          <div className="flex-1">
            <ScrollArea className="scroll-content-height">
              <div id="markdown-container" dangerouslySetInnerHTML={{ __html: chapterInfo.content }}></div>
            </ScrollArea>
          </div>
          <div className="flex justify-between">
              <div className={`${index ? "visible":"invisible"} border min-w-60 h-10 px-4 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300`} onClick={()=>{router.push(bookInfo.chapterList[index - 1].url)}}>
              { index ? bookInfo.chapterList[index  - 1 ].name : ""}
              </div>
              <div className={`${index < bookInfo.chapterList.length - 1  ? "visible":"invisible"} border min-w-60 px-4  h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300`} onClick={()=>{router.push(bookInfo.chapterList[index + 1].url)}}>
                {index < bookInfo.chapterList.length - 1  ? bookInfo.chapterList[index + 1].name  : ""}
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};
type Params = {
  params: {
    chapterId: string;
  };
};
export const  getStaticProps = ({ params }: Params) => {
  return {
    props: {
      ...GetChapterDetail(params.chapterId),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: chapterLists.map((id: string)=>{return {params: { chapterId: id }}}),
    fallback: 'blocking'
  };
}
export default Classify;
