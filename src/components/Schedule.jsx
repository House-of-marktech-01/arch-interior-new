import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import homehero from "/assets/images/homehero.png";

const Schedule = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const scheduleRef = useRef(null); // Ref for the Schedule section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }

    return () => {
      if (scheduleRef.current) {
        observer.unobserve(scheduleRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center p-8 rounded-none h-[100vh]  text-white"
      ref={scheduleRef} // Attach ref here
    >
      {/* Image Section */}
      <motion.div
        className="flex-1 mb-6 md:mb-0 md:mr-8"
        initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        } // Animate based on visibility
        transition={{ duration: 0.8 }} // Animation duration
      >
        <motion.img
          src={homehero}
          alt="Interior Design"
          className="w-full h-auto rounded-none shadow-lg transform hover:scale-105 transition duration-300" // No border-radius, sharp corners
          whileHover={{ scale: 1.05 }} // Slight zoom on hover
        />
      </motion.div>

      {/* Text and Button Section */}
      <motion.div
        className="flex-1 justify-center items-center text-center md:text-left"
        initial={{ opacity: 0, x: -50 }} // Slide in from the left
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on visibility
        transition={{ duration: 0.7 }} // Adjusted duration for a smoother effect
      >
        <h2 className="text-3xl md:text-5xl font-cormorant font-bold mb-6">
          Think you can&apos;t afford beautiful interior design? Think again.
        </h2>

        <motion.button
          className="py-3 px-8 bg-[#ED3237] font-mono text-white text-lg rounded-none shadow-lg hover:bg-[#000000] transition duration-300"
          whileHover={{ scale: 1.05, backgroundColor: "#000000" }} // Hover with slight scale and color change
          whileTap={{ scale: 0.95 }} // Scale down on tap for a click effect
        >
          SCHEDULE A CONSULTATION
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Schedule;
