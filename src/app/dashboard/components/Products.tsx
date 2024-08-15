import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" }, // Animation duration (1s)
      });
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    } else {
      leftControls.start({
        x: "-100px",
        opacity: 0,
      });
      rightControls.start({
        x: "100px",
        opacity: 0,
      });
    }
  }, [leftControls, inView, rightControls]);

  return (
    <div className="flex flex-col" ref={ref}>
      <p className="text-lg">Our products</p>
      <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <motion.div
          initial={{ x: "-100px", opacity: 0 }}
          animate={leftControls}
          className="card flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]"
        >
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
              Pre-built backend services for web and mobile apps, powered by ION
              and DAC.
            </div>
            <Link className="font-medium" href="/learn-more">
              Learn more -&gt;
            </Link>
          </div>
        </motion.div>

        <div className="card flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]">
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
              Manage Integration, APIs and complex backend processes, visually
              with built in nodes.
            </div>
            <Link className="font-medium" href="/learn-more">
              Learn more -&gt;
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ x: "100px", opacity: 0 }}
          animate={rightControls}
          className="card flex h-[400px] w-full flex-col items-center justify-between gap-3 rounded-lg bg-lightBgColor px-6 py-8 md:h-[476px]"
        >
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
              Create and deploy scalable cloud infrastructure with ease with
              Atomic framework.
            </div>
            <Link className="font-medium" href="/learn-more">
              Learn more -&gt;
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
