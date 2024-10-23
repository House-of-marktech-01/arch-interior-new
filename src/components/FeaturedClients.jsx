import { useEffect, useRef, useState } from "react";
import logo1 from "/assets/images/hgtv-logo.png";
import logo2 from "/assets/images/the-wall-street-journal-logo.png";
import logo3 from "/assets/images/nyt-logo-379x64.png";
import { motion } from "framer-motion"; // Import framer-motion for animations

const FeaturedClients = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const clientsRef = useRef(null); // Ref for the Featured Clients section

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

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current);
      }
    };
  }, []);

  return (
    <div
      className="text-center py-12 h-[50vh]"
      ref={clientsRef} // Attach ref here
    >
      <h2 className="text-3xl font-bold font-cormorant mb-8">
        Featured Clients
      </h2>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-16"
        initial={{ opacity: 0, y: 50 }} // Initial animation settings
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        <motion.img
          src={logo1}
          alt="HGTV"
          className="w-32 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded" // Added border and padding
          initial={{ opacity: 0, scale: 0.8 }} // Initial image animation settings
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          } // Animate based on visibility
          transition={{ duration: 0.5, delay: 0.1 }} // Animation duration with delay
        />
        <motion.img
          src={logo2}
          alt="The Wall Street Journal"
          className="w-48 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded" // Added border and padding
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.img
          src={logo3}
          alt="The New York Times"
          className="w-40 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded" // Added border and padding
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.img
          src={logo1}
          alt="HGTV"
          className="w-32 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded" // Added border and padding
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.img
          src={logo2}
          alt="The Wall Street Journal"
          className="w-48 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded" // Added border and padding
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default FeaturedClients;
