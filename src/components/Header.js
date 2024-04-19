"use client";

import Image from "next/image";
import Link from "next/link";
import { headerListItems } from "@/constants/index";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
   setActive(pathName);
  }
  , [pathName]);

  return (
    <div className="w-full h-20 border-b-[1px] bg-white px-10">
      <div className="h-full w-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/roga_logo4.svg"
            alt="Logo"
            width={100}
            height={20}
            className="my-0"
          />
        </Link>

        {/* Header list item */}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider">
          <ui className="flex">
            {headerListItems.map((item) => (
              <li
                key={item._id}
                className={`${active === item.link && 'text-primeColor'} inline mx-4 text-gray-600 hover:text-primeColor duration-300 group relative cursor-pointer`}
              >
                <Link href={item.link}>
                  {item.title}
                  <span className={`${active === item.link && 'scale-100'} absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}></span>
                </Link>
              </li>
            ))}
          </ui>
        </div>
      </div>
    </div>
  );
}
