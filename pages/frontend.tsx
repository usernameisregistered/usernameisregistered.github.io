import Header from "@/components/pages/header";
import previewImage from "preview-image-js";
import Head from "next/head";
export default function Study() {
  const priviewImage = () => {
    previewImage({
      images: ["/frontend.jpeg"],
      toolbar: true,
      delete: false,
      download: false
    })
  };
  return (
    <div className="w-screen">
      <Head>
        <title>得鹿梦鱼-前端技能树</title>
      </Head>
      <Header activeItem="前端技能树"></Header>
      <div className="w-full scroll-classify-height">
        <img
          src="/frontend.jpeg"
          className="h-full object-scale-down mx-auto cursor-pointer"
          alt="前端技能树"
          onClick={priviewImage}
        />
      </div>
    </div>
  );
}
