import { motion } from "framer-motion";
import livingroom from "/assets/images/Commercial Work/08.jpg";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WhoAreWe() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={livingroom}
            alt="Who Are We"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-primaryRed">Who Are We?</h2>
          <p className="text-lg text-gray-300">
            <span className="text-primaryRed font-semibold">
              "ARCH SPACE INTERIO"
            </span>
            is a leading multifaceted design firm specializing in architecture,
            interiors, furniture, lighting, and industrial pre-fabrication work.
          </p>
          <p className="text-lg text-gray-300">
            Design is usually considered as USP of a project, but it does not
            mean creating beautiful views; rather, it should create a "Sense of
            belonging/ act as part of whole" for the user and the cityscapes.
          </p>
          <p className="text-lg text-gray-300">
            ASI has a creative team of Landscape Planners, Architects,
            Draftsmen, and technical staff committed to designing urban spaces
            and landscape art. Our studio and team are well-versed in
            computer-aided design, ensuring high-quality results.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-primaryRed text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
          >
            <ArrowLeft size={24} className="mt-0.5" /> <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
