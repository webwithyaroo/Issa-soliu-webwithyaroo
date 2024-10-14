import { useEffect, useRef, useState } from "react";
import AnimatedLink from "./animated-text";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  easeOut,
} from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
const WorkSection = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const lageScreen = windowSize >= 700;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", " end center"],
  });

  const borderTopRightRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    ["40%", "30%", "20%", "10%", "5%", "0%"]
  );
  const borderTopLeftRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    ["40%", "30%", "20%", "10%", "5%", "0%"]
  );
  const small_borderTopRightRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    ["5%", "4%", "10%", "16%", "12%", "0%"]
  );
  const small_borderTopLeftRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    ["5%", "4%", "10%", "16%", "12%", "0%"]
  );
  return (
    <section>
      <motion.div
        style={{
          borderTopRightRadius: lageScreen
            ? borderTopRightRadius
            : small_borderTopRightRadius,
          borderTopLeftRadius: lageScreen
            ? borderTopLeftRadius
            : small_borderTopLeftRadius,
        }}
        ref={targetRef}
        transition={{ duration: 2, ease: "linear" }}
        className="bg-white mt-14  relative mix-blend-difference flex items-center pb-20 flex-col mx-[3vw] rounded-t-full "
      >
        <div className="absolute top-3  max-md:top-[10px] translate-y-[-100%] decoStyles bg-white w-20 h-16   rounded-t-full flex items-center justify-center ">
          <FaArrowUp className="size-10 relative z-10 border-2 opacity-20 rotate-[180deg] mt-4 rounded-full p-2" />
        </div>
        <motion.p
          initial={{ translateY: 30, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: easeOut, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl pt-20 text-balance max-w-[700px] md:text-4xl lg:text-5xl blg font-medium text-center px-2 "
        >
          With several years of industry experience, I've collaborated with
          businesses of all sizes
        </motion.p>

        <a
          href="/about"
          className=" relative z-50 mx-auto rounded-full ring-slate-500 ring-1 px-4 py-3 mt-10 blg "
        >
          <AnimatedLink title={"DISCOVER MY JOURNEY "} />
        </a>
        <div className="w-full overflow-hidden  text-center border-b-[1px] border-slate-200 ">
          <h1 className="text-[12vw]  translate-y-5 lg:translate-y-10  leading-none md:text-8xl lg:text-9xl  font-bold  mt-20">
            <AnimatedWords
              text={"SINCE 2020"}
              starg={0.1}
              time={0.5}
              delay={1}
              opacity={1}
              translateY={-15}
            />
          </h1>
        </div>
      </motion.div>

      <div>
        <ScrollingText />
        <MyProjects />
      </div>
    </section>
  );
};

function ScrollingText() {
  const scrollingText = (
    <>
      <h1 className="text-white text-9xl font-extrabold mx-12">MY INSIGHTS</h1>
      <h1 className="text-white text-9xl font-extrabold mx-12">MY SERVICES</h1>
    </>
  );

  return (
    <div className="overflow-hidden whitespace-nowrap opacity-10">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Continuous scrolling from 0% to -100%
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Infinite and smooth
      >
        {/* Duplicating the text twice to create seamless effect */}
        {scrollingText}
        {scrollingText}
      </motion.div>
      <motion.div
        className="flex"
        animate={{ x: ["-100%", "0"] }} // Continuous scrolling from 0% to -100%
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "mirror",
        }} // Infinite and smooth
      >
        {/* Duplicating the text twice to create seamless effect */}
        {scrollingText}
        {scrollingText}
      </motion.div>
    </div>
  );
}

