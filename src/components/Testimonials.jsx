import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profile from "../../public/assets/images/profile.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "MLS Group & Associates",
      feedback:
        "Working with Arch Space Interio has been an exceptional experience. Their design solutions not only met our functional needs but also exceeded our aesthetic expectations. The team's attention to detail and commitment to delivering a seamless integration with the surrounding environment have made our project truly stand out. We look forward to collaborating on future ventures.",
      title: "Exceptional Design and Seamless Integration",
      image: profile,
    },
    {
      name: "Konnect Tech Solutions Enterprises",
      feedback:
        "Arch Space Interio brought a unique blend of innovation and professionalism to our project. They understood our requirements and implemented a design that is both modern and practical. Their team’s responsiveness and dedication throughout the process were invaluable in achieving our vision. We highly recommend their services for any organization seeking quality design work.",
      title: "Innovation and Professionalism Delivered",
      image: profile,
    },
    {
      name: "Urban Atelier",
      feedback:
        "Arch Space Interio transformed our ideas into a captivating space that perfectly reflects our brand’s identity. Their ability to balance creativity with practicality made the entire process smooth and enjoyable. The final outcome was beyond our expectations, and their expertise is evident in every detail of the design. A fantastic team to work with!",
      title: "Creative Vision Perfectly Executed",
      image: profile,
    },
    {
      name: "Shri Narsingh Mandir Trust",
      feedback:
        "We are deeply grateful to Arch Space Interio for their exceptional work on our project. They approached our requirements with respect and sensitivity, creating a space that is both functional and harmonious. Their design beautifully enhances the spiritual atmosphere we envisioned. The Arch Space Interio team’s professionalism and understanding were truly commendable.",
      title: "A Harmonious and Respectful Design Approach",
      image: profile,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
    <div className="py-16 bg-gray-900 text-white" ref={testimonialsRef}>
      <motion.h2
        className="text-5xl font-bold text-center mb-12 text-white font-cormorant"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-6 md:px-12 cursor-pointer">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-lg p-6 w-full shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primaryRed/40 to-transparent opacity-20 group-hover:opacity-60 transition-all duration-200"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full overflow-hidden border-4 border-primaryRed mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold text-primaryRed mb-3">
                {testimonial.title}
              </h3>
              <p className="text-gray-300 italic leading-relaxed">
                {testimonial.feedback}
              </p>
              <p className="text-sm text-primaryRed mt-4 font-bold">
                - {testimonial.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
