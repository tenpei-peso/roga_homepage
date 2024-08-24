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
  Card,
  Spacer,
} from "@nextui-org/react";
import { headerListItems, headerListItems2, services } from "@/constants";
import Link from "next/link";

export default function App() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathName);
  }, [pathName]);

  // リンククリック時にメニューを閉じるための関数
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBordered="true"
      isMenuOpen={isMenuOpen}
      isBlurred={false}
    >
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
        {headerListItems2.map((item) => (
          <NavbarMenuItem key={item._id} isActive={handleLinkClick}>
            <Link href={item.link} color="foreground" onClick={handleLinkClick}>
              <div
                className={`${isActive === item.link && "text-primeColor"} text-gray-600 text-sm hover:text-primeColor duration-300 cursor-pointer py-2`}
              >
                {item.title}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Spacer y={4} />
          <h1>料金表</h1>
          <Spacer y={4} />
          <Card className="w-full max-w-sm h-auto col-span-12 sm:col-span-7">
            <Image
              width={400}
              height={300}
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/price_list1.png"
            />
          </Card>
          <Spacer y={4} />
          <Card className="w-full max-w-sm h-auto col-span-12 sm:col-span-7">
            <Image
              width={400}
              height={300}
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/price_list2.png"
            />
          </Card>
          <Spacer y={4} />
          <Card className="w-full max-w-sm h-auto col-span-12 sm:col-span-7">
            <Image
              width={400}
              height={300}
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/price_list3.png"
            />
          </Card>
          <Spacer y={4} />
          <Card className="w-full max-w-sm h-auto col-span-12 sm:col-span-7">
            <Image
              width={400}
              height={300}
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/price_list4.png"
            />
          </Card>
          <Spacer y={12} />
          {/* テキスト */}
          <h1 className="text-lg font-bold">競技会、展覧会、警察犬訓練</h1>
          <Spacer y={6} />
          <h1 className="text-base font-bold">
            ご料金についてはお電話でご相談下さい。
          </h1>
          <Spacer y={1} />
          <h1 className="text-base font-bold text-red-600">
            ＊大会参加費や出場料や、試験費用は別途発生いたします。
          </h1>
          <Spacer y={12} />
          <h1 className="text-lg font-bold">おやつ、グッズ販売(スクール生向けサービス)</h1>
          <Spacer y={6} />
          <h1 className="text-base font-bold">
          当店では季節に合わせたおやつを提供しております。そのため、使用する材料や季節の変動により、価格が変わることがございます。最新の価格やご相談については、ぜひお気軽お電話でお尋ねください。
          </h1>
          <Spacer y={6} />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
