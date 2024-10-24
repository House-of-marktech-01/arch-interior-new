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
import livingroom1 from "/assets/images/livingroom1.png";
import livingroom2 from "/assets/images/livingroom2.png";
import livingroom3 from "/assets/images/livingroom3.png";
import { MdKitchen } from "react-icons/md";

// Services data
const services = [
  {
    title: "Architectural Services",
    description: "Crafting innovative structures that prioritize both aesthetics and functionality.",
    icon: <Building2 className="h-6 w-6" />,
    image: livingroom1,
  },
  {
    title: "Interior Design",
    description: "Designing personalized interiors that elevate your living or working space.",
    icon: <PenTool className="h-6 w-6" />,
    image: livingroom2,
  },
  {
    title: "Modular Kitchen",
    description: "Design and install modern, efficient kitchens tailored to your lifestyle.",
    icon: <MdKitchen className="h-6 w-6" />,
    image: livingroom3,
  },
  {
    title: "Pre-Fabrication",
    description: "Expertly constructing pre-fabricated structures with precision and care.",
    icon: <Home className="h-6 w-6" />,
    image: livingroom2,
  },
  {
    title: "Landscaping",
    description: "Transforming outdoor spaces into serene and functional environments.",
    icon: <Mountain className="h-6 w-6" />,
    image: livingroom3,
  },
  {
    title: "Commercial Design",
    description: "Creating efficient, functional, and visually appealing commercial spaces.",
    icon: <Users className="h-6 w-6" />,
    image: livingroom1,
  },
  {
    title: "Residential Work",
    description: "Designing and building beautiful, functional homes that suit your needs.",
    icon: <Hammer className="h-6 w-6" />,
    image: livingroom1,
  },
  {
    title: "Mandir",
    description: "Designing and building beautiful, functional homes that suit your needs.",
    icon: <Hammer className="h-6 w-6" />,
    image: livingroom1,
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
                        <div
                          className="ml-3 flex  text-primaryRed text-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                          
                        >
                          See More <ChevronRight  className="mt-1"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
