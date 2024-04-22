import { featuresData } from "../landing_data";

function Features() {
  return (
    <>
      <div className="p-32">
        <h2 className="text-7xl font-black text-[#590E87] pb-3">Features</h2>

        <p className="text-2xl font-normal text-black w-[70%] pb-12">
          Discover the amazing features that make our educational app the
          perfect tool for your child's learning journey.
        </p>

        <div className="flex flex-wrap justify-center">
          {featuresData.map((data, index) => (
            <div
              key={index}
              className="rounded-lg bg-yellow-100 mb-8 mx-4"
              style={{ maxWidth: "calc(33.33% - 2rem)" }}
            >
              <div className="flex items-start p-2">
                <div className="">{/* Add images here if needed */}</div>
                <div>
                  <h3 className="!text-gray-600 font-semibold tracking-[-1.12px]">
                    {data.title}
                  </h3>
                  <p className="text-lg tracking-[-0.80px]">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
