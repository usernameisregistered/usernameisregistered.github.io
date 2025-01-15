import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>得鹿梦鱼-一个研发小伙伴的日常记录</title>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="无事人"
          width={80}
          height={80}
          priority
        />
        <div className="text-3xl text-blue-300">得鹿梦鱼<span className="relative top-2 left-3 text-base text-blue-200">一个研发小伙伴的日常记录</span></div>

        <div className="text-2xl">毕竟几人真得鹿，不知终日梦为鱼</div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-md h-12 px-4 w-40"
            href="/classify"
          >
            <Image
              className="dark:invert  mr-2"
              src="/begin.svg"
              alt="开始"
              width={20}
              height={20}
            />
            开始
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-md h-12 px-4 w-40"
            href="mailto:liming_longxi@163.com"
            title="liming_longxi@163.com"
          >
            <Image
              className="dark:invert mr-4"
              src="/connect.svg"
              alt="开始"
              width={20}
              height={20}
            />
            联系
          </a>
        </div>
      </main>
    </div>
  );
}
