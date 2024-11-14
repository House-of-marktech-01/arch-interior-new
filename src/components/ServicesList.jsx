import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  PenTool,
  Building2,
  Hammer,
  Mountain,
  Users,
} from "lucide-react";

import livingroom2 from "/assets/images/Residential Views/03.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\03.jpg"


import archi from "/assets/images/Commercial Work/10 (1).jpg";//"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Commercial Work\10 (1).jpg"
import interior from "/assets/images/WC Design/07.jpg";//"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\14.jpg"
import landscape from "/assets/images/Commercial Work/1_Exterior - Sunset.jpg";//"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Commercial Work\1_Exterior - Sunset.jpg"
import residential from "/assets/images/Residential Views/WhatsApp Image 2020-04-09 at 15.23.23.jpeg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Residential Views\WhatsApp Image 2020-04-09 at 15.23.23.jpeg"
import commercial from "/assets/images/Commercial Work/2.2.jpg" //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Commercial Work\2.2.jpg"
import mandir from '/assets/images/Temple Design/final view 1.jpg' //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Temple Design\final view 1.jpg"
import preFab from '/assets/images/preFab.jpg'
import corporate from "/assets/images/Corporate Work/cam 2.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Corporate Work\cam 2.jpg"
import kitchen from "/assets/images/Modular Kitchen/KITCHEN 1.jpg"; //"C:\Users\shrut\Desktop\Working On\arch-interior\public\assets\images\Moduler Kitchen\KITCHEN 1.jpg"
import entrance from "/assets/images/Entrance Lobby/15.jpg"
import facade from "/assets/images/Facade/1 (6).jpeg"
import closet from "/assets/images/Walking Closet/12.jpg"
import cottage from "/assets/images/Cottage Work/16.1.jpg"
import { MdKitchen } from "react-icons/md";
import { Link } from "react-router-dom";

// Services data
const services = [
  {
    title: "Residential Work",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
  
    image: residential,
    category: "residentialWork"
  },
  {
    title: "WC Design",
    description:
      "Designing personalized interiors that elevate your living or working space.",

    image: interior,
    category: "wcDesign"
  },
  {
    title: "Modular Kitchen",
    description:
      "Design and install modern, efficient kitchens tailored to your lifestyle.",

    image: kitchen,
    category: "modularKitchen"
  },
  {
    title: "Commercial Design",
    description:
      "Creating efficient, functional, and visually appealing commercial spaces.",
  
    image: commercial,
    category: "commercialDesign"
  },
  {
    title: "Corporate work",
    description: "Transforming outdoor spaces into serene and functional environments.",
  
    image: corporate,
    category: "corporateWork"
  },
  {
    title: "Mandir",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
 
    image: mandir,
    category: "mandir"
  },
  {
    title: "Cottage Work",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
 
    image: cottage,
    category: "cottageWork"
  },
  {
    title: "Entrance Lobby",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
 
    image: entrance,
    category: "entranceLobby"
  },
  {
    title: "Facade",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
 
    image: facade,
    category: "facade"
  },
  {
    title: "Walkin Closet",
    description:
      "Designing and building beautiful, functional homes that suit your needs.",
 
    image: closet,
    category: "walkinCloset"
  },
  {
    title: "Architectural Services",
    description: "Crafting innovative structures that prioritize both aesthetics and functionality.",
    image: archi,
    category: "allArchitecturalService"
  },
  {
    title: "Pre-Fabrication",
    description: "Expertly constructing pre-fabricated structures with precision and care.",

    image: preFab,
    category: "preFabrication"
  },
];


export default function ServicesList() {
  return (
    <div className="min-h-screen ">
      <header>
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src={livingroom2} // Replace with your background image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
                Our Services
              </h1>
              <p className="text-xl mb-6 italic font-cormorant text-white">
                Discover a world of creative designs tailored just for you.
              </p>
            </div>
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
                        layout="fill"
                        objectFit="cover"
                        className="absolute object-cover h-full w-full -z-10 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="px-4 py-5 sm:p-6 z-10 absolute bottom-0">
                        <div className="flex flex-col items-start">
                          <div className="flex-shrink-0 text-[16rem] font-ethereal rounded-md p-3 text-white leading-none">
                            {index + 1}.
                          </div>
                          <h3 className="ml-3 text-5xl font-medium font-cormorant text-white">
                            {service.title}
                          </h3>

                          {/* See More text with animation on hover */}
                          <div className="ml-3 flex  text-primaryRed text-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            See More <ChevronRight className="mt-1" />
                          </div>
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
