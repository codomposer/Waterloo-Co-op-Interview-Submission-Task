import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Solution = () => {
  const firstControls = useAnimation();
  const secondControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      firstControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      secondControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
      });
    } else {
      firstControls.start({
        y: "50px",
        opacity: 0,
      });
      secondControls.start({
        y: "100px",
        opacity: 0,
      });
    }
  }, [secondControls, firstControls, inView]);

  return (
    <div ref={ref}>
      <p className="text-lg">Solution for businesses</p>

      <div className="mt-8 grid grid-cols-1 space-y-3 lg:grid-cols-11 lg:gap-3 lg:space-y-0">
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={secondControls}
          className="col-span-4 flex h-[400px] w-full flex-col justify-between rounded-md bg-[#e34d2b] p-8 md:h-[476px]"
        >
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
        </motion.div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          animate={firstControls}
          className="col-span-3 h-[400px] w-full rounded-md bg-[url('https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016076_Business-enterprise-homejpg.jpg')] bg-cover bg-center md:h-[476px]"
        ></motion.div>

        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={secondControls}
          className="col-span-4 flex h-[400px] w-full flex-col justify-between rounded-md bg-gradient-to-r from-[#c6c6c6] to-[#fff] p-8 md:h-[476px]"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
