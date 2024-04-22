import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-between items-center h-[calc(100vh - 296px - 64px)] bg-yellow-100">
      {/* Content */}
      <div className="w-full md:w-1/2 px-4 py-12">
        <h1 className="text-7xl font-black text-[#590E87] pb-3 mt-296">
          WELCOME TO
          <br />
          CHATTERCHUMS!
        </h1>
        <button className="bg-[#590E87] text-white px-6 py-2 rounded mt-64 mb-296 text-lg">
          Start Exploring
        </button>
      </div>

      {/* Photo */}
      <div className="w-full md:w-1/2 px-4 py-12">
        <img
          src="/amico (2).svg"
          alt="Illustration Active Part"
          className="mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Hero;
