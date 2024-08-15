import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigationMenu/NavigationMenu";
import ListItem from "@/components/navigationMenu/ListItem";
import { Button } from "@/components/button/Button";
import { MainMenu } from "@/config/menu";

const Header = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-fit flex-col items-center justify-center bg-bgColor/40 px-[4vw] backdrop-blur-lg">
      <div className="mx-auto flex w-full items-stretch justify-between py-5">
        <Link
          href="/"
          aria-current="page"
          className="mr-5 flex w-[140px] items-center justify-center p-0"
          aria-label="home"
        >
          <Image
            src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b01600a_deskree-logo-white.svg"
            loading="lazy"
            alt="logo icon"
            width={130}
            height={24}
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {MainMenu.map((item: IMainMenuItem) => (
              <div key={`main-menu-${item.id}`}>
                {item.subTitle ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="top-0 border border-borderColor bg-modalBgColor">
                      <ul className="flex flex-col gap-3 px-10 py-6 md:w-[400px] lg:left-[12vw] lg:w-[75vw]">
                        <NavigationMenuLink asChild>
                          <div className="border-b border-borderColor pb-3 text-sm font-medium text-secondary">
                            {item.subTitle}
                          </div>
                        </NavigationMenuLink>
                        {item.subMenuList &&
                          item?.subMenuList.map((subItem: IMainSubMenuItem) => (
                            <ListItem
                              href={subItem.href}
                              title={subItem.title}
                              key={`${item?.subTitle}u-${subItem.id}`}
                            >
                              <label className="text-secondary">
                                {subItem.content}
                              </label>
                            </ListItem>
                          ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <Link href={item.href || ""} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-3">
          <Button className="px-[2rem] py-[0.5rem]" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="px-[2rem] py-[0.5rem]" asChild variant="outline">
            <Link href="/signup">SignUp</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
