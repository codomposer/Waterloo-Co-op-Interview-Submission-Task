import React from "react";
import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

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

          <div className="flex flex-col">
            <p className="text-lg">Our products</p>
            <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
              <div className="flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]">
                <Image
                  src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016026_deskree-platform.svg"
                  loading="lazy"
                  alt="product-logo"
                  width={270}
                  height={215}
                />
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-xl font-semibold text-[#bfc9ff] md:text-2xl">
                    BaaS
                  </div>
                  <div className="text-sm text-[#bfc9ff] md:text-base">
                    Pre-built backend services for web and mobile apps, powered
                    by ION and DAC.
                  </div>
                  <Link className="font-medium" href="/learn-more">
                    Learn more -&gt;
                  </Link>
                </div>
              </div>

              <div className="flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]">
                <Image
                  src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016025_ion-platform.svg"
                  loading="lazy"
                  alt="product-logo"
                  width={270}
                  height={215}
                />
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-xl font-semibold text-[#d1ffe1] md:text-2xl">
                    ION
                  </div>
                  <div className="text-sm text-[#d1ffe1] md:text-base">
                    Manage Integration, APIs and complex backend processes,
                    visually with built in nodes.
                  </div>
                  <Link className="font-medium" href="/learn-more">
                    Learn more -&gt;
                  </Link>
                </div>
              </div>

              <div className="flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]">
                <Image
                  src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016024_dac-platform.svg"
                  loading="lazy"
                  alt="product-logo"
                  width={270}
                  height={215}
                />
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-xl font-semibold md:text-2xl">
                    Atomic Computing
                  </div>
                  <div className="text-sm md:text-base">
                    Create and deploy scalable cloud infrastructure with ease
                    with Atomic framework.
                  </div>
                  <Link className="font-medium" href="/learn-more">
                    Learn more -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 lg:mt-28">
        <p className="text-lg">Solution for businesses</p>

        <div className="mt-8 grid grid-cols-1 space-y-3 lg:grid-cols-11 lg:gap-3 lg:space-y-0">
          <div className="col-span-4 flex h-[400px] w-full flex-col justify-between rounded-md bg-[#e34d2b] p-8 md:h-[476px]">
            <div className="text-3xl font-medium sm:text-4xl lg:text-5xl">
              Enterprise
              <br />
              program
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium md:text-lg lg:text-xl">
                Discover how Deskree provides secure and robust scalability and
                integration for large scale businesses.
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015ff9_circurlar-checkmark-white.svg"
                  loading="lazy"
                  alt="click"
                  width={20}
                  height={20}
                />
                <div className="text-xs">
                  SOC 2 Type II, GDPR &amp; HIPPA Compliant
                </div>
              </div>
              <Image
                src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015ff8_right-long-arrow-white.svg"
                loading="lazy"
                alt="left-arrow"
                className="mt-10"
                width={50}
                height={15}
              />
            </div>
          </div>

          <div className="col-span-3 h-[400px] w-full rounded-md bg-[url('https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016076_Business-enterprise-homejpg.jpg')] bg-cover bg-center md:h-[476px]"></div>

          <div className="col-span-4 flex h-[400px] w-full flex-col justify-between rounded-md bg-gradient-to-r from-[#c6c6c6] to-[#fff] p-8 md:h-[476px]">
            <div className="text-3xl font-medium text-black sm:text-4xl lg:text-5xl">
              Accelerate
              <br />
              program
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-black md:text-lg lg:text-xl">
                Learn how Deskree helps your team remain small, build features
                fast, and get to market faster, all with no overhead cloud cost.
              </div>
              <Image
                src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b015ff7_right-long-arrow-black.svg"
                loading="lazy"
                alt="left-arrow"
                className="mt-10"
                width={50}
                height={15}
              />
            </div>
          </div>
        </div>
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
