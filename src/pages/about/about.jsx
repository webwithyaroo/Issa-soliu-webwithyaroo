import { motion } from "framer-motion";
import AnimatedLink from "../../components/animated-text";

const About = () => {
  return (
    <section className="mb-[73vh] min-h-screen pb-20 bg-white text-black ">
      <div className="sm:container">
        <motion.div
          initial={{ height: "10px", opacity: 0 }}
          whileInView={{ height: "208px", opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-32 w-fit   overflow-hidden md:rounded-tr-full"
        >
          <video src="about.mp4" autoPlay loop muted className="">
            <track
              default
              kind="captions"
              label="English captions"
              src="captions.vtt"
            />
          </video>
        </motion.div>
      </div>
      <div className="container mt-5 blg text-zinc-600 text-xl grid grid-cols-2 gap-x-5 items-start justify-center max-sm:grid-cols-1">
        <motion.div
          className="max-w-[400px] text-balance"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="blg mb-5 font-bold">Hey there!</p>
          <motion.p
            initial={{ filter: "blur(5px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm Issa, a passionate Front-End Developer with a keen focus on
            creating responsive, user-friendly web applications. My expertise
            lies in building projects with cutting-edge technologies like React,
            TypeScript, and Tailwind CSS. I take pride in writing clean,
            scalable code, and ensuring that every digital experience I create
            is both beautiful and efficient.
          </motion.p>
          <motion.p
            className="mt-5"
            initial={{ filter: "blur(5px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My mission is to blend modern design with functionality, building
            websites and applications that not only look great but deliver
            seamless performance. Whether it's solving complex problems or
            delivering intuitive user interfaces, I’m excited to push the
            boundaries of front-end development.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 max-[1120px]:grid-cols-1 max-[1120px]:mt-10 gap-x-5">
          <motion.div
            initial={{ filter: "blur(5px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ filter: "blur(5px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="blg mb-5 font-bold">Currently</h2>
              <p>2024 - Frontend Developer at Sparkr digitals</p>
            </motion.div>
            <motion.div
              initial={{ filter: "blur(5px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="blg mt-5 font-bold">Education</h2>
              <p>Computer Science </p>
              <p>
                Lagos State University.. <span>(LASUSTECH)</span>
              </p>
            </motion.div>
          </motion.div>
          <motion.ul
            initial={{ filter: "blur(5px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="blg mb-5 font-bold max-[1120px]:mt-5">Focuses</h2>
            <li> Website Development</li>
            <li>Landing Page Development</li>
            <li>Performance Optimization</li>
            <li> Maintenance & Support</li>
            <li>SEO-Friendly Development</li>
            <li>E-Commerce Development</li>
          </motion.ul>
        </div>

        <div className="flex flex-col items-start justify-start">
          <p className="mt-10 text-black font-semibold">
            Ready to elevate your digital presence?
          </p>
          <a
            href=""
            className="flex  shrink-0 cursor-pointer  mt-4 items-center justify-center gap-x-4 rounded-full  ring-1 pr-6 ring-gray "
          >
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
            <AnimatedLink title={"Let's Talk"} className={"text-black blg"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
