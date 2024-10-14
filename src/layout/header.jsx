import { FaArrowRight, FaBars } from "react-icons/fa";
import AnimatedLink from "../components/animated-text";
import { easeOut, motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [pageTitle, setPageTitle] = useState("");
  const menuRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const isAboutPage = window.location.pathname === "/about";
  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/about") {
      setPageTitle("About Us: Learn More About Our Journey.");
    } else if (currentPath === "/contact") {
      setPageTitle("Get in Touch with Us.");
    } else if (currentPath === "/portfolio") {
      setPageTitle("Showcasing Our Work and Creations.");
    } else {
      setPageTitle("Bringing Creative Visions to Life with Code."); // Default text for homepage
    }
  }, []);

  function handleOpenFunction() {
    setOpened((prev) => !prev);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const variants = {
    initial: { height: "100vh", paddingTop: 75 },
    animate: { height: 0, paddingTop: 0 },
  };

  return (
    <section
      className={`relative h-20 pt-5 text-white ${
        isAboutPage ? "bg-white" : "bg-black"
      }`}
    >
      {/* grid img */}
      <img
        src={"/image/stroke.webp"}
        width={1000}
        height={500}
        alt="line stroke"
        className="absolute top-0 h-screen z-[1] w-full object-cover  left-0 right-0 "
      />
      <motion.div
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
        className="fixed top-0 z-[9999] left-0 right-0 w-full h-screen overflow-hidden bg-white text-black"
      >
        <div className="container mt-5 max-sm:mt-20 h-fit overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, translateX: 20, translateY: 30, rotate: 5 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
              rotate: 0,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl max-w-[900px] max-sm:max-w-[450px] md:text-5xl lg:text-7xl"
          >
            {pageTitle}
          </motion.h1>
        </div>
      </motion.div>
      <div className="container z-50 py-4 fixed top-0 left-0 right-0  flex items-center justify-between">
        <a
          href="/"
          className=" flex  justify-center items-center   relative z-50 font-bold  text-xl md:text-xl lg:text-2xl"
        >
          <div className="w-fit  overflow-hidden border-r-2 border-blue-500">
            <motion.h1
              initial={{ translateX: 40, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className={` w-fit pr-2  ${
                isAboutPage ? "text-black" : "text-white"
              } `}
            >
              Issa
            </motion.h1>
          </div>
          <div className="w-fit  overflow-hidden border-l-2 border-blue-500">
            <motion.h1
              initial={{ translateX: -40, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className={` w-fit pl-2 ${
                isAboutPage ? "text-black" : "text-white"
              } `}
            >
              Soliu
            </motion.h1>
          </div>
        </a>
        <div className="flex items-center gap-x-10  blg">
          <AnimatedBar handleOpenFunction={handleOpenFunction} />

          <motion.div
            ref={menuRef}
            initial={{ translateX: 0 }}
            animate={{
              translateX: opened ? 0 : "100%",
            }}
            className="fixed top-0 right-0 z-30  bg-white h-full transition-all duration-700 ease-out overflow-hidden px-10 lg:pl-20 flex items-center justify-center translate-x-full xl:[50%] md:w-[75%] w-full"
          >
            <div
              className="flex items-center justify-between 
             min-[405px]:flex-col w-full"
            >
              <div className=" grid grid-cols-2  justify-between items-center  w-full mb-10 max-[405px]:hidden">
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: easeOut, duration: 0.5 }}
                  className="text-gray-300"
                >
                  Social media
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: easeOut, duration: 0.5 }}
                  className="text-gray-300 blg  "
                >
                  Menu
                </motion.p>
              </div>
              <div className="grid grid-cols-2  max-[405px]:grid-cols-1 w-full items-center justify-between max-[405px]:grid">
                <div>
                  <ul className="text-black blg max-[400px]:absolute top-24 flex flex-col max-w-fit gap-y-1">
                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5 }}
                      className="hover:text-blue-500 transition-all duration-300 ease-out  "
                    >
                      <a href="https://www.linkedin.com/in/issa-soliu-ridollahi-3ab69129b/">
                        <AnimatedLink title={"LinkedIn"} />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5, delay: 0.2 }}
                      className="hover:text-blue-500 transition-all duration-300 ease-out"
                    >
                      <a href="https://www.instagram.com/webwithyaroo/">
                        <AnimatedLink title={"Instagram"} />
                      </a>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5, delay: 0.4 }}
                      className="hover:text-blue-500 transition-all duration-300 ease-out"
                    >
                      <a href="https://x.com/webwithyaroo">
                        <AnimatedLink title={"Twitter"} />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5, delay: 0.6 }}
                      className="hover:text-blue-500 transition-all duration-300 ease-out"
                    >
                      <a href="https://github.com/webwithyaroo">
                        <AnimatedLink title={"GitHub"} />
                      </a>
                    </motion.li>
                  </ul>
                </div>
                <div>
                  <ul className="md:text-4xl lg:text-5xl text-3xl blg text-black cursor-pointer gap-2 flex flex-col ">
                    <motion.li className="flex hover:text-blue-500 transition-all duration-300 ease-out group">
                      <p className="group-hover:translate-x-2 transition-all duration-300 ease-out group ">
                        <a href={"/about"}> What we do</a>
                      </p>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5, delay: 0.2 }}
                      className="flex hover:text-blue-500 transition-all duration-300 ease-out group"
                    >
                      <a
                        href="/portfolio"
                        className="group-hover:translate-x-2 transition-all duration-300 ease-out group "
                      >
                        Portfolio
                      </a>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, translateX: 25 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ ease: easeOut, duration: 0.5, delay: 0.4 }}
                      className="flex hover:text-blue-500 transition-all duration-300 ease-out group"
                    >
                      <p className="group-hover:translate-x-2 transition-all duration-300 ease-out group ">
                        <a href={"/contact"}> Let's Talk</a>
                      </p>{" "}
                      <FaArrowRight className="rotate-45 opacity-50 ml-2 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-300 ease-out group max-[500px]:hidden" />
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div className="text-black absolute blg bottom-5 left-10 lg:left-20">
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: easeOut, duration: 0.5, delay: 0.3 }}
                  className="opacity-50 pb-2 text-xl"
                >
                  Get in touch
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: easeOut, duration: 0.5, delay: 0.4 }}
                  className="hover:text-blue-500 transition-all duration-300 ease-out"
                >
                  <a href="mailto:olawaleridollahi@gmail.com">
                    <AnimatedLink title={"Issa.dev@gmail.com"} />
                  </a>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: easeOut, duration: 0.5, delay: 0.5 }}
                  className="border-b-[2px] mt-2 border-black border-opacity-50 max-w-fit"
                >
                  <a
                    href="tel:+2347036172918"
                    className="hover:text-primary  pb-1  "
                  >
                    <AnimatedLink title="+234 (070) 36172918" />
                  </a>
                </motion.p>
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
  return (
    <motion.button
      onClick={handleOpenFunction}
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
