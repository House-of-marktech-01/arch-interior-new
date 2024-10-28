import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Rimage1 from "/assets/images/Residential Views/03.jpg";
import Rimage2 from "/assets/images/Residential Views/04.jpg";
import Rimage3 from "/assets/images/Residential Views/Cam-1.jpg";
import Rimage4 from "/assets/images/Residential Views/WhatsApp Image 2020-01-11 at 15.28.48 (1).jpeg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\WhatsApp Image 2020-01-11 at 15.28.48 (1).jpeg"

import Kimage1 from "/assets/images/Moduler Kitchen/KITCHEN 1.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Moduler Kitchen\KITCHEN 1.jpg"
import Kimage2 from "/assets/images/Moduler Kitchen/WhatsApp Image 2022-07-06 at 4.35.24 PM.jpeg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Moduler Kitchen\WhatsApp Image 2022-07-06 at 4.35.24 PM.jpeg"
import Kimage3 from "/assets/images/Moduler Kitchen/WhatsApp Image 2022-08-16 at 2.24.04 PM - Copy.jpeg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Moduler Kitchen\WhatsApp Image 2022-08-16 at 2.24.04 PM - Copy.jpeg"
import Kimage4 from "/assets/images/Moduler Kitchen/WhatsApp Image 2022-07-03 at 3.34.08 PM (1).jpeg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Moduler Kitchen\WhatsApp Image 2022-07-03 at 3.34.08 PM (1).jpeg"

import Bimage1 from "/assets/images/Residential Views/8.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\8.jpg"
import Bimage2 from "/assets/images/Residential Views/1651123338329_F2.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\1651123338329_F2.jpg"
import Bimage3 from "/assets/images/Residential Views/bed side view.png";
import Bimage4 from "/assets/images/Residential Views/IMG-20220622-WA0008.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\IMG-20220622-WA0008.jpg"

import Oimage1 from "/assets/images/Corporate Work/cam 1.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Corporate Work\cam 1.jpg"
import Oimage2 from "/assets/images/Corporate Work/cam 2.jpg";
import Oimage3 from "/assets/images/Corporate Work/cam 4.jpg";
import Oimage4 from "/assets/images/Corporate Work/R1-1-0.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\WhatsApp Image 2020-01-11 at 15.28.48 (1).jpeg"


import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySlider = () => {
  const [selectedGallery, setSelectedGallery] = useState("livingRoom");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const galleryRef = useRef(null); // Ref for the Gallery section
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State for screen size

  const galleries = {
    livingRoom: [
      { src: Rimage1 },
      { src: Rimage2 },
      { src: Rimage3 },
      { src: Rimage4 },
    ],
    kitchen: [
      { src: Kimage1 },
      { src: Kimage2 },
      { src: Kimage3 },
      { src: Kimage4 },
    ],
    bedroom: [
      { src: Bimage1 },
      { src: Bimage2 },
      { src: Bimage3 },
      { src: Bimage4 },
    ],
    office: [
      { src: Oimage1 },
      { src: Oimage2 },
      { src: Oimage3 },
      { src: Oimage4 },
    ],
  };

  const handleGalleryChange = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(galleries[selectedGallery].length - (isSmallScreen ? 1 : 3), 0)
        : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= galleries[selectedGallery].length - (isSmallScreen ? 1 : 3) ? 0 : prevIndex + 1
    );
  };

  const renderGallery = () => {
    const images = galleries[selectedGallery];
    const displayedImages = images.slice(
      currentImageIndex,
      currentImageIndex + (isSmallScreen ? 1 : 3) // Display 1 image on small screens, 3 on larger screens
    );

    return (
      <motion.div
        className="flex justify-center items-center h-3/4"
        initial={{ opacity: 0 }} // Initial animation settings
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        {/* Left Arrow */}
        <motion.button
          onClick={goToPreviousImage}
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap
          className="absolute left-12 p-3 bg-primaryBlack text-white rounded-full hover:bg-gray-600 transition duration-300 ease-in-out z-10"
        >
          <ChevronLeft className="text-2xl" />
        </motion.button>

        {/* Gallery Images */}
        <div className="flex justify-center items-center space-x-4 mx-4 sm:mx-6 md:mx-10 lg:mx-20 mb-10 sm:mb-16 lg:mb-20">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              className={`w-full ${index === 1 && !isSmallScreen ? 'h-[75vh]' : 'h-[65vh]'}`}
              initial={{ opacity: 0, scale: 0.8 }} // Initial image animation settings
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              } // Animate based on visibility
              transition={{ duration: 0.8, delay: index * 0.5 }} // Staggered animation
            >
              <img
                src={image.src}
                alt={`Gallery ${selectedGallery} ${
                  currentImageIndex + index + 1
                }`}
                className="shadow-lg w-full h-full object-cover" // Ensure images fit correctly
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={goToNextImage}
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap
          className="absolute right-12 p-3 bg-primaryBlack text-white rounded-full hover:bg-gray-600 transition duration-300 ease-in-out z-10"
        >
          <ChevronRight className="text-2xl" />
        </motion.button>
      </motion.div>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust based on screen width (sm breakpoint for Tailwind)
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full h-full  text-white flex flex-col justify-between"
      ref={galleryRef} // Attach ref here
    >
      {/* Heading */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-8 sm:my-12 lg:my-16 text-gray-100 font-cormorant"
        initial={{ opacity: 0, y: -50 }} // Heading slide-in animation from top
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Final state based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        Explore Real Spaces We&apos;ve Transformed
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-6 py-6 sm:py-8 lg:py-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
        transition={{ duration: 0.6, delay: 0.5 }} // Delayed fade-in effect for buttons
      >
        <motion.button
          onClick={() => handleGalleryChange("livingRoom")}
          className={`px-4 sm:px-6 text-sm sm:text-lg transition duration-300 ease-in-out ${
            selectedGallery === "livingRoom"
              ? "underline text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          LIVING ROOM
        </motion.button>
        <motion.button
          onClick={() => handleGalleryChange("kitchen")}
          className={`px-4 sm:px-6 text-sm sm:text-lg transition duration-300 ease-in-out ${
            selectedGallery === "kitchen"
              ? "underline text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          KITCHEN
        </motion.button>
        <motion.button
          onClick={() => handleGalleryChange("bedroom")}
          className={`px-4 sm:px-6 text-sm sm:text-lg transition duration-300 ease-in-out ${
            selectedGallery === "bedroom"
              ? "underline text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          BEDROOM
        </motion.button>
        <motion.button
          onClick={() => handleGalleryChange("office")}
          className={`px-4 sm:px-6 text-sm sm:text-lg transition duration-300 ease-in-out ${
            selectedGallery === "office"
              ? "underline text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          OFFICE
        </motion.button>
      </motion.div>

      {/* Gallery */}
      <div className="relative w-full h-full flex justify-center items-center">
        {renderGallery()}
      </div>
    </div>
  );
};

export default GallerySlider;
