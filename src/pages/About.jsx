import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import livingroom from "/assets/images/Commercial Work/08.jpg";
import { Users, Target, Award } from "lucide-react";
const picture = "/assets/images/profile.jpg";

const teamMembers = [
  {
    name: "Yash Gupta",
    role: "Architect, Founder",
    image: picture,
  },
  {
    name: "Himanshu Dhiman",
    role: "Senior Designer",
    image: picture,
  },
  {
    name: "Nikita Singh",
    role: "3D Visualiser",
    image: picture,
  },
  {
    name: "Nitika Sachdeva",
    role: "3D Visualiser",
    image: picture,
  },
  {
    name: "Poonam Sharma",
    role: "Junior Designer",
    image: picture,
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 lg:px-12">
      <header className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full">
        <motion.img
          src={livingroom}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="relative z-10 bg-black bg-opacity-50 p-6 text-center">
          <motion.h1
            className="text-6xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl italic mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Meet the team that brings aesthetics to your home.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-6 lg:px-12 text-center">
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6">Who are we?</h2>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/who-are-we")}
              className="bg-primaryRed text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-3 hover:bg-red-700 transition-all duration-300"
            >
              Know More <ArrowRight size={24} />
            </button>
          </div>
        </motion.section>

        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-primaryRed"
                />
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-5xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-primaryRed mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Client-Centric Approach</h3>
              <p>
                We put our clients' needs and vision at the heart of every
                project.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-primaryRed mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Attention to Detail</h3>
              <p>
                We believe that perfection lies in the details, striving for
                excellence in every aspect.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-primaryRed mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p>
                We constantly push the boundaries of design, embracing new ideas
                and technologies.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
