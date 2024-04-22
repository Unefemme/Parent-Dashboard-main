import React from "react";
import { FeedbackData } from "../landing_data";

function FeedbackList() {
  return (
    <div className="p-32">
      <h2 className="text-7xl font-black text-[#590E87] pb-3">
        What People Are Saying
      </h2>
      <p className="text-2xl font-normal text-black w-[70%] pb-12">
        We value your feedback and strive to provide the best experience for
        your child. Here are some testimonials from our users:
      </p>
      <div className="flex flex-wrap justify-center">
        {FeedbackData.map((feedback, index) => (
          <div
            key={index}
            className="rounded-lg bg-yellow-100 mb-8 mx-4"
            style={{ maxWidth: "calc(33.33% - 2rem)" }}
          >
            <div className="flex items-start p-2">
              <div className="">
                <img
                  src={feedback.image}
                  alt=""
                  className="w-12 h-12 rounded-full mr-4"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#590E87]">
                  {feedback.heading}
                </h3>
                <p className="text-lg tracking-[-0.80px]">{feedback.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;
