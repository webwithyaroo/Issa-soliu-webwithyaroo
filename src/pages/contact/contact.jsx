import { useState } from "react";
import AnimatedLink from "../../components/animated-text";
import { easeInOut, motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [show, setShow] = useState(true);
  return (
    <section className="bg-black min-h-screen mb-[73vh] pb-[120px] ">
      <div className="w-full  container text-center">
        <motion.h1
          initial={{ translateY: -90, opacity: 0 }}
          whileInView={{ translateY: 35, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeInOut, delay: 1.52 }}
          viewport={{ once: true }}
          className="lg:text-[240px] md:text-[190px] text-9xl max-[400px]:text-7xl text-white  leading-[0.8]
          lg:translate-y-10"
        >
          Contact
        </motion.h1>
      </div>
      <div className="container relative z-[49]">
        <motion.div
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-10 border-[1px] border-zinc-300 min-h-[60vh]  px-6 pt-20 pb-6 rounded-3xl contact-filter"
        >
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-zinc-300 max-sm:max-w-[420px] ">
              DO YOU NEED MORE INFO ABOUT STARTING A PROJECT TOGETHER OR ABOUT
              COLLABORATing WITH ME? GET IN TOUCH BY FILLING THIS FORM.
            </h1>
            <div className="flex items-center gap-x-2 max-sm:mt-3 justify-start">
              <motion.span
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeInOut }}
                className="size-4 rounded-full flex-shrink-0 bg-green-400"
              ></motion.span>
              <h1 className="uppercase text-zinc-300  max-[400px]:text-sm">
                one spot available for November 2024
              </h1>
            </div>
            {show && (
              <h1 className="text-white max-sm:my-4    lg:text-6xl md:text-5xl text-4xl">
                Get in touch
              </h1>
            )}
          </div>
          <div>
            <ContactForm setShow={setShow} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

// contact form

const ContactForm = ({ setShow }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.subject) formErrors.subject = "Project info is required";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true); // Show the loading spinner

      // If no errors, submit the form
      fetch("https://formspree.io/f/mbljjodp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSubmitted(true); // Show confirmation message
            setFormData({
              name: "",
              email: "",
              subject: "",
            });
          } else {
            setErrors({
              submit: "Check your connection failed and try again.",
            });
          }
        })
        .catch(() =>
          setErrors({ submit: "Submission failed. Please try again." })
        )
        .finally(() => {
          setLoading(false); // Hide the loading spinner after submission
        });
    }
  };

  return (
    <section>
      <div className=" relative z-[49]">
        {submitted ? (
          <div className="text-white text-center py-10">
            <h2>Thank you for your message!</h2>
            <p>We'll get back to you soon.</p>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: 180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white mt-5  max-w-fit flex items-center justify-center p-4 border-2 border-blue-500  rounded-full mx-auto w-20 h-"
            >
              <FaCheck className="mx-auto size-10 text-blue-500" />
            </motion.div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 max-sm:mt-5 max-[400px]:grid-cols-1 max-[400px]:gap-y-5 gap-x-10 max-md:gap-x-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="placeholder-zinc-300 text-white outline-none border-b-[1px] border-zinc-300 pb-3 bg-transparent w-full"
                />
                {errors.name && (
                  <p className="text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder-zinc-300 text-white outline-none border-b-[1px] border-zinc-300 pb-3 bg-transparent w-full"
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <textarea
              id="subject"
              name="subject"
              rows={3}
              placeholder="Info about your project..."
              value={formData.subject}
              onChange={handleChange}
              className="placeholder-zinc-300 capitalize text-white outline-none border-b-[1px] border-zinc-300 pb-3 bg-transparent mt-10 w-full"
            ></textarea>
            {errors.subject && (
              <p className="text-red-500 mt-1">{errors.subject}</p>
            )}

            <button
              type="submit"
              onClick={() => setShow(false)}
              className="bg-blue-500 py-3 px-10 rounded-full mt-10 text-white flex items-center justify-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
              ) : (
                <AnimatedLink title={"Submit"} />
              )}
            </button>

            {errors.submit && (
              <p className="text-red-500 mt-5">{errors.submit}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
