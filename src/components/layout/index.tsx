"use client";

import { SkeletonTheme } from "react-loading-skeleton";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={twMerge(
        "relative flex h-full w-full flex-col justify-center",
        inter.className,
      )}
    >
      <Header />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="mx-auto w-[1100px]">{children}</div>
      </SkeletonTheme>
      <Footer />
    </div>
  );
}
