

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center ">
      <div className="flex items-center space-x-4">
        <a href="tel:+919999167989" className="hover:underline flex items-center gap-1 font-sans">
          📞 +91 9999167989
        </a>
      </div>
      <a
        href="tel:+919999167989"
        className="bg-[#ED3237] text-white px-3 py-1 rounded font-semibold hover:bg-white hover:text-black"
      >
        Schedule a Call
      </a>
    </div>
  );
};

export default TopBar;
