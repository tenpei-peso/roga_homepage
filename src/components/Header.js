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
  Button,
} from "@nextui-org/react";
import { headerListItems } from "@/constants";
import { Link as Scroll } from 'react-scroll'

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
        <Scroll to="home" smooth={ true } duration={ 600 }>
          <Image src="/home_icon1.png" alt="Logo" width={90} height={15} />
        </Scroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">狼牙警察犬学校</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {headerListItems.map((item) => (
          <NavbarItem key={item._id} isActive={pathName === item.link}>
            <Scroll to={item.link} smooth={ true } duration={ 600 } offset={ -100 } color="foreground">
              <div
                className={`${isActive === item.link && "text-primeColor"} text-gray-600 text-sm hover:text-primeColor duration-300 group relative cursor-pointer`}
              >
                {item.title}
                <span
                  className={`${isActive === item.link && "scale-100"} absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
                />
              </div>
            </Scroll>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {headerListItems.map((item) => (
          <NavbarMenuItem key={item._id} isActive={pathName === item.link}>
            <Scroll to={item.link} smooth={ true } duration={ 600 } offset={ -100 } color="foreground">
              <div
                className={`${isActive === item.link && "text-primeColor"} text-gray-600 text-sm hover:text-primeColor duration-300 cursor-pointer py-2`}
              >
                {item.title}
              </div>
            </Scroll>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
