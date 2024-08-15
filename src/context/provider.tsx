"use client";

import { PropsWithChildren } from "react";
import InitializeData from "./initialize.proivder";

export default function Provider(props: PropsWithChildren) {
  return (
    <>
      <InitializeData />
      {props.children}
    </>
  );
}
