import Header from "@/components/pages/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudyItem } from "@/types/study";
export default function Study() {
  const studyList: StudyItem[] = [];
  return (
    <div className="w-screen">
      <Header activeItem="学习资料"></Header>
      <Table className="container m-auto pt-20">
          <TableCaption className="caption-top border-b border-gray-200 pb-4 text-lg text-black">平时收集的学习资料</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">名称</TableHead>
              <TableHead>描述</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studyList.map((study: StudyItem) => (
              <TableRow key={study.name}>
                <TableCell><a href={study.url} target="_blank">{study.name}</a></TableCell>
                <TableCell>{study.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  );
}
