import  { useState } from "react";
import galleryimage1 from "../assets/images/livingroom1.png";
import galleryimage2 from "../assets/images/livingroom2.png";
import galleryimage3 from "../assets/images/livingroom3.png";



const GallerySlider = () => {
  const [selectedGallery, setSelectedGallery] = useState("livingRoom");

  const handleGalleryChange = (gallery) => {
    setSelectedGallery(gallery);
  };

  const renderGallery = () => {
    switch (selectedGallery) {
      case "livingRoom":
        return (
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-1/3">
              <img
                src={galleryimage1}
                alt="Living Room 1"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3">
              <img
                src={galleryimage2}
                alt="Living Room 2"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3 relative">
              <img
                src={galleryimage3}
                alt="Living Room 3"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1 rounded">
                Pastel Modern Living Room Interior Design
              </div>
            </div>
          </div>
        );
      case "diningRoom":
        return (
          <div className="flex justify-center mt-8 space-x-4">
            {/* Placeholder images for Dining Room */}
            <div className="w-1/3">
              <img
                src={galleryimage1}
                alt="Dining Room 1"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3">
              <img
                src={galleryimage2}
                alt="Dining Room 2"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3 relative">
              <img
                src={galleryimage3}
                alt="Dining Room 3"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1 rounded">
                Elegant Dining Room Interior Design
              </div>
            </div>
          </div>
        );
      case "bedroom":
        return (
          <div className="flex justify-center mt-8 space-x-4">
            {/* Placeholder images for Bedroom */}
            <div className="w-1/3">
              <img
                src={galleryimage1}
                alt="Bedroom 1"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3">
              <img
                src={galleryimage2}
                alt="Bedroom 2"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/3 relative">
              <img
                src={galleryimage3}
                alt="Bedroom 3"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1 rounded">
                Modern Bedroom Interior Design
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-3xl font-bold mb-6">
        Explore Real Spaces We've Transformed
      </h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => handleGalleryChange("livingRoom")}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          LIVING ROOM
        </button>
        <button
          onClick={() => handleGalleryChange("diningRoom")}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          DINING ROOM
        </button>
        <button
          onClick={() => handleGalleryChange("bedroom")}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          BEDROOM
        </button>
      </div>
      {renderGallery()}
      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default GallerySlider;
