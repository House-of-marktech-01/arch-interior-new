import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profile from "/assets/images/livingroom2.png";

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
            <div className="space-x-4 mb-6">
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full shadow-md"
              /> */}
              <div>
                <h3 className="text-3xl font-semibold font-cormorant text-primaryRed mb-4">
                  {testimonial.title}
                </h3>
                <p className="text-gray-400 italic">{testimonial.feedback}</p>
                <p className="text-sm text-primaryRed mt-4">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
