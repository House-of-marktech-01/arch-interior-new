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
      className="relative text-center h-screen md:h-[60vh] lg:h-[50vh]"
      ref={clientsRef} // Attach ref here
      style={{
        backgroundImage: "url('/assets/images/fc-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background pattern effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div> */}
      <div className="relative w-full h-[100vh]  py-12 items-center justify-center bg-black bg-opacity-70 flex-col-reverse lg:flex-row">
        <h2 className="relative text-3xl font-bold font-cormorant mb-8 text-white z-10">
          Featured Clients
        </h2>

        <motion.div
          className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center px-4"
          initial={{ opacity: 0, y: 50 }} // Initial animation settings
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on visibility
          transition={{ duration: 0.5 }} // Animation duration
        >
          <motion.img
            src={logo1}
            alt="HGTV"
            className="w-24 sm:w-32 md:w-40 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded-lg" // Responsive sizing, added rounded corners
            initial={{ opacity: 0, scale: 0.8 }} // Initial image animation settings
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            } // Animate based on visibility
            transition={{ duration: 0.5, delay: 0.1 }} // Animation duration with delay
          />
          <motion.img
            src={logo2}
            alt="The Wall Street Journal"
            className="w-32 sm:w-40 md:w-48 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded-lg" // Responsive sizing
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src={logo3}
            alt="The New York Times"
            className="w-28 sm:w-36 md:w-40 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded-lg" // Responsive sizing
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            src={logo1}
            alt="HGTV"
            className="w-24 sm:w-32 md:w-40 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded-lg" // Responsive sizing, added rounded corners
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src={logo2}
            alt="The Wall Street Journal"
            className="w-32 sm:w-40 md:w-48 h-auto object-contain transition-transform duration-300 hover:scale-105 border-2 bg-white p-2 rounded-lg" // Responsive sizing
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedClients;
