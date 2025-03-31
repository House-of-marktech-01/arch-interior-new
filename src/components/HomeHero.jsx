import { motion } from "framer-motion";
import { useState } from "react";
import homehero from "/assets/images/bathroom2.jpg";
import Kimage1 from "/assets/images/Modular Kitchen/KITCHEN 1.jpg";
import Bimage1 from "/assets/images/Residential Views/8.jpg";
import Rimage1 from "/assets/images/Residential Views/03.jpg";
import Rimage2 from "/assets/images/Residential Views/04.jpg";

const images = [homehero, Kimage1, Bimage1, Rimage1, Rimage2];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnimationComplete = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      >
        <img
          src={images[currentIndex]}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay and Centered Content */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-8 px-4">
          {/* Centered Heading with Subtle Shadow */}
          <motion.h1
            className="text-7xl md:text-9xl tracking-wide text-white leading-tight font-cormorant"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Space
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl italic font-cormorant text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover a world of creative designs tailored just for you.
          </motion.p>

          {/* Button */}
          {/* Uncomment and update the button as needed */}
          {/* <motion.button
            className="bg-[#ED3237] font-mono text-white py-3 px-8 rounded-none shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            START MY TRANSFORMATION
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
