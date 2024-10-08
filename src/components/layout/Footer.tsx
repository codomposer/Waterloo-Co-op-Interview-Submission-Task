import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerMenu } from "@/config/menu";

const Footer = () => {
  return (
    <div className="border-t border-borderColor">
      <div className="mx-auto flex flex-col gap-12 px-3 py-20 md:w-[650px] md:px-0 lg:w-[900px] xl:w-[1100px]">
        <div className="hidden grid-cols-7 gap-4 xl:grid">
          <div className="col-span-3 flex flex-col gap-5">
            <Image
              loading="lazy"
              src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015ff1_deskree-solo-logo.png"
              alt="logo"
              width={28}
              height={23}
            />
            <div className="text-secondary">
              Deskree is a cloud platform that simplifies and optimizes backend
              development and infrastructure management for businesses and
              developers.
            </div>
          </div>

          {footerMenu.map((item: IFooterMenu) => (
            <div
              className="flex flex-col gap-2 text-secondary"
              key={`footer-menu-${item.id}`}
            >
              <div className="mb-2 text-lg font-medium">{item.title}</div>
              {item.subMenu.map((subItem: IFooterSubMenu) => (
                <Link
                  href="/deskree-backend"
                  className="anim hover:text-white"
                  key={`footer-sub-menu-${subItem.id}`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 xl:hidden">
          <div className="flex flex-col gap-5">
            <Image
              loading="lazy"
              src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015ff1_deskree-solo-logo.png"
              alt="logo"
              width={28}
              height={23}
            />
            <div className="text-secondary">
              Deskree is a cloud platform that simplifies and optimizes backend
              development and infrastructure management for businesses and
              developers.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:grid sm:grid-cols-4">
            {footerMenu.map((item: IFooterMenu) => (
              <div
                className="flex flex-col gap-2 text-secondary"
                key={`footer-menu-${item.id}`}
              >
                <div className="mb-2 text-lg font-medium">{item.title}</div>
                {item.subMenu.map((subItem: IFooterSubMenu) => (
                  <Link
                    href="/deskree-backend"
                    className="anim hover:text-white"
                    key={`footer-sub-menu-${subItem.id}`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-secondary">
          © Copyright 2024, Deskree Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
