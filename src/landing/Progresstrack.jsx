import { progressTrackData } from "../landing_data";

function ProgressTrack() {
  return (
    <>
      <div className="p-32">
        <h2 className="text-7xl font-black text-[#590E87] pb-3">
          Progress Tracking
        </h2>

        <p className="text-2xl font-normal text-black w-[70%] pb-12">
          Allows parents and teachers to track children's progress and
          performance in the app, providing insights into their learning
          journey.
        </p>

        <div className="flex justify-center w-[70%] gap-4 mx-auto">
          {progressTrackData.map((data) => (
            <div
              key={data.heading}
              className="flex flex-col w-[29%] md:w-full gap-6 p-5 bg-yellow-100 rounded-[20px]"
            >
              <div className="flex flex-col mb-5 gap-2.5">
                <img
                  className="object-cover object-center"
                  src={data.image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="!text-gray-600 font-semibold tracking-[-1.12px]">
                  {data.heading}
                </h3>
                <p className="tracking-[-0.80px]">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProgressTrack;
