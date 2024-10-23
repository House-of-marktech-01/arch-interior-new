import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for animations
import galleryimage1 from "/assets/images/livingroom1.png";
import galleryimage2 from "/assets/images/livingroom2.png";
import galleryimage3 from "/assets/images/livingroom3.png";
import galleryimage4 from "/assets/images/livingroom2.png";

const GallerySlider = () => {
  const [selectedGallery, setSelectedGallery] = useState("livingRoom");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleries = {
    livingRoom: [
      { src: galleryimage1 },
      { src: galleryimage2 },
      { src: galleryimage3 },
      { src: galleryimage4 },
    ],
    diningRoom: [
      { src: galleryimage1 },
      { src: galleryimage2 },
      { src: galleryimage3 },
      { src: galleryimage4 },
    ],
    bedroom: [
      { src: galleryimage1 },
      { src: galleryimage2 },
      { src: galleryimage3 },
      { src: galleryimage4 },
    ],
    office: [
      { src: galleryimage1 },
      { src: galleryimage2 },
      { src: galleryimage3 },
      { src: galleryimage4 },
    ],
  };

  const handleGalleryChange = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(galleries[selectedGallery].length - 3, 0)
        : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= galleries[selectedGallery].length - 3 ? 0 : prevIndex + 1
    );
  };

  const renderGallery = () => {
    const images = galleries[selectedGallery];
    const displayedImages = images.slice(
      currentImageIndex,
      currentImageIndex + 3
    ); // Display 3 images

    return (
      <motion.div
        className="flex justify-center items-center h-3/4"
        initial={{ opacity: 0 }} // Initial animation settings
        animate={{ opacity: 1 }} // Final animation state
        transition={{ duration: 0.5 }} // Animation duration
      >
        {/* Left Arrow */}
        <motion.button
          onClick={goToPreviousImage}
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap
          className="absolute left-0 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300 ease-in-out z-10"
        >
          <FaArrowLeft className="text-2xl" />
        </motion.button>
        {/* Gallery Images */}
        <div className="flex justify-center space-x-4 mx-6 sm:mx-10 lg:mx-20 mb-12 sm:mb-20">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.8 }} // Initial image animation settings
              animate={{ opacity: 1, scale: 1 }} // Final animation state
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
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
          className="absolute right-0 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300 ease-in-out z-10"
        >
          <FaArrowRight className="text-2xl" />
        </motion.button>
      </motion.div>
    );
  };

  return (
    <div className="w-full h-full bg-black text-white flex flex-col justify-between">
      {/* Heading */}
      <h1 className="text-center text-6xl my-16 text-gray-900 font-cormorant ">
        Explore Real Spaces We've Transformed
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-6 py-6 sm:py-8 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
          onClick={() => handleGalleryChange("diningRoom")}
          className={`px-4 sm:px-6 text-sm sm:text-lg transition duration-300 ease-in-out ${
            selectedGallery === "diningRoom"
              ? "underline text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          DINING ROOM
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
      {renderGallery()}
    </div>
  );
};

export default GallerySlider;
