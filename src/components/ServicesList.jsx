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
import homehero from "/assets/images/homehero.png";

const services = [
  {
    title: "Architectural Services",
    description: "Innovative designs that blend form and function seamlessly.",
    icon: <Building2 className="h-6 w-6" />,
    image: livingroom1,
  },
  {
    title: "Interior Design",
    description: "Create spaces that inspire and reflect your unique style.",
    icon: <PenTool className="h-6 w-6" />,
    image: livingroom2,
  },
  {
    title: "Construction",
    description:
      "Bringing architectural visions to life with precision and care.",
    icon: <Hammer className="h-6 w-6" />,
    image: livingroom3,
  },
  {
    title: "Renovation",
    description:
      "Breathe new life into existing spaces with our expert renovations.",
    icon: <Home className="h-6 w-6" />,
    image: livingroom2,
  },
  {
    title: "Land Development",
    description:
      "Transforming landscapes into thriving communities and spaces.",
    icon: <Mountain className="h-6 w-6" />,
    image: livingroom3,
  },
  {
    title: "Consultancy",
    description:
      "Expert advice to guide your project from concept to completion.",
    icon: <Users className="h-6 w-6" />,
    image: livingroom1,
  },
];

export default function ServicesList() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="">
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
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className=" object-cover hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 rounded-md p-3 text-primaryRed">
                        {service.icon}
                      </div>
                      <h3 className="ml-3 text-2xl font-medium text-gray-900 font-cormorant">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                  {/* <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">
                        Learn more
                      </a>
                      <ChevronRight className="ml-1 h-5 w-5 text-primary" />
                    </div>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
