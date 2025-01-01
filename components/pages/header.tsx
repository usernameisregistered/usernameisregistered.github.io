import { CommonHeaderProps, MenuItem } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
export default function Header({ activeItem }: CommonHeaderProps) {
  const menuList: MenuItem[] = [{name: "书架", url: "/classify" }, {name: "学习资料", url: "/study"},  {name: "关于本人", url:  "/about"}];
  return (
    <header className="flex flex-grow-0 justify-between p-4 border-b border-neutral-200">
      <Link
        href="/"
        className="flex items-center text-2xl text-neutral-700 cursor-pointer"
      >
        <Image src="/logo.svg" width={40} height={40} alt="无事人"></Image>
        <span className="text-4 ml-4">无事人</span>
      </Link>
      <div className="right flex items-center cursor-pointer">
        {menuList.map((item: MenuItem) => {
          return (
            <Link
              key={item.name}
              className={`mr-2 ${
                activeItem === item.name ? "text-sky-500" : ""
              } text-md `}
              href={item.url}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
