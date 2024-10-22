import homehero from "../assets/images/homehero.png";

const HomeHero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <img
        src={homehero} // Replace with your background image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="relative z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-50 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
            Transform Your Space with Style
          </h1>
          <p className="text-xl mb-6 italic font-cormorant text-white">
            Discover a world of creative designs tailored just for you.
          </p>
          <button className="bg-[#ED3237] font-mono    text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-90">
            START MY TRANSFORMATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
