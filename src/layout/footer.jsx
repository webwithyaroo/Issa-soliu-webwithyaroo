import { motion } from "framer-motion";
import AnimatedLink from "../components/animated-text";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative">
      <div className="fixed bottom-0 w-full bg-blue-500 z-[-100] flex items-center justify-center h-[80vh]">
        <div className=" pt-10 container relative z-50">
          <motion.ul
            className=" mt-16 blg text-2xl md:text-3xl lg:text-4xl"
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
              <a href="/"> Home</a>
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
              <motion.li
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="https://www.linkedin.com/in/issa-soliu-ridollahi-3ab69129b/"
                  className="flex items-center group  justify-center gap-x-2"
                >
                  <FaLinkedin className="size-7 group-hover:opacity-100 bg-white p-1 rounded-sm opacity-25 " />
                  <AnimatedLink title={"LinkedIn"} />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="https://www.instagram.com/webwithyaroo/"
                  className="flex group items-center justify-center gap-x-2"
                >
                  <FaInstagram className="size-7 group-hover:opacity-100 bg-white p-1 rounded-sm opacity-25 " />
                  <AnimatedLink title={"Instagram"} />
                </a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="https://x.com/webwithyaroo"
                  className="flex group items-center justify-center gap-x-2"
                >
                  <FaTwitter className="size-7  bg-white p-1 rounded-sm opacity-25 group-hover:opacity-100" />
                  <AnimatedLink title={"Twitter"} />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.7 }}
              >
                <a
                  href="https://github.com/webwithyaroo"
                  className="flex blg items-center group justify-center gap-x-2"
                >
                  <FaGithub className="size-7 group-hover:opacity-100 bg-white p-1 rounded-sm opacity-25 " />
                  <AnimatedLink title={"GitHub"} />
                </a>
              </motion.li>
            </ul>
          </div>

          <img
            src={"/image/stroke.webp"}
            width={1000}
            height={500}
            alt="line stroke"
            className="absolute top-0  -z-50 w-full object-cover  left-0 right-0 border-white"
          />
        </div>
      </div>
      <p className="blg text-sm text-center absolute bottom-3 left-1/2 -translate-x-1/2 ">
        &copy; {new Date().getFullYear()} Issa Soliu. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
