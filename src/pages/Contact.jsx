import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  // Popup state for submission errors
  const [popupErrors, setPopupErrors] = useState([]);
  const [formStatus, setFormStatus] = useState(""); // State to show submission status
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const contactRef = useRef(null); // Ref for the Contact section

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (value.length > 100) {
        error = "Name can be at most 100 characters.";
      } else if (!/^[A-Za-z\s]*$/.test(value)) {
        error = "Name can only contain letters and spaces.";
      }
    } else if (name === "email") {
      // Basic email validation regex
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "subject") {
      if (value.length > 200) {
        error = "Subject can be at most 200 characters.";
      }
    } else if (name === "phone") {
      if (value && !/^\d*$/.test(value)) {
        error = "Phone can only contain numbers.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate field immediately
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    // Update formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Revalidate fields before submission
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      phone: validateField("phone", formData.phone),
    };
    setErrors(newErrors);

    const errorMessages = Object.values(newErrors).filter((msg) => msg !== "");
    if (errorMessages.length > 0) {
      // Show error popup if there are any validation errors
      setPopupErrors(errorMessages);
      setFormStatus("Please fix the errors in the form before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://arch-interior-server.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
        setErrors({ name: "", email: "", subject: "", phone: "" });
      } else {
        setFormStatus("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("Error submitting the form. Please try again.");
    }
  };

  // Dismiss popup
  const closePopup = () => {
    setPopupErrors([]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
    <div
      className="relative flex h-screen overflow-hidden"
      ref={contactRef}
      style={{
        backgroundImage:
          "url('/assets/images/Residential Views/1651123338329_F2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Popup Modal for Errors */}
      {popupErrors.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-50 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Please fix the following errors:</h2>
            <ul className="list-disc list-inside mb-4">
              {popupErrors.map((error, index) => (
                <li key={index} className="text-red-500">{error}</li>
              ))}
            </ul>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-primaryRed text-white rounded hover:bg-gray-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Right Side (Form Section) */}
      <div className="relative w-full flex items-center justify-end bg-black bg-opacity-50">
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 px-6 sm:py-8 flex flex-col justify-center bg-black h-full bg-opacity-80"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl sm:mb-8 font-cormorant text-white text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
          >
            Get in touch
          </motion.h1>

          {/* Form */}
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                {errors.subject && (
                  <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                )}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
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
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                required
                className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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

          {/* Submission status */}
          {formStatus && (
            <p className="mt-4 text-center text-primaryRed">{formStatus}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
