import { motion } from "framer-motion";
import homehero from "/assets/images/bathroom2.jpg";

const HomeHero = () => {
  return (
    <div className="relative flex items-center justify-end  min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={homehero}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay and Content */}
      <motion.div
        className="relative z-10 flex items-center  w-1/2 h-screen bg-black bg-opacity-70"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full text-right px-4 mr-10 space-y-14">
          {/* Heading */}
          <motion.h1
            className="text-7xl md:text-9xl mb-4 tracking-wide text-white leading-tight font-cormorant"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Space
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl mb-6 italic font-cormorant text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover a world of creative designs tailored just for you.
          </motion.p>

          {/* Button */}
          {/* <motion.button
            className="bg-[#ED3237] font-mono text-white py-3 px-8 rounded-none shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
            initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          
          >
            START MY TRANSFORMATION
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
