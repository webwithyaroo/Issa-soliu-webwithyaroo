import { motion } from "framer-motion";
import AnimatedLink from "../components/animated-text";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative">
      <div className="fixed bottom-0 w-full bg-blue-500 z-[-100] flex items-center justify-center h-[80vh]">
        <div className=" pt-10 container relative z-50">
          <motion.ul
            className=" mt-20 blg text-2xl md:text-3xl lg:text-4xl"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 3 }}
            variants={{
              hidden: {
                opacity: 0,
                transition: {
                  staggerChildren: 0.5, // Stagger each child by 0.2 seconds
                },
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5, // Stagger each child by 0.2 seconds
                },
              },
            }}
          >
            <motion.li
              className="w-fit mt-2"
              whileHover={{ translateX: 10 }} // Change to 10 for a subtle effect
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, translateY: 20 },
                visible: { opacity: 1, translateY: 0 },
              }}
            >
              <a href="/about">About Us</a>
            </motion.li>

            <motion.li
              className="w-fit mt-2"
              whileHover={{ translateX: 10 }} // Change to 10 for a subtle effect
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, translateY: 20 },
                visible: { opacity: 1, translateY: 0 },
              }}
            >
              <a href="/services">Services</a>
            </motion.li>

            <motion.li
              className="w-fit mt-2"
              whileHover={{ translateX: 10 }} // Change to 10 for a subtle effect
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, translateY: 20 },
                visible: { opacity: 1, translateY: 0 },
              }}
            >
              <a href="/portfolio">Portfolio</a>
            </motion.li>

            <motion.li
              className="w-fit mt-2"
              whileHover={{ translateX: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, translateY: 20 },
                visible: { opacity: 1, translateY: 0 },
              }}
            >
              <a href="/contact">Contact</a>
            </motion.li>
          </motion.ul>

          <div className="min-[400px]:absolute max-[400px]:mt-10 top-28 right-0">
            <ul className="text-black   blg  flex items-start justify-center gap-2 max-w-fit gap-y-1 flex-col">
              <li>
                <a
                  href=""
                  className="flex items-center  justify-center gap-x-2"
                >
                  <FaLinkedin className="size-7  bg-white p-1 rounded-full" />
                  <AnimatedLink title={"LinkedIn"} />
                </a>
              </li>
              <li>
                <a href="" className="flex items-center justify-center gap-x-2">
                  <FaInstagram className="size-7  bg-white p-1 rounded-full" />
                  <AnimatedLink title={"Instagram"} />
                </a>
              </li>

              <li>
                <a href="" className="flex items-center justify-center gap-x-2">
                  <FaTwitter className="size-7  bg-white p-1 rounded-full" />
                  <AnimatedLink title={"Twitter"} />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex blg items-center justify-center gap-x-2"
                >
                  <FaGithub className="size-7  bg-white p-1 rounded-full" />
                  <AnimatedLink title={"GitHub"} />
                </a>
              </li>
            </ul>
          </div>

          <img
            src="logo.svg "
            alt="loho"
            className="w-full absolute inset-0  -z-50 opacity-10"
          />
        </div>
      </div>
      <p className="blg flex absolute bottom-2 -translate-x-1/2 left-1/2 items-center justify-center text-lg">
        &copy; {new Date().getFullYear()} <img src="logo.svg" alt="loho" />. All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
