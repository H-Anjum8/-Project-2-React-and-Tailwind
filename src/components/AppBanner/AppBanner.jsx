import React from "react";
import img from "../../assets/website/banner.jpg";
import img1 from "../../assets/website/app_store.png";
import img2 from "../../assets/website/play_store.png";

const AppBanner = () => {
  return (
    <>
      <div className="container h-[700px] mt-32 py-6 relative ">
        <div
          className="absolute  index-20 text-black right-32 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="flex flex-col space-y-5 text-center items-center pt-[30px] justify-center  w-full ">
            <h1 className="text-2xl font-bold ">Download the app</h1>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam harum accusantium odit?
            </p>
            <div className="grid grid-cols-2 gap-2">
              <img src={img1} alt="" className="w-[150px]" />
              <img src={img2} alt="" className="w-[150px]" />
            </div>
          </div>
        </div>
        <img
          src={img}
          alt="/"
          className=" max-h-[300px] md:max-h-[300px]  w-full rounded-xl object-cover"
        />
      </div>
    </>
  );
};

export default AppBanner;
