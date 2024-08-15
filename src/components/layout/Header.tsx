import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigationMenu/NavigationMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion/Accordion";
import ListItem from "@/components/navigationMenu/ListItem";
import { Button } from "@/components/button/Button";
import { MainMenu } from "@/config/menu";
import useScreenSize from "@/hooks/useScreenSize";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const isMobile = useScreenSize();

  useEffect(() => {
    if (!isMobile) setToggle(isMobile);
  }, [isMobile]);

  return (
    <>
      {/* Desktop View */}
      <div className="fixed inset-0 z-50 flex h-fit flex-col items-center justify-center bg-bgColor/80 px-[4vw] backdrop-blur-lg">
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

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {MainMenu.map((item: IMainMenuItem) => (
                <div key={`main-menu-${item.id}`}>
                  {item.subTitle ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="top-0 border border-borderColor bg-modalBgColor">
                        <ul className="flex flex-col gap-3 px-10 py-6 lg:w-[75vw]">
                          <NavigationMenuLink asChild>
                            <div className="border-b border-borderColor pb-3 text-sm font-medium text-secondary">
                              {item.subTitle}
                            </div>
                          </NavigationMenuLink>
                          {item.subMenuList &&
                            item?.subMenuList.map(
                              (subItem: IMainSubMenuItem) => (
                                <ListItem
                                  href={subItem.href}
                                  title={subItem.title}
                                  key={`${item?.subTitle}u-${subItem.id}`}
                                >
                                  <label className="text-secondary">
                                    {subItem.content}
                                  </label>
                                </ListItem>
                              ),
                            )}
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

          <div className="hidden gap-3 lg:flex">
            <Button className="px-[2rem] py-[0.5rem]" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="px-[2rem] py-[0.5rem]" asChild variant="outline">
              <Link href="/signup">SignUp</Link>
            </Button>
          </div>

          <Button
            className="flex h-12 w-12 items-center justify-center p-0 lg:hidden"
            variant="link"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Image
              src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015fcb_menu.svg"
              loading="lazy"
              alt="hamburger"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      {toggle && (
        <div className="flex-cols fixed left-0 top-[88px] z-50 flex h-[calc(100vh-88px)] w-full flex-col gap-8 bg-bgColor/80 px-[8vw] py-8 backdrop-blur-lg">
          <div className="grid w-full grid-cols-2 gap-3">
            <Button className="px-[2rem] py-[0.5rem]" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="px-[2rem] py-[0.5rem]" asChild variant="outline">
              <Link href="/signup">SignUp</Link>
            </Button>
          </div>

          <div className="border-separateColor border" />

          <Accordion type="single" collapsible className="w-full">
            {MainMenu.map((item: IMainMenuItem) => (
              <div key={`main-menu-mobile-${item.id}`}>
                {item.subTitle ? (
                  <AccordionItem value={`main-menu-mobile-${item.id}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-2">
                        {item?.subMenuList &&
                          item?.subMenuList.map((item) => (
                            <li
                              key={item.id}
                              className="rounded-lg border border-gray-400 p-2 transition-shadow hover:shadow-md"
                            >
                              <Link href={item.href} className="block">
                                <h3 className="mb-1 font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-gray-400">{item.content}</p>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <AccordionItem value={`main-menu-mobile-${item.id}`}>
                    <Link href={item.href || ""}>
                      <div className="flex flex-1 items-center justify-between py-4 font-medium">
                        {item.title}
                      </div>
                    </Link>
                  </AccordionItem>
                )}
              </div>
            ))}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default Header;
