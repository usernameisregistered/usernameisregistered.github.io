import Header from "@/components/pages/header";
import Head from "next/head";
export default function Question() {
  return (
    <div className="w-screen">
      <Head>
        <title>得鹿梦鱼-面试题</title>
      </Head>
      <Header activeItem="面试题"></Header>
      <div className="container mx-auto mt-8">
        <div className="text-xl text-sky-900">关于面试题</div>
        <div className="mx-2 my-8 text-sky-700 text-xl">
          一位大佬曾经说过：<span className="font-semibold">一份工作离开的原因无非是两种原因</span>
        </div>
        <div className="mx-2 mt-6 text-red-600 text-md">
          1. 干的不开心
        </div>
        <div className="mx-2 my-6 text-red-600 text-md">
          2. 钱不够
        </div>
        <div className="text-xl text-sky-700 mb-4 mt-8">
            因此我们不可避免的会有岗位变动的硬性条件，所以我们需要更好的前途和钱途，需要时刻充实自己以及背八股文<span className="line-through">面试造火箭进厂拧螺丝</span>
           
        </div>
        <div className="text-xl text-sky-900 mb-4 mt-8">获取途径</div>
        <div className="mx-2 mt-6 text-sky-600 text-md">
          1. 面试题存放在飞书文档中，可以加入团队一同更新面试题的记录，为更多的人服务
        </div>
        <div className="mx-2 mt-6 text-sky-600 text-md">
          2. 联系站主索要离线的pdf版本，后续会写一个自动化脚本，自动导出pdf，发送最新而不是历史版本的
        </div>
        <div className="text-xl text-sky-900 mb-4 mt-8">前端面试题已有的内容</div>
        <div className="mx-2 mt-6 text-sky-600 text-md">
          1. 前端基础知识
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          2. 框架相关的vue、react
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          3. 性能优化专题
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          4. 编程、工程化、可视化等
        </div>
        <div className="text-red-600 p-4 border border-red-200 rounded-md">
          声明：面试题内容有部分来自于网络，如有侵权，请联系本人清除，资源仅学习交流使用，如果你不认可，烦请离开
        </div>
      </div>
    </div>
  );
}
