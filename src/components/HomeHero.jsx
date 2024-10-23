import { motion } from "framer-motion";
import homehero from "/assets/images/homehero.png";

const HomeHero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      {/* Background Image */}
      <img
        src={homehero}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay and Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Space with Style
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl mb-6 italic font-cormorant text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover a world of creative designs tailored just for you.
          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-[#ED3237] font-mono text-white py-3 px-8 rounded-none shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            START MY TRANSFORMATION
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
