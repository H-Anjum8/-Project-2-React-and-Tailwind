import React from "react";
import Image from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <>
      <div className="my-[150px]">
        <div className=" container grid grid-cols-1 md:grid-cols-2 relative md:items-left text-center justify-center ">
          {/* where to buy content  */}
          <div
            className="mb-10 flex flex-col gap-3 space-y-3  md:max-w-[350px] "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className=" font-bold text-4xl text-left leading-snug text-gray-500">
              Where to buy our products?
            </h1>
            <div className=" grid grid-cols-2 gap-2 text-center">
              <input
                type="text"
                placeholder="Country"
                className="p-4   rounded-2xl border-2 border-slate-500"
              />
              <input
                type="number"
                placeholder="ZipCode"
                className="p-4   rounded-2xl border-2 border-slate-500"
              />
            </div>
            <button className=" bg-[#F39C0B] text-white rounded-xl py-4">
              Search
            </button>
          </div>
          {/* image  */}
          <div>
            <img
              src={Image}
              alt="/"
      
              className="w-[400px] absolute md:first-line:left-[450px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
