import bathroom from '/assets/images/bathroom.jpg'
import livingroom from '/assets/images/homehero.png'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section comes into view
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section className="flex flex-col md:flex-row h-screen" ref={sectionRef}>
      {/* Left side with text */}
      <div className=" text-white p-8 md:w-1/2 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-9xl font-cormorant mb-4"
        >
          Arch Space Studio
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6 max-w-lg text-sm md:text-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className=" mb-4 text-blue-700">Where Dimension Take Shapes...</p>
        </motion.p>
        <motion.p
          className="text-gray-300 mb-6 max-w-lg text-sm md:text-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Arch Space Interio is a leading Firm in Architectural Industry in
          Customisation & Luxury estates design with Skills. We work PAN India.
        </motion.p>
        <motion.button
          className="self-start border-2 border-primaryRed px-6 py-3 hover:bg-primaryRed"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          ABOUT US
        </motion.button>
      </div>

      {/* Right side with images */}
      <div className="relative md:w-1/2 h-64 w-screen md:h-full">
        {/* Background image */}
        <motion.img
          src={bathroom}
          alt="Interior design background"
          className="h-full w-full object-cover"
          initial={{ scale: 0.8, opacity: 0 }} // Initial scale down and fade
          animate={isVisible ? { scale: 1, opacity: 1 } : {}} // Scale up when visible
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        {/* Overlapping image */}
        <div className="absolute top-2/3 translate-x-1/3 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-3/4 h-3/4 md:w-1/2 md:h-1/2 ">
          <motion.img
            src={livingroom}
            alt="Featured interior design"
            layout="fill"
            objectFit="cover"
            className="shadow-2xl object-cover h-full"
            initial={{ scale: 0.8, opacity: 0 }} // Initial scale down and fade
            animate={isVisible ? { scale: 1, opacity: 1 } : {}} // Scale up when visible
            transition={{ duration: 1.5, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
}