import Header from "@/components/pages/header";
import Head from "next/head";
export default function About() {
  return (
    <div className="w-screen">
      <Head>
        <title>得鹿梦鱼-关于本人</title>
      </Head>
      <Header activeItem="关于本人"></Header>
      <div className="container mx-auto mt-8">
        <div className="text-xl text-sky-900">关于本人</div>
        <div className="mx-2 my-8 text-sky-700 text-xl">
          一名从2017年开始从事于web行业的开发人员
        </div>
        <div className="mx-2 mt-6 text-sky-600 text-md">
          在2019年之前是php和前端的全站开发工程师
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          在2019年之后绝大多数的工作内容和前端开发息息相关
        </div>
        <div className="text-xl text-sky-900 mb-4 mt-8">联系本人</div>
        <div className="mx-2">
          可发送邮件至
          <a
            className="text-blue-400 mx-1 underline underline-offset-4 cursor-pointer"
            href="mailto:liming_longxi@163.com"
          >
            liming_longxi@163.com
          </a>
          或者在
          <a
            href="https://github.com/usernameisregistered/liming_longxi.github.io"
            className="text-blue-400 underline underline-offset-4 mx-1 cursor-pointer"
          >
            github
          </a>
          <a
            href="https://gitee.com/usernameisregistered/liming_longxi.gitlab.io"
            className="text-blue-400 underline underline-offset-4 mr-1 cursor-pointer"
          >
            gitee
          </a>
          提问
        </div>
        <div className="text-xl text-sky-900 mb-4 mt-8">关于本站</div>
        <div className="mx-2 my-8 text-sky-700 text-xl">
          本站点共经历了3次大的版本迭代
        </div>
        <div className="mx-2 mt-6 text-sky-600 text-md">
          1. 使用模版页面加marked生成对应的静态站点页面
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          2. 使用vitepress技术栈生成所需的静态站点页面
        </div>
        <div className="mx-2 my-6 text-sky-600 text-md">
          3. 使用nextjs技术栈生成所需的静态站点页面
        </div>

        <div className="text-red-600 p-4 border border-red-200 rounded-md">
          声明：本站点中的内容有部分来自于网络，如有侵权，请联系本人清除，本站点的资源仅学习交流使用，如果你不认可，烦请离开
        </div>
      </div>
    </div>
  );
}
