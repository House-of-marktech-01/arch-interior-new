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
      <div className="flex h-[70vh] font-serif bg-cover mb-10 object-cover bg-no-repeat bg-[url('/assets/images/livingroom2.png')] ">
        <h1 className="w-1/5 p-4  text-4xl rounded-t-lg mx-auto text-center text-[#292f36] self-end ">
          Our Projects
          {/* <p className="text-gray-500 text-sm font-sans">Home / Project</p> */}
        </h1>
      </div>

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
