import { FaBars } from "react-icons/fa";
import AnimatedLink from "../components/animated-text";
import { motion } from "framer-motion";
const Header = () => {
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
        <div>
          <img src="logo.svg" alt="logo" className="size-10" />
        </div>
        <div className="flex items-center gap-x-10  blg">
          <button className="flex shrink-0 cursor-pointer  items-center justify-center gap-x-4 rounded-full  ring-1 pr-4 ring-gray ">
            <div className="flex size-12 m-[2px]  shrink-0 items-center justify-center overflow-hidden rounded-full s">
              <video autoPlay loop src="gesture.mp4 " muted>
                <track
                  default
                  kind="captions"
                  label="English captions"
                  src="captions.vtt"
                />
              </video>
            </div>
            <AnimatedLink title={"Let's Talk"} />
          </button>
          <button className="border-[1px] rounded-full group  border-gray  size-12 flex items-center justify-center flex-col">
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
