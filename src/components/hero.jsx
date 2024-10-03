"use client";
import { FaArrowRight } from "react-icons/fa";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  //checking the window size

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const isLarge = windowSize >= 700;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "end center"],
  });

  // Consistent units for height animation
  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
    ["0px", "20px", "40px", "80px", "120px", "160px", "180px"]
  );

  const variants = {
    initial: { translateY: -40, opacity: 0 },
    animate: { translateY: 0, opacity: 1 },
  };

  return (
    <div className="min-h-[80vh] relative z-10 text-white pt-5 max-sm:pt-20 flex flex-col h-full justify-between">
      <div>
        <div className="container h-fit overflow-hidden">
          <motion.h1
            variants={variants}
            initial={"initial"}
            whileInView={"animate"}
            transition={{ duration: 0.5, delay: 1, ease: easeOut }}
            viewport={{ once: true }}
            className="text-4xl max-w-[900px] max-sm:max-w-[450px] md:text-5xl lg:text-6xl font-medium "
          >
            Bringing Creative Visions to Life with Code
            <small className="text-sm">currently</small>
            <span className="font-serif lg:text-7xl">@</span>
            <span className="italic font-extralight text-3xl md:text-3xl lg:text-5xl text-blue-300">
              <a href="">SparkrDigitals</a>
            </span>
          </motion.h1>
        </div>

        <motion.div ref={targetRef} className="relative sm:container">
          {/* Apply the animated height to the video container */}
          <motion.div
            style={{ height: isLarge && height }}
            transition={{ duration: 5, ease: "linear" }}
            className="flex items-center justify-center max-sm:aspect-video sm:h-32 overflow-hidden relative mt-5 sm:mt-10 rounded-full max-sm:rounded-none"
          >
            <video src="hero.mp4" autoPlay loop muted>
              <track
                default
                kind="captions"
                label="English captions"
                src="captions.vtt"
              />
            </video>
          </motion.div>

          <div className="bg-black absolute bottom-0 translate-y-[50%] -translate-x-1/2 size-32 left-1/2 rounded-full p-4 flex items-center justify-center z-10">
            <img src="logo.svg" alt="logo" />
          </div>
        </motion.div>
      </div>

      <div className="capitalize container text-4xl font-light md:text-5xl lg:text-6xl flex max-[500px]:flex-col justify-between max-[500px]:items-start gap-4 items-center mt-7">
        <div>
          <motion.p
            initial={{ opacity: 0, translateY: -25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-xl max-w-64 blg flex max-[500px]:mt-14 justify-center text-gray"
          >
            Empowering brands with visually stunning and functional web
            applications.
            <FaArrowRight className="-rotate-45 flex-shrink-0 text-white" />
          </motion.p>
        </div>

        <div className=" mb-20">
          <motion.h1
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="h-fit overflow-hidden"
          >
            issa-soliu
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex items-center justify-center"
          >
            <img src="stroke.svg" alt="" className="align-bottom w-20 mr-2" />
            olawale
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
