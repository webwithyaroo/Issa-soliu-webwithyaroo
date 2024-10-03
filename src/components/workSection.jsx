import { useEffect, useRef, useState } from "react";
import AnimatedLink from "./animated-text";
import { motion, useScroll, useTransform } from "framer-motion";
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
    ["30%", "26%", "22%", "16%", "12%", "0%"]
  );
  const small_borderTopLeftRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    ["30%", "26%", "22%", "16%", "12%", "0%"]
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
        className="bg-white  relative mix-blend-difference flex items-center pb-20 flex-col mx-[3vw] rounded-t-full "
      >
        <div className="absolute sm:top-2 top-[2px] translate-y-[-100%] decoStyles bg-white w-20 h-14  rounded-t-full flex items-center justify-center">
          <FaArrowUp className="size-10 opacity-20 rotate-[145deg] mt-4" />
        </div>
        <p className="text-3xl pt-20 text-balance max-w-[700px] md:text-4xl lg:text-5xl blg font-medium text-center px-2 ">
          <AnimatedWords
            delay={0.2}
            text={
              "With several years of industry experience, I've collaborated with businesses of all sizes"
            }
          />
        </p>

        <button className=" relative z-20 mx-auto rounded-full ring-slate-500 ring-1 px-4 py-3 mt-10 blg ">
          <AnimatedLink title={"DISCOVER MY JOURNEY "} />
        </button>
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
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Infinite and smooth
      >
        {/* Duplicating the text twice to create seamless effect */}
        {scrollingText}
        {scrollingText}
      </motion.div>
    </div>
  );
}

function MyProjects() {
  const [opened, setOpened] = useState(null);
  return (
    <section className=" container py-20">
      <div>Projects</div>

      {/* Work Tabulation */}

      <table className="min-w-full text-white container">
        <thead className="   border-b-[1px] border-white ">
          <tr className="  uppercase  text-md  divide-gray-300 -2 text-gray-500 blg text-left">
            <th className="py-1 ">Project</th>
            <th className="max-sm:hidden">Cartegory</th>
            <th className="max-sm:hidden">Client</th>
            <th>Year</th>
          </tr>
        </thead>

        {/* Body of the table */}
        <tbody className="text-white">
          <tr
            // onClick={setOpened(1)}
            // initial={{ backgroundColor: "black" }}
            // whileHover={{ backgroundColor: "white" }}
            className="text-start relative group isolate overflow-hidden"
          >
            <td className="py-3 relative z-50 group-hover:text-black    transition-all group-hover:translate-x-4  duration-300 ease-out ">
              Sparkr Digitals Landing Page
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black  ">
              Development
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black   ">
              Sparkr Digitals
            </td>
            <td className="relative z-50 group-hover:text-black  ">2024</td>

            <div className="absolute inset-0 group-hover:h-full  h-0 transition-all duration-300 ease-out  bg-white w-full -z-10"></div>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="mt-10">
                <p className="blg text-balance text-2xl md:text-3xl lg:text-4xl max-w-[900px]">
                  Partnered with the Sparkr team to refine a website,
                  emphasizing smooth, eye-catching animations, while
                  coordinating with designers and developers to deliver a
                  polished, flagship-quality product.
                </p>
                <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                  <AnimatedLink title={"See Website"} />
                </div>
                <ul className="blg">
                  <li className="list-decimal list-inside">
                    Fronted Development
                  </li>
                  <li className="list-decimal list-inside">Animation</li>
                  <li className="list-decimal list-inside">Next JS</li>
                  <li className="list-decimal list-inside">Tailwind CSS</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-10 justify-center">
                  <img
                    className=" object-contain"
                    src="/image/spk_1.png"
                    alt="A website home page"
                  />
                  <img
                    className=" object-contain"
                    src="/image/spk_2.png"
                    alt="A website testimony"
                  />
                  <img
                    className=" object-contain"
                    src="/image/spk_3.png"
                    alt="A website footer"
                  />
                </div>
              </div>
            </td>
          </tr>

          {/* The second Project  */}
          <tr className="text-start relative group isolate overflow-hidden">
            <td className="py-3 relative z-50 group-hover:text-black    transition-all group-hover:translate-x-4  duration-300 ease-out ">
              SANAM: Frontend Collaboration
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black  ">
              Development
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black   ">
              Sanam
            </td>
            <td className="relative z-50 group-hover:text-black  ">2024</td>

            <div className="absolute inset-0 group-hover:h-full  h-0 transition-all duration-300 ease-out  bg-white w-full -z-10"></div>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="mt-10">
                <p className="blg text-balance text-2xl md:text-3xl lg:text-4xl max-w-[900px]">
                  Working with global developers has been a great experience. I
                  contributed as a Frontend Developer to SANAM, an Arab-based
                  project, where I crafted an engaging and visually appealing
                  section.
                </p>
                <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                  <AnimatedLink title={"See Website"} />
                </div>
                <ul className="blg">
                  <li className="list-decimal list-inside">
                    Responsive Design
                  </li>
                  <li className="list-decimal list-inside">
                    Dynamic Content Rendering
                  </li>
                  <li className="list-decimal list-inside">
                    {" "}
                    Interactive Animations
                  </li>
                  <li className="list-decimal list-inside">
                    Localization/Multilingual Support
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-10 justify-center">
                  <img
                    className=" object-contain"
                    src="/image/sanam_1.png"
                    alt="A website home page"
                  />
                  <img
                    className=" object-contain"
                    src="/image/sanam_2.png"
                    alt="A website testimony"
                  />
                  <img
                    className=" object-contain"
                    src="/image/sanam_3.png"
                    alt="A website footer"
                  />
                </div>
              </div>
            </td>
          </tr>

          {/* The third Project  */}
          <tr className="text-start relative group isolate overflow-hidden">
            <td className="py-3 relative z-50 group-hover:text-black    transition-all group-hover:translate-x-4  duration-300 ease-out ">
              HOMAKER: Ecommerce Prescence
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black  ">
              Development
            </td>
            <td className="max-sm:hidden relative z-50 group-hover:text-black   ">
              Homaker
            </td>
            <td className="relative z-50 group-hover:text-black  ">2023</td>

            <div className="absolute inset-0 group-hover:h-full  h-0 transition-all duration-300 ease-out  bg-white w-full -z-10"></div>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="mt-10 ring-8 h-0 overflow-hidden">
                <p className="blg text-balance text-2xl md:text-3xl lg:text-4xl max-w-[900px]">
                  I built Homaker, a modern e-commerce platform, focusing on
                  responsive design and dynamic product displays to create an
                  intuitive shopping experience for users across all devices.
                </p>
                <div className="px-6 py-3 my-5 bg-white w-fit rounded-full">
                  <AnimatedLink title={"See Website"} />
                </div>
                <ul className="blg">
                  <li className="list-decimal list-inside">Product Catalog</li>
                  <li className="list-decimal list-inside">
                    Dynamic Content Rendering
                  </li>
                  <li className="list-decimal list-inside">
                    {" "}
                    Interactive Animations
                  </li>
                  <li className="list-decimal list-inside">
                    User Authentication
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-10 justify-center">
                  <img
                    className=" object-contain"
                    src="/image/home_1.png"
                    alt="A website home page"
                  />
                  <img
                    className=" object-contain"
                    src="/image/home_2.png"
                    alt="A website testimony"
                  />
                  <img
                    className=" object-contain"
                    src="/image/home_3.png"
                    alt="A website footer"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
