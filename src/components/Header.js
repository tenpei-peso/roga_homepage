// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { headerListItems } from "@/constants/index";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [active, setActive] = useState(false);
//   const pathName = usePathname();

//   useEffect(() => {
//     setActive(pathName);
//   }, [pathName]);

//   return (
//     <div className="w-full h-20 border-b-[1px] bg-white px-10">
//       <div className="h-full w-full flex items-center justify-between">
//         {/* Logo */}
//         <Link href={"/"}>
//           <Image
//             src="/roga_logo4.svg"
//             alt="Logo"
//             width={100}
//             height={20}
//             className="my-0"
//           />
//         </Link>

//         {/* Header list item */}
//         <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider">
//           <ui className="flex">
//             {headerListItems.map((item) => (
//               <li
//                 key={item._id}
//                 className={`${active === item.link && "text-primeColor"} inline mx-4 text-gray-600 hover:text-primeColor duration-300 group relative cursor-pointer`}
//               >
//                 <Link href={item.link}>
//                   {item.title}
//                   <span
//                     className={`${active === item.link && "scale-100"} absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
//                   ></span>
//                 </Link>
//               </li>
//             ))}
//           </ui>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { headerListItems } from "@/constants";

export default function App() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathName);
  }, [pathName]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered="true">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href={"/"}>
          <Image src="/roga_logo4.svg" alt="Logo" width={90} height={15} />
        </Link>
        <NavbarBrand>
          <p className="font-bold text-inherit">狼牙警察犬学校</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {headerListItems.map((item) => (
          <NavbarItem key={item._id} isActive={pathName === item.link}>
            <Link href={item.link} color="foreground">
              <div
                className={`${isActive === item.link && "text-primeColor"} text-gray-600 text-sm hover:text-primeColor duration-300 group relative cursor-pointer`}
              >
                {item.title}
                <span
                  className={`${isActive === item.link && "scale-100"} absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
                />
              </div>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {headerListItems.map((item) => (
          <NavbarMenuItem key={item._id} isActive={pathName === item.link}>
            <Link href={item.link} color="foreground">
              <div
                className={`${isActive === item.link && "text-primeColor"} text-gray-600 text-sm hover:text-primeColor duration-300 cursor-pointer py-2`}
              >
                {item.title}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
