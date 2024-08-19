"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { headerListItems, services } from "@/constants";
import Link from "next/link";

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
        <Link href="/">
          <Image src="/home_icon1.png" alt="Logo" width={90} height={15} />
        </Link>
        <NavbarBrand>
          <p className="font-bold text-inherit">浪賀警察犬学校</p>
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
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<span className="ml-2">▼</span>}
                radius="sm"
                variant="light"
              >
                サービス紹介
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {services.map((service) => (
              <DropdownItem key={service._id}>
                <Link href={service.link} color="foreground">
                  {service.title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
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

        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<span className="ml-2">▼</span>}
                radius="sm"
                variant="light"
              >
                サービス紹介
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu>
            {services.map((service) => (
              <DropdownItem key={service._id}>
                <Link href={service.link} color="foreground">
                  {service.title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
}
