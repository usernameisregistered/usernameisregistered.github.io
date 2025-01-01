import Header from "@/components/pages/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { rootGroups } from "@/data/getClassify";
import { DepBookItem, DepClassifyItem, DepGroupItem } from "@/types/depTree";
import Head from "next/head";
import Link from "next/link";
type Props = {
  classifyGroup: DepGroupItem[];
};

const Classify = ({ classifyGroup }: Props) => {
  return (
    <div className="w-screen">
      <Head>
        <title>得鹿梦鱼-书架</title>
      </Head>
      <Header activeItem="书架"></Header>
      <ScrollArea className="scroll-classify-height">
        {classifyGroup.map((classifyList: DepGroupItem) => {
          return (
            <div className="w-full  my-2" key={classifyList.id}>
              <div className="p-1  border-b text-md border-neutral-200 mx-4">
                {classifyList.name}
              </div>
              <div className="grid grid-cols-4 gap-4 m-4">
                {classifyList.classifys.map((classifyInfo: DepClassifyItem) => {
                  return (
                    <Card key={classifyInfo.id}>
                      <CardHeader>
                        <CardTitle className="border-b border-gray-400 pb-4">
                          {classifyInfo.name}
                        </CardTitle>
                        <CardDescription className="border-b max-h-16  pb-2">
                          <ScrollArea className="border-neutral-300 h-16">
                            {classifyInfo.description}
                          </ScrollArea>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {classifyInfo.books && classifyInfo.books.length ? (
                          <ScrollArea className="border-neutral-300 h-48">
                            {classifyInfo.books.map((book: DepBookItem) => {
                              return (
                                <Link
                                  className={`mb-2 cursor-pointer block text-neutral-600 hover:text-sky-600`}
                                  href={book.url}
                                  key={book.id}
                                >
                                  {book.name}
                                </Link>
                              );
                            })}
                          </ScrollArea>
                        ) : (
                          <div className="text-center text-neutral-500 my-8 h-10 leading-10">
                            暂无数据
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};
export const getStaticProps = () => {
  const classifyGroup: DepGroupItem[] = rootGroups;
  return { props: { title: "无事人", content: "", classifyGroup } };
};
export default Classify;
