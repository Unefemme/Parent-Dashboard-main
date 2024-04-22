// StepGuide.jsx
import React from "react";
import { stepData } from "../landing_data";

function StepGuide() {
  return (
    <>
      <div className="p-32 relative">
        <h2 className="text-7xl font-black text-[#590E87] pb-3">
          Reward System
        </h2>
        <p className="text-2xl font-normal text-black w-[70%] pb-12">
          Motivates children to continue learning by implementing a reward
          system, where they can earn badges or points for completing activities
          and achieving milestones.
        </p>

        <div className="flex gap-8 relative">
          {stepData.map((step, index) => (
            <div>
              <div className="flex items-center pb-2">
                <div className=" w-9 h-8 flex items-center justify-center rounded-full bg-[#590E87] text-white">
                  {index + 1}
                </div>
                <div className="h-0.5 w-full bg-[#590E87]"></div>
              </div>
              <div
                key={index}
                className="flex flex-col w-[29%] md:w-full gap-6 p-5 bg-yellow-100 rounded-[20px] relative"
              >
                <h3 className="!text-gray-600 font-semibold tracking-[-1.12px]">
                  {step.title}
                </h3>
                <p className="text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StepGuide;
