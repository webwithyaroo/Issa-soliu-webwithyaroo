import { FaArrowRight, FaBars } from "react-icons/fa";
import AnimatedLink from "../components/animated-text";
import {
  easeInOut,
  easeOut,
  motion,
  spring,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";
const Header = () => {
  const [opened, setOpened] = useState(false);

  function handleOpenFunction() {
    setOpened((prev) => !prev);
  }

  const variants = {
    initial: { height: "100vh", paddingTop: 75 },
    animate: { height: 0, paddingTop: 0 },
  };

  return (
    <section className=" relative h-20  bg-black pt-5 text-white">
      {/* grid img */}
      <img
        src="/image/grid.png"
        alt="grid"
        className="absolute top-0 z-[1]  left-0 right-0"
      />
      <motion.div
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
        className="fixed top-0 z-[9999] ] left-0 right-0 w-full h-screen overflow-hidden  bg-white text-black "
      >
        <div className="container mt-5 max-sm:mt-20  h-fit overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, translateX: 20, translateY: 30, rotate: 5 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
              rotate: 0,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl max-w-[900px] max-sm:max-w-[450px] md:text-5xl lg:text-7xl "
          >
            Bringing Creative Visions to Life with Code.
          </motion.h1>
        </div>
      </motion.div>
      <div className="container z-50 py-4 fixed top-0 left-0 right-0  flex items-center justify-between">
        <div className="relative z-50">
          <img src="logo.svg" alt="logo" className="size-10" />
        </div>
        <div className="flex items-center gap-x-10  blg">
          <AnimatedBar handleOpenFunction={handleOpenFunction} />

          <motion.div
            initial={{ translateX: 0 }}
            animate={{
              translateX: opened ? 0 : "100%",
            }}
            className="fixed top-0 right-0 z-30  bg-white h-full transition-all duration-700 ease-out overflow-hidden px-10 lg:pl-20 flex items-center justify-center translate-x-full xl:[50%] md:w-[70%] w-full"
          >
            <div
              className="flex items-center justify-between 
             min-[405px]:flex-col w-full"
            >
              <div className=" grid grid-cols-2  justify-between items-center  w-full mb-10 max-[405px]:hidden">
                <p className="text-gray-300">Social media</p>
                <p className="text-gray-300 blg  ">Menu</p>
              </div>
              <div className="grid grid-cols-2  max-[405px]:grid-cols-1 w-full items-center justify-between max-[405px]:grid">
                <div>
                  <ul className="text-black blg max-[400px]:absolute top-24 flex flex-col max-w-fit gap-y-1">
                    <li className="hover:text-blue-500 transition-all duration-300 ease-out">
                      <a href="">
                        <AnimatedLink title={"LinkedIn"} />
                      </a>
                    </li>
                    <li className="hover:text-blue-500 transition-all duration-300 ease-out">
                      <a href="">
                        <AnimatedLink title={"Instagram"} />
                      </a>
                    </li>

                    <li className="hover:text-blue-500 transition-all duration-300 ease-out">
                      <a href="">
                        <AnimatedLink title={"Twitter"} />
                      </a>
                    </li>
                    <li className="hover:text-blue-500 transition-all duration-300 ease-out">
                      <a href="">
                        <AnimatedLink title={"GitHub"} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="md:text-4xl lg:text-5xl text-3xl blg text-black cursor-pointer gap-2 flex flex-col ">
                    {/* <li>
                      <AnimatedLink title={"What I do"} />
                    </li> */}

                    <li className="flex hover:text-blue-500 transition-all duration-300 ease-out group">
                      <p className="group-hover:translate-x-2 transition-all duration-300 ease-out group ">
                        What we do
                      </p>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </li>
                    <li className="flex hover:text-blue-500 transition-all duration-300 ease-out group">
                      <p className="group-hover:translate-x-2 transition-all duration-300 ease-out group ">
                        Portfolio
                      </p>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </li>
                    <li className="flex hover:text-blue-500 transition-all duration-300 ease-out group">
                      <p className="group-hover:translate-x-2 transition-all duration-300 ease-out group ">
                        Let's Talk
                      </p>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-black absolute blg bottom-5 left-10 lg:left-20">
                <p className="opacity-50">Get in touch</p>
                <p className="hover:text-blue-500 transition-all duration-300 ease-out">
                  <a href="">
                    <AnimatedLink title={"webwithyaro@gmail.com"} />
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: "-120%" }}
            animate={{ translateX: opened ? "0" : "-120%" }}
            style={{ opacity: opened ? "1" : 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="fixed inset-0 bg-[#03030357] duration-300 h-full transition-all  ease-linear "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;

function AnimatedBar({ handleOpenFunction }) {
  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (item, event, x, y) => {
    const bounds = item.getBoudingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.width, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };
  return (
    <motion.button
      onPointerMove={(event) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const item = event.currentTarget;
        setTransform(item, event, x, y);
      }}
      onClick={handleOpenFunction}
      // style={{ x, y }}
      className=" rounded-full group  border-gray  z-50 size-12 lg:size-20 flex items-center justify-center flex-col bg-blue-500 transition-all duration-500 ease-in-out"
    >
      <img
        src="menu.svg"
        alt=""
        className="w-6 group-hover:translate-y-1  transition-all duration-100 ease-out group-hover:opacity-0  "
      />
      <img
        src="stroke.svg"
        alt=""
        className="w-6 group-hover:h-[2px] bg-white opacity-0 group-hover:-translate-y-1 group-hover:opacity-100 transition-all duration-300 ease-out"
      />
    </motion.button>
  );
}
