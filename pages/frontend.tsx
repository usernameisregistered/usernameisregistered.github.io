import Header from "@/components/pages/header";
import Head from "next/head";
import Image from "next/image";

export default function Study() {
  return (
    <div className="w-screen">
      <Head>
        <title>得鹿梦鱼-前端技能树</title>
      </Head>
      <Header activeItem="前端技能树"></Header>
      <div className="w-full scroll-classify-height">
        <Image
          src="/frontend.jpeg"
          className="w-auto mx-auto cursor-pointer h-full object-fill"
          alt="前端技能树"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