function MyProjects() {
  const [opened, setOpened] = useState(0);

  function handleAnimation(num) {
    if (opened === num) {
      setOpened(0); // Close the opened project
    } else {
      setOpened(num); // Open the clicked project
    }
  }

  return (
    <section className="container py-20 mb-[70vh]">
      <div>Projects</div>

      {/* Work Tabulation */}
      <table className="min-w-full text-white container #services ">
        <thead className="border-b-[1px] border-white">
          <tr className="uppercase text-md divide-gray-300  text-gray-500 blg text-left">
            <th className="py-1">Project</th>
            <th className="max-sm:hidden">Category</th>
            <th className="max-sm:hidden">Client</th>
            <th>Year</th>
          </tr>
        </thead>

        {/* Body of the table */}
        <tbody className="text-white">
          {/* First Project */}
          <motion.tr
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => handleAnimation(1)}
            className="border-b-[1px] border-white text-start relative group isolate overflow-hidden"
          >
            <td className="py-3 relative z-50 group-hover:text-black transition-all sm:group-hover:translate-x-4 group-hover:translate-x-2 duration-300 ease-out">
              Sparkr Digitals Landing Page
            </td>
            <td className="max-sm:hidden  relative z-50 group-hover:text-black">
              Development
            </td>
            <td className="max-sm:hidden  relative z-50 group-hover:text-black">
              Sparkr Digitals
            </td>
            <td className="relative z-50  group-hover:text-black">2024</td>

            <div className="absolute inset-0 group-hover:h-full h-0 transition-all duration-300 ease-out bg-white w-full -z-10"></div>
          </motion.tr>
          <tr>
            <td colSpan="4">
              <AnimatePresence>
                {opened === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }} // Adjust height based on your content
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Optional easing
                    className=" overflow-hidden w-[95%] mx-auto"
                  >
                    <p className="blg mt-4 text-balance text-2xl md:text-3xl lg:text-4xl max-w-[700px]">
                      Teamed up with Sparkr to improve a website, prioritizing
                      smooth animations and quality collaboration.
                    </p>
                    <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                      <AnimatedLink
                        title={"See Website"}
                        className={"text-black"}
                      />
                    </div>
                    <ul className="blg">
                      <li className="list-decimal list-inside">
                        Frontend Development
                      </li>
                      <li className="list-decimal list-inside">Animation</li>
                      <li className="list-decimal list-inside">Next JS</li>
                      <li className="list-decimal list-inside">Tailwind CSS</li>
                    </ul>

                    <div className="flex flex-wrap mx-auto max-w-[700px] items-center  mt-10 justify-center">
                      <img
                        className="object-contain "
                        src="/image/spk_1.png"
                        alt="A website home page"
                      />
                      <img
                        className="object-contain "
                        src="/image/spk_2.png"
                        alt="A website testimony"
                      />
                      <img
                        className="object-contain "
                        src="/image/spk_3.png"
                        alt="A website footer"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </td>
          </tr>

          {/* Second Project */}
          <motion.tr
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            onClick={() => handleAnimation(2)}
            className="text-start border-b-[1px] border-white relative group isolate overflow-hidden"
          >
            <td className="py-3 relative z-50 group-hover:text-black transition-all sm:group-hover:translate-x-4 group-hover:translate-x-2 duration-300 ease-out">
              SANAM: Frontend Collaboration
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black">
              Development
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black">
              Sanam
            </td>
            <td className="relative z-50 group-hover:text-black">2024</td>

            <div className="absolute inset-0 group-hover:h-full h-0 transition-all duration-300 ease-out bg-white w-full -z-10"></div>
          </motion.tr>
          <tr>
            <td colSpan="4">
              <AnimatePresence>
                {opened === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }} // Adjust height based on your content
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-10  overflow-hidden"
                  >
                    <p className="blg mt-4text-balance text-2xl md:text-3xl lg:text-4xl max-w-[700px]">
                      Working with global developers has been a great
                      experience. I contributed as a Frontend Developer to
                      SANAM, an Arab-based project, where I crafted an engaging
                      and visually appealing section.
                    </p>
                    <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                      <AnimatedLink
                        title={"See Website"}
                        className={"text-black"}
                      />
                    </div>
                    <ul className="blg">
                      <li className="list-decimal list-inside">
                        Responsive Design
                      </li>
                      <li className="list-decimal list-inside">
                        Dynamic Content Rendering
                      </li>
                      <li className="list-decimal list-inside">
                        Interactive Animations
                      </li>
                      <li className="list-decimal list-inside">
                        Localization/Multilingual Support
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-10 max-w-[700px] mx-auto justify-center">
                      <img
                        className="object-contain"
                        src="/image/sanam_1.png"
                        alt="A website home page"
                      />
                      <img
                        className="object-contain"
                        src="/image/sanam_2.png"
                        alt="A website testimony"
                      />
                      <img
                        className="object-contain"
                        src="/image/sanam_3.png"
                        alt="A website footer"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </td>
          </tr>

          {/* Third Project */}
          <motion.tr
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
            onClick={() => handleAnimation(3)}
            className="text-start border-b-[1px] border-white relative group isolate overflow-hidden"
          >
            <td className="py-3 relative z-50 group-hover:text-black transition-all sm:group-hover:translate-x-4 group-hover:translate-x-2 duration-300 ease-out">
              HOMAKER: Ecommerce Presence
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black">
              Development
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black">
              Homaker
            </td>
            <td className="relative z-50 group-hover:text-black">2023</td>

            <div className="absolute inset-0 group-hover:h-full h-0 transition-all duration-300 ease-out bg-white w-full -z-10"></div>
          </motion.tr>
          <tr>
            <td colSpan="4">
              <AnimatePresence>
                {opened === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }} // Adjust height based on your content
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-10  overflow-hidden"
                  >
                    <p className="blg mt-4text-balance text-2xl md:text-3xl lg:text-4xl max-w-[700px]">
                      I built Homaker, a modern e-commerce platform, focusing on
                      responsive design and dynamic product displays to create
                      an intuitive shopping experience for users across all
                      devices.
                    </p>
                    <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                      <AnimatedLink
                        title={"See Website"}
                        className={"text-black"}
                      />
                    </div>
                    <ul className="blg">
                      <li className="list-decimal list-inside">
                        Ecommerce API Integration
                      </li>
                      <li className="list-decimal list-inside">
                        Responsive Design
                      </li>
                      <li className="list-decimal list-inside">
                        Add-To-Cart Functionality
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-10 max-w-[700px] mx-auto justify-center">
                      <img
                        className="object-contain"
                        src="/image/home_1.png"
                        alt="A website home page"
                      />
                      <img
                        className="object-contain"
                        src="/image/home_2.png"
                        alt="A website testimony"
                      />
                      <img
                        className="object-contain"
                        src="/image/home_3.png"
                        alt="A website footer"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <motion.h1
          initial={{ opacity: 0, translateY: 35 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-white  text-3xl pt-20 mx-auto  max-w-[800px] md:text-4xl transition-all duration-500 ease-out lg:text-5xl blg font-medium text-center text-balance px-2"
        >
          Whether you need design or tweak some code, I have the skills and
          creativity needed to take your project to the next level.
        </motion.h1>

        <button className="flex shrink-0 cursor-pointer mx-auto mt-10 items-center justify-center gap-x-4 rounded-full  ring-1 pr-6 ring-gray ">
          <div className="flex size-12 m-[2px]   shrink-0 items-center justify-center overflow-hidden rounded-full  ">
            <video autoPlay loop src="gesture.mp4 " muted>
              <track
                default
                kind="captions"
                label="English captions"
                src="captions.vtt"
              />
            </video>
          </div>
          <AnimatedLink title={"Let's Talk"} className={"text-white blg"} />
        </button>
      </div>
    </section>
  );
}

export default WorkSection;
function AnimatedWords({ text, delay, starg, time, opacity, translateY }) {
  const containerVariants = {
    hidden: { opacity: opacity ? opacity : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: starg ? starg : 0.02,
        delay: delay,
        // Stagger delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: translateY ? translateY : 0,
      transition: {
        duration: time ? time : 0.1,
        // Duration of the animation for each letter
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animates when the element is in view
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} className="inline-block mr-2">
          {word.split("").map((letter, index) => (
            <motion.span
              variants={letterVariants}
              key={index}
              className="inline-block  "
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
