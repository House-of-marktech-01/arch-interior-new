import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profile from "/assets/images/livingroom2.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Velaskes",
      feedback:
        "This software is good – clean, easy to use and provides exceptional visual aid. I really like it!",
      title: "Good software",
      image: profile,
    },
    {
      name: "Helen Steinberg",
      feedback:
        "Great app for planning everything home-related. Easy enough and gives a great idea and feel for different designs and color schemes.",
      title: "It’s just amazing",
      image: profile,
    },
    {
      name: "John Doe",
      feedback:
        "User-friendly interface and great features. It has improved my productivity immensely!",
      title: "Highly recommend",
      image: profile,
    },
    {
      name: "Jane Smith",
      feedback:
        "Excellent app with robust features. It’s a must-have tool for interior design enthusiasts!",
      title: "Excellent tool",
      image: profile,
    },
    {
      name: "Mark Johnson",
      feedback:
        "Very intuitive and well-designed. The features are excellent, and I enjoy using it daily.",
      title: "Intuitive design",
      image: profile,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <div className="py-12 h-auto " ref={testimonialsRef}>
      <h2 className="text-4xl font-bold text-center mb-12 text-white font-cormorant">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 md:px-8">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-primaryBlack shadow-lg rounded-lg p-6 w-full transform transition duration-500 hover:shadow-2xl hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.95 }} // Initial state
            animate={isVisible ? { opacity: 1, scale: 1 } : {}} // Animate only when visible
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
          >
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-3xl font-semibold font-cormorant text-white">
                  {testimonial.title}
                </h3>
                <p className="text-gray-400">{testimonial.feedback}</p>
                <p className="text-sm text-gray-500 mt-4">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
