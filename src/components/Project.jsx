import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import projects from "../projects.json";
import { motion } from "framer-motion";

export function Project() {
  const location = useLocation();
  const initialCategory = location.category || "allArchitecturalService";
  const [selectedGallery, setSelectedGallery] = useState(initialCategory);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headerImages = [
    "/assets/images/WC Design/07.jpg",
    "/assets/images/WC Design/washroom1.jpg",
    "/assets/images/WC Design/bb-img.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGalleryChange = (category) => {
    setSelectedGallery(category);
  };

  const filteredProjects =
    projects.projects.find((project) => project.category === selectedGallery)
      ?.items || [];

  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* Header */}
      <header className="relative">
        <motion.div
          className="relative flex items-center justify-center h-[60vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={headerImages[currentImageIndex]}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000"
          />
          <motion.div
            className="relative z-10 text-center bg-black bg-opacity-50 p-4 rounded-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
              Our Projects
            </h1>
            <p className="text-xl italic text-gray-300 mt-2">
              Transforming Visions into Reality
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        {[
          "allArchitecturalService",
          "wcDesign",
          "modularKitchen",
          "commercialDesign",
          "residentialWork",
          "mandir",
          "corporateWork",
          "preFabrication",
          "facade",
          "cottageWork",
          "walkinCloset",
          "entranceLobby",
        ].map((category) => (
          <motion.button
            key={category}
            onClick={() => handleGalleryChange(category)}
            className={`px-5 py-3 rounded-full italic text-lg font-semibold transition-all duration-300 ease-in-out shadow-md ${
              selectedGallery === category
                ? "bg-red-500 text-white scale-110"
                : "bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white hover:scale-105"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category.replace(/([A-Z])/g, " $1").trim()}
          </motion.button>
        ))}
      </div>

      {/* Projects */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((pro, ind) => (
            <motion.div
              key={ind}
              className="w-full h-auto flex flex-col items-center justify-center overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: ind * 0.1 }}
            >
              {/* <ProjectCard props={pro} /> */}
              <div className="relative group w-full h-full overflow-hidden rounded-lg">
                <motion.img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex justify-between w-full mt-4">
                <div className="flex flex-col w-4/5 text-left justify-center">
                  {/* <p className="text-lg font-serif mb-2">{props.project_name}</p> */}
                  <p className="text-sm font-sans text-gray-500">
                    Decor / {pro.tag}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-xl">
            No projects available for this category.
          </p>
        )}
      </motion.div>
    </div>
  );
}
