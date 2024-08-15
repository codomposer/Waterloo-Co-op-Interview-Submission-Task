"use client";

import React from "react";

import { Button } from "@/components/button/Button";
import Products from "./components/Products";
import Solution from "./components/Solution";

const Dashboard = () => {
  return (
    <div className="flex flex-col py-10 sm:py-20 lg:py-40">
      <section>
        <p className="w-full text-4xl font-medium leading-[1.2] sm:text-4xl md:text-3xl lg:w-[800px] lg:text-5xl lg:text-[64px]">
          Your backend more simplified, scalable, and manageable than ever.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button className="px-10 py-2">Get Started</Button>
          <Button variant="outline" className="px-10 py-2">
            Book a Demo
          </Button>
        </div>
      </section>

      <section className="mt-14 lg:mt-28">
        <div className="rounded-lg border border-borderColor p-5 sm:px-9 sm:py-10 lg:py-16">
          <div className="grid grid-cols-1 gap-3 pb-6 lg:grid-cols-2 lg:pb-12">
            <p className="text-2xl font-medium">
              Build cloud infrastructure with ease, powered by open-source,
              Atomic architecture.
            </p>
            <p className="text-lg text-secondary">
              Deploy scalable and reusable workflows for your complex backend
              processes using nodes with no configuration, running
              independently, all managed by the Atomic architecture.
            </p>
          </div>

          <div className="my-4 border border-[#252525] md:my-8 lg:my-16" />

          <Products />
        </div>
      </section>

      <section className="mt-14 lg:mt-28">
        <Solution />
      </section>

      <section className="my-8 sm:my-16 lg:my-24">
        <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-lightBgColor p-5 sm:px-12 sm:py-10 md:gap-10 lg:px-20 lg:py-16">
          <p className="text-center text-2xl font-medium lg:text-[32px]">
            With Deskree, developers and business focus more on innovation and
            less on complex cloud setup.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="px-10 py-2">Get Started</Button>
            <Button variant="outline" className="bg-[#0f1011] px-10 py-2">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
