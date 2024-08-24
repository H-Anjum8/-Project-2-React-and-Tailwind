import React from "react";
import img1 from "../../assets/fruits/fruits1.png";
import img2 from "../../assets/fruits/fruits2.png";
import img3 from "../../assets/fruits/fruits3.png";
const Services = () => {
  const services = [
    {
      id: 1,
      img: img1,
      name: "Fresh Fruites",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: img2,
      name: "Fresh Juice",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: img3,
      name: "Orange Juice",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="bg-white py-10 ">
        {/* services contetn  */}
        <div
          className="text-center flex flex-col items-center  space-y-3 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h1 className="font-bold text-3xl ">
            Fresh and <span className="text-[#EA7902]">Tasty Fruits</span>
          </h1>
          <p className="max-w-[400px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
            dolorem fuga.
          </p>
        </div>
        {/* services images  */}
        <div className="container grid grid-cols-1 space-y-4 md:grid-cols-3 gap-6 ">
          {services.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="px-2 flex flex-col justify-center items-center text-center"
            >
              <div className="">
                <img src={data.img} alt="/" className="img-shadow2 w-[250px]" />
              </div>
              <div className="text-[#EA7902] text-3xl font-bold">
                {data.name}
              </div>
              <div>{data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
