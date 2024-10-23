import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const contactRef = useRef(null); // Ref for the Contact section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6" ref={contactRef}>
      <motion.h1
        className="text-5xl mb-8 font-cormorant"
        initial={{ opacity: 0, y: -20 }} // Initial animation settings
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        Get in touch
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="md:w-1/3 bg-secondaryBlack p-8 rounded-lg flex flex-col justify-evenly space-y-6 md:space-y-0"
          initial={{ opacity: 0, x: -50 }} // Initial animation settings
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on visibility
          transition={{ duration: 0.5 }} // Animation duration
        >
          <div className="flex items-center space-x-3">
            <Mail className="text-primaryRed" />
            <span>info@yourdomain.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-primaryRed" />
            <span>+1 (378) 400-1234</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="text-primaryRed" />
            <span>www.yourdomain.com</span>
          </div>
          <div className="mt-8 flex space-x-10">
            <a
              href="#"
              className="text-primaryRed hover:text-white transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-primaryRed hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-primaryRed hover:text-white transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-primaryRed hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: 50 }} // Initial animation settings
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate based on visibility
          transition={{ duration: 0.5 }} // Animation duration
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 bg-secondaryBlack border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-3 py-2 bg-secondaryBlack border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hello, I am interested in.."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-primaryRed text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
              >
                Send Now
                <ArrowRight className="inline-block ml-2" size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
