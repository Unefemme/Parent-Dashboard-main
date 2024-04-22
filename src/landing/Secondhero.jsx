import React from "react";

const SecondHero = () => {
  return (
    <div className="flex flex-wrap justify-between items-center h-[583px] bg-[#FDFDC5] p-32 gap-48 custom-hero">
      {/* Content */}
      <div className="flex flex-col justify-center h-full w-full md:w-1/2">
        <h1 className="font-black text-[#590E87] text-7xl mb-8">
          Connect with Us
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#590E87] flex items-center justify-center">
              <span className="text-white">@</span>
            </div>
            <p className="text-black font-semibold">educationalapp</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#590E87] flex items-center justify-center">
              <span className="text-white">+</span>
            </div>
            <p className="text-black font-semibold">1 123-456-7890</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#590E87] flex items-center justify-center">
              <span className="text-white">info</span>
            </div>
            <p className="text-black font-semibold">info@educationalapp.com</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center justify-center w-48 h-16 bg-[#590E87] text-white rounded">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Photo */}
      <div className="hidden md:block md:w-1/2">
        {/* Insert your image here */}
      </div>
    </div>
  );
};

export default SecondHero;
