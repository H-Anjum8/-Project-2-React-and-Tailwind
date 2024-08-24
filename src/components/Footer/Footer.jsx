import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" bg-[#E97601] mt-[10px] py-[100px]">
        <div className=" container grid grid-cols-1 text-white md:grid-cols-3 gap-6 text-left">
          {/* anout content */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="flex flex-col gap-3 spacey-2"
          >
            <h1 className="font-bold text-5xl pb-6">Orange Mint</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores assumenda error nemo modi repudiandae?
            </p>
          </div>
          {/* links  */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h1 className="text-5xl font-bold pb-6">Quick Links</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col space-y-2">
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Home
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  About
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer ">
                  Contact
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Search Fruits
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Privacy Policy
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Home
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  About
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer ">
                  Contact
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Search Fruits
                </a>
                <a href="/" className="font-bold text-lg cursor-pointer">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* social links */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="flex flex-col space-y-2 font-bold"
          >
            <h1 className="text-5xl pb-6">Follow Us</h1>
            <p> +1 (123) 456-7890</p>
            <p>Noida, Uttar Pradesh</p>
            <div className="flex gap-3 text-3xl text-white ">
              <CiFacebook className="rounded-full w-10 h-10 border-2 border-white cursor-pointer " />
              <FaInstagram className="rounded-full w-10 h-10  border-2 border-white cursor-pointer" />
              <FaLinkedinIn className="rounded-full w-10 h-10  border-2 border-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
