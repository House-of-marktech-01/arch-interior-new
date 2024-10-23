import { motion } from "framer-motion";
import livingroom from "/assets/images/livingroom3.png";
import profile from "/assets/images/profile.webp";
import { Users, Target, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Principal Designer",
    image: profile,
  },
  {
    name: "John Smith",
    role: "Senior Architect",
    image: profile,
  },
  {
    name: "Emily Brown",
    role: "Project Manager",
    image: profile,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="">
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src={livingroom} // Replace with your background image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
                About Us
              </h1>
              <p className="text-xl mb-6 italic font-cormorant text-white">
                Meet the team that brings the aesthetics to your home.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-cormorant">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2005, our interior design firm has been transforming
            spaces and enriching lives for over 15 years. We believe in the
            power of design to inspire, comfort, and elevate the human
            experience.
          </p>
          <p className="text-lg text-gray-700">
            Our team of passionate designers and architects brings a wealth of
            experience and a keen eye for detail to every project. From
            residential interiors to commercial spaces, we approach each design
            challenge with creativity, innovation, and a deep understanding of
            our clients' needs.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8 font-cormorant">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 + 0.5 }}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8 font-cormorant">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f4f0ec] p-6 rounded-lg shadow">
              <Users className="h-12 w-12 text-primaryRed mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-700">
                We put our clients' needs and vision at the heart of every
                project.
              </p>
            </div>
            <div className="bg-[#f4f0ec] p-6 rounded-lg shadow">
              <Target className="h-12 w-12 text-primaryRed mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Attention to Detail
              </h3>
              <p className="text-gray-700">
                We believe that perfection lies in the details, and we strive
                for excellence in every aspect of our work.
              </p>
            </div>
            <div className="bg-[#f4f0ec] p-6 rounded-lg shadow">
              <Award className="h-12 w-12 text-primaryRed mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-700">
                We constantly push the boundaries of design, embracing new ideas
                and technologies.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-cormorant">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is to create inspiring, functional, and sustainable
            spaces that enhance the quality of life for our clients. We strive
            to blend aesthetics with practicality, tradition with innovation,
            and form with function in every project we undertake.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
