import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import homehero from "/assets/images/Residential Views/LIVING DINING 2.jpg";

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
      className="flex flex-col-reverse lg:flex-row justify-between items-center rounded-none h-[100vh] text-white"
      ref={scheduleRef} // Attach ref here
      style={{
        backgroundImage: "url('/assets/images/Residential Views/Cam-1.jpg')", //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\IMG-20220622-WA0008.jpg"
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-black bg-opacity-70 flex-col-reverse lg:flex-row">
        {/* Text and Button Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4"
          initial={{ opacity: 0, x: -50 }} // Slide in from the left
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on visibility
          transition={{ duration: 0.7 }} // Adjusted duration for a smoother effect
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant mb-6">
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

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 mb-6 lg:mb-0 px-4 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          } // Animate based on visibility
          transition={{ duration: 0.8 }} // Animation duration
        >
          <motion.img
            src={homehero}
            alt="Interior Design"
            className="w-full h-auto max-h-[80vh] rounded-none shadow-lg transform hover:scale-105 transition duration-300" // Adjusted for responsiveness
            whileHover={{ scale: 1.05 }} // Slight zoom on hover
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
