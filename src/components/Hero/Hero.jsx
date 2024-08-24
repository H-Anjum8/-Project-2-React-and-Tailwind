import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import img from "../../assets/orangebg.png";

const Hero = () => {
  const menuItem = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Where to Find",
      link: "#",
    },
    {
      id: 3,
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen md:px-4 md:py-10 bg-[#D65609] relative py-0 px-0">
        <div className="bg-[#EA7902] min-h-screen w-full max-w-[1200px] mx-auto text-white relative md:rounded-3xl overflow-hidden">
          {/* nav bar----------------------- */}
          <nav className="py-4 flex justify-between px-10 ">
            <h1 className=" text-5xl font-bold">
              ORANGE <span className="text-xl">MINT</span>
            </h1>
            <div>
              <ul className="md:flex hidden gap-3 px-3 z-10">
                {menuItem.map((data) => (
                  <li key={data.id} className="p-2 text-xl font-bold">
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <CiMenuBurger className="font-bold text-white absolute" />
            </div>
          </nav>
          {/* Hero section------------------ */}
          <div className="container pt-[120px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* content of hero */}

              <div className="flex flex-col gap-2 space-y-3 md:max-w-[300px] relative z-20 items-center md:items-start">
                <h1 className=" font-bold text-6xl text-center md:text-left">
                  A HEALTHY FRUIT
                </h1>
                <p className="text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum excepturi molestiae rerum numquam hic.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="bg-transparent border-2 border-bg-white  py-2 rounded-xl w-[120px] "
                >
                  SHOP NOW
                </button>
              </div>
              {/* imge of hero  */}
              <div className=" px-5">
                <img
                  src={img}
                  alt="/"
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="img-shadow md:absolute md:left-[400px] w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-center ">
            <h1 className=" font-extrabold lg:text-[200px] md:text-[130px] sm:text-[80px] text-[60px] w-full  z-30">
              ORANGE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
