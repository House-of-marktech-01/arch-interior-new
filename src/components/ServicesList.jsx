import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import livingroom2 from "/assets/images/Residential Views/03.jpg";
import archi from "/assets/images/Commercial Work/10 (1).jpg";
import interior from "/assets/images/WC Design/07.jpg";
import residential from "/assets/images/Residential Views/WhatsApp Image 2020-04-09 at 15.23.23.jpeg";
import commercial from "/assets/images/Commercial Work/2.2.jpg";
import mandir from "/assets/images/Temple Design/final view 1.jpg";
import preFab from "/assets/images/preFab.jpg";
import corporate from "/assets/images/Corporate Work/cam 2.jpg";
import kitchen from "/assets/images/Modular Kitchen/KITCHEN 1.jpg";
import entrance from "/assets/images/Entrance Lobby/15.jpg";
import facade from "/assets/images/Facade/1 (6).jpeg";
import closet from "/assets/images/Walking Closet/12.jpg";
import cottage from "/assets/images/Cottage Work/16.1.jpg";

const services = [
  {
    title: "Residential Work",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: residential,
    category: "residentialWork",
  },
  {
    title: "WC Design",
    description:
      "Designing personalized interiors that elevate your living or working space.",
    image: interior,
    category: "wcDesign",
  },
  {
    title: "Modular Kitchen",
    description:
      "Design and install modern, efficient kitchens tailored to your lifestyle.",
    image: kitchen,
    category: "modularKitchen",
  },
  {
    title: "Commercial Design",
    description:
      "Creating efficient, functional, and visually appealing commercial spaces.",
    image: commercial,
    category: "commercialDesign",
  },
  {
    title: "Corporate work",
    description:
      "Transforming outdoor spaces into serene and functional environments.",
    image: corporate,
    category: "corporateWork",
  },
  {
    title: "Mandir",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: mandir,
    category: "mandir",
  },
  {
    title: "Cottage Work",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: cottage,
    category: "cottageWork",
  },
  {
    title: "Entrance Lobby",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: entrance,
    category: "entranceLobby",
  },
  {
    title: "Facade",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: facade,
    category: "facade",
  },
  {
    title: "Walkin Closet",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
    image: closet,
    category: "walkinCloset",
  },
  {
    title: "Architectural Services",
    description:
      "Crafting innovative structures that prioritize both aesthetics and functionality.",
    image: archi,
    category: "allArchitecturalService",
  },
  {
    title: "Pre-Fabrication",
    description:
      "Expertly constructing pre-fabricated structures with precision and care.",
    image: preFab,
    category: "preFabrication",
  },
];

export default function ServicesList() {
  return (
    <div className="min-h-screen  ">
      <header>
        <div className="relative flex items-center justify-center h-[50vh]">
          <motion.img
            src={livingroom2}
            alt="HD Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 bg-black bg-opacity-50 p-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold tracking-wide text-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl italic mt-4"
            >
              Discover a world of creative designs tailored just for you.
            </motion.p>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {services.map((service, index) => (
                <Link
                  to={`/portfolio?category=${service.category}`}
                  key={service.title}
                >
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative overflow-hidden shadow-lg group"
                  >
                    <div className="h-[70vh] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute object-cover h-full w-full -z-10 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="px-4 py-5 sm:p-6 z-10 absolute bottom-0">
                        <div className="flex flex-col items-start drop-shadow-2xl text-white">
                          <div className="flex-shrink-0 text-6xl font-ethereal rounded-md p-3 leading-none">
                            {index + 1}.
                          </div>
                          <h3 className="ml-3 text-5xl font-medium font-cormorant">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
