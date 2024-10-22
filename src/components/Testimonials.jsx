import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For navigation arrows
import profile from "../assets/images/livingroom2.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To control animations

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

  const totalTestimonials = testimonials.length;

  const goToNext = () => {
    // setIsAnimating(true); // Start animation
    setCurrentIndex((prevIndex) => (prevIndex + 2) % totalTestimonials);
  };

  const goToPrevious = () => {
    // setIsAnimating(true); // Start animation
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? totalTestimonials - 2
        : (prevIndex - 2 + totalTestimonials) % totalTestimonials
    );
  };

  // Get two testimonials at a time
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );

  // Use useEffect to reset the animation state after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300); // Match duration with CSS transition
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="bg-slate-200 py-12 h-[60vh]">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out z-10"
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        {/* Testimonials */}
        <div
          className={`flex space-x-6 w-full justify-center transition-transform duration-300 px-20 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h3 className="text-xl py-4 ">{testimonial.title}</h3>
                  <p className="text-gray-700">{testimonial.feedback}</p>
                  <p className="text-sm py-4 text-gray-500">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out z-10"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
