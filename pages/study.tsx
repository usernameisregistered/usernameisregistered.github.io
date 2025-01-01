import Header from "@/components/pages/header";
import getStudyList from "@/data/getStudy";
import { StudyItem } from "@/types/study";
import { ScrollArea } from "@/components/ui/scroll-area";
import Head from 'next/head';
type Props = {
  studyList: StudyItem[];
};
export default function Study({ studyList }: Props) {
  return (
    <div className="w-screen">
       <Head>
        <title>无事人-学习资料</title>
       </Head>
      <Header activeItem="学习资料"></Header>
      <ScrollArea className="scroll-classify-height">
        <div className="w-5/6 m-auto pt-20 ">
          <div className="border-b border-gray-200 pb-4 text-lg text-black text-center">平时收集的学习资料</div>
          <div className="flex py-4 leading-4 border-b border-neutral-200">
            <div className="basis-[300px]">名称</div>
            <div className="flex-1">描述</div>
          </div>
          {
            studyList.map((study: StudyItem) => (
                <div key={study.name} className="flex py-4 leading-4 border-b border-neutral-200">
                <div className="basis-[300px] hover:text-blue-300"><a href={study.url} target="_blank">{study.name}</a></div>
                <div className="flex-1">{study.description}</div>
              </div>
              ))
          }
        </div>
      </ScrollArea>
    </div>
  );
}
export const getStaticProps = () => {
  const studyList: StudyItem[] = getStudyList();
  return { props: { title: "无事人", content: "", studyList } };
};
