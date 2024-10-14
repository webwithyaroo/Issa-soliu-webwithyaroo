import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <motion.h1
        className="text-6xl font-bold text-gray-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Oops! The page you're looking for doesn't exist. Yet
      </motion.p>

      <motion.button
        className="mt-6 px-6 relative z-20 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/">Go Back Home</Link>
      </motion.button>
    </div>
  );
};

export default NotFound;
