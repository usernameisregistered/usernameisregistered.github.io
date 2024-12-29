import Header from "@/components/pages/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { bookIdLists } from "@/data/getClassify";
import GetBookDetail from "@/data/getDetail";
import { DepBookItem, DepChapterItem } from "@/types/depTree";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  bookInfo: DepBookItem;
};
const Classify = ({ bookInfo }: Props) => {
  const router = useRouter();
  setTimeout(()=>{
    router.replace(bookInfo.chapterList[0].url);
  }, 1000)
  return (
    <div className="w-screen flex flex-col h-screen">
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
                  className="text-md text-gray-600 block mx-4 mb-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-sky-300"
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
              请手动跳转到章节页面
            </ScrollArea>
          </div>
          <div className="flex justify-between">
            <div className="border w-60 h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300">
              {/* 上一节 */}
            </div>
            <div className="border w-60 h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300">
              {/* 下一节 */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
type Params = {
  params: {
    bookId: string;
  };
};
export const getStaticProps = ({ params }: Params) => {
  return {
    props: {
      bookInfo: GetBookDetail(params.bookId),
    },
  };
};
export async function getStaticPaths() {
  return {
    paths: bookIdLists.map((id: string)=>{return {params: { bookId: id }}}),
    fallback: false,
  };
}
export default Classify;
