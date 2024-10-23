// import project1 from "/assets/images/livingroom1.png";
// import other project images as needed...
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import projects from "../projects.json";

export function Project() {
  const [selectedGallery, setSelectedGallery] = useState("livingRoom");

  const handleGalleryChange = (category) => {
    setSelectedGallery(category);
  };

  // Filter projects based on the selected category
  const filteredProjects = projects.projects.filter(
    (project) => project.category === selectedGallery
  );

  return (
    <div className="w-full ">
      {/* Header */}
      <header className="">
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src="/public/assets/images/livingroom1.png" // Replace with your background image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
                Our Projects
              </h1>
              <p className="text-xl mb-6 italic font-cormorant text-white">
                Our Real Interior Design Makeovers
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="flex justify-center space-x-6 py-10 ">
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

      {/* Projects */}
      <div className="w-3/4 mx-auto flex flex-wrap justify-between ">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((pro, ind) => (
            <ProjectCard props={pro} key={ind} />
          ))
        ) : (
          <p className="text-center w-full">
            No projects available for this category.
          </p>
        )}
      </div>
    </div>
  );
}
