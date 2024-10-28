import { useEffect, useRef, useState } from "react";
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

  const clientNames = [
    "MLS Group & Associates",
    "Konnect Tech Solutions Enterprises",
    "The Dwars - Metal Craft",
    "Gauri Sahai Amar Nath Bindles",
    "Urban Atelier",
    "Hardware World",
    "Shri Narsingh Mandir Trust",
  ];

  return (
    <div
      className="relative text-center h-screen md:h-[70vh]"
      ref={clientsRef} // Attach ref here
      style={{
        backgroundImage: "url('/assets/images/Residential Views/04.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background pattern effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div> */}
      <div className="relative w-full h-full py-12 flex flex-col items-center justify-center bg-black bg-opacity-70">
        <h2 className="text-5xl font-bold font-cormorant mb-8 text-white z-10">
          Featured Clients
        </h2>

        <motion.div
          className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center px-4"
          initial={{ opacity: 0, y: 50 }} // Initial animation settings
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on visibility
          transition={{ duration: 0.5 }} // Animation duration
        >
          {clientNames.map((name, index) => (
            <motion.div
              key={index}
              className="w-24 sm:w-32 md:w-48 h-auto p-4 rounded-lg text-white font-semibold text-center font-cormorant text-lg"
              initial={{ opacity: 0, scale: 0.8 }} // Initial animation settings
              animate={
                isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with delay for staggered effect
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedClients;
