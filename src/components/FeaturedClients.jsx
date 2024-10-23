import logo1 from "/assets/images/hgtv-logo.png";
import logo2 from "/assets/images/the-wall-street-journal-logo.png";
import logo3 from "/assets/images/nyt-logo-379x64.png";

const FeaturedClients = () => {
  return (
    <div className="  text-center py-12 bg-slate-100 h-[50vh]">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Featured Clients
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-16">
        <img
          src={logo1}
          alt="HGTV"
          className="w-32 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
        <img
          src={logo2}
          alt="The Wall Street Journal"
          className="w-48 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
        <img
          src={logo3}
          alt="The New York Times"
          className="w-40 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
        <img
          src={logo1}
          alt="HGTV"
          className="w-32 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
        <img
          src={logo2}
          alt="The Wall Street Journal"
          className="w-48 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
       
      </div>
    </div>
  );
};

export default FeaturedClients;
