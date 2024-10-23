import homehero from "/assets/images/homehero.png";


const Schedule = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8  rounded-lg  h-[100vh]">
      {/* Image Section */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-8">
        <img
          src={homehero} // Update this with your image path
          alt="Interior Design"
          className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-cormorant font-bold mb-6 text-gray-900">
          Think you can't afford beautiful interior design? Think again.
        </h2>
        <button className="py-3 px-8 bg-[#ED3237] font-mono  text-white text-lg rounded-full shadow-lg hover:bg-[#000000] transition duration-300">
          SCHEDULE A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Schedule;
