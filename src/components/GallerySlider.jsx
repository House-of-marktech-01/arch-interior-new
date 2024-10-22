import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import galleryimage1 from "../assets/images/livingroom1.png";
import galleryimage2 from "../assets/images/livingroom2.png";
import galleryimage3 from "../assets/images/livingroom3.png";
import galleryimage4 from "../assets/images/livingroom2.png";

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
      <div className="flex justify-center items-center h-3/4">
        {/* Left Arrow */}
        <button
          onClick={goToPreviousImage}
          className="absolute left-0 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out z-10"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        {/* Gallery Images */}
        <div className="flex justify-center space-x-4 mx-20 mb-20">
          {displayedImages.map((image, index) => (
            <div key={index} className="w-full relative">
              {" "}
              {/* Full width */}
              <img
                src={image.src}
                alt={`Gallery ${selectedGallery} ${
                  currentImageIndex + index + 1
                }`}
                className="rounded-lg shadow-lg w-full h-full" // Full width and auto height for proportional scaling
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNextImage}
          className="absolute right-0 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out z-10"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-slate-200 flex flex-col justify-between">
      {/* Heading */}
      <h1 className="text-center text-6xl my-16 text-gray-900 font-cormorant ">
        Explore Real Spaces We've Transformed
      </h1>

      {/* Buttons */}
      <div className="flex justify-center space-x-6 py-10">
        <button
          onClick={() => handleGalleryChange("livingRoom")}
          className={`px-6 text-lg transition duration-300 ease-in-out ${
            selectedGallery === "livingRoom" ? "underline text-red-500" : ""
          }`}
        >
          LIVING ROOM
        </button>
        <button
          onClick={() => handleGalleryChange("diningRoom")}
          className={`px-6 text-lg transition duration-300 ease-in-out ${
            selectedGallery === "diningRoom" ? "underline text-red-500" : ""
          }`}
        >
          DINING ROOM
        </button>
        <button
          onClick={() => handleGalleryChange("bedroom")}
          className={`px-6 text-lg transition duration-300 ease-in-out ${
            selectedGallery === "bedroom" ? "underline text-red-500" : ""
          }`}
        >
          BEDROOM
        </button>
        <button
          onClick={() => handleGalleryChange("office")}
          className={`px-6 text-lg transition duration-300 ease-in-out ${
            selectedGallery === "office" ? "underline text-red-500" : ""
          }`}
        >
          OFFICE
        </button>
      </div>

      {/* Gallery */}
      {renderGallery()}
    </div>
  );
};

export default GallerySlider;
