import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import projects from "../projects.json";

export function Project() {
  const location = useLocation();
  const initialCategory = location.category || "allArchitecturalService";
  const [selectedGallery, setSelectedGallery] = useState(initialCategory);

  const handleGalleryChange = (category) => {
    setSelectedGallery(category);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    projects.projects.find((project) => project.category === selectedGallery)
      ?.items || [];

  useEffect(() => {
    // Update selectedGallery when the component loads or when the state changes
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setSelectedGallery(category);
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Header */}
      <header className="relative">
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src="/assets/images/WC Design/07.jpg" // Replace with your background image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
                Our Projects
              </h1>
              <p className="text-lg sm:text-xl italic font-cormorant text-white">
                Our Real Interior Design Makeovers
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4 rounded-lg">
        {[
          { label: "All Architectural Service", category: "allArchitecturalService" },
          { label: "WC Design", category: "wcDesign" },
          { label: "Modular Kitchen", category: "modularKitchen" },
          { label: "Commercial Design", category: "commercialDesign" },
          { label: "Residential Work", category: "residentialWork" },
          { label: "Mandir", category: "mandir" },
          { label: "Corporate Work", category: "corporateWork" },
          { label: "Pre-Fabrication", category: "preFabrication" },
          { label: "Facade", category: "facade" },
          { label: "Cottage Work", category: "cottageWork" },
          { label: "Walkin Closet", category: "walkinCloset" },
          { label: "Entrance Lobby", category: "entranceLobby" },
        ].map((item) => (
          <button
            key={item.category}
            onClick={() => handleGalleryChange(item.category)}
            className={`px-4 py-2 rounded-full font-cormorant text-sm lg:text-xl transition duration-300 ease-in-out ${
              selectedGallery === item.category
                ? "text-red-500 underline font-extrabold" // Apply red color and underline when selected
                : "text-gray-200 hover:underline hover:text-white" // Hover effect for non-selected
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="w-11/12 lg:w-3/4 mx-auto flex flex-wrap justify-center gap-6 my-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((pro, ind) => (
            <ProjectCard props={pro} key={ind} />
          ))
        ) : (
          <p className="text-center w-full text-gray-700">
            No projects available for this category.
          </p>
        )}
      </div>
    </div>
  );
}
