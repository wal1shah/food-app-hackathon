import React from "react";
import Image from "next/image";

const ourDetails = [
  { src: "/images/ourdetails1.png", title: "Professional Chefs", value: "420" },
  { src: "/images/ourdetails2.png", title: "Items of Food", value: "320" },
  {
    src: "/images/ourdetails3.png",
    title: "Years of Experience",
    value: "30+",
  },
  { src: "/images/ourdetails4.png", title: "Happy Customers", value: "220" },
];

const Ourdetails = () => {
  return (
    <div className="relative text-gray-600  py-9 bg-black">
      {/* Background Overlay */}
      <div
        className="absolute inset-0  bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/ourdetailsbg.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-5 py-14 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-center -m-4 text-center">
          {ourDetails.map((ourDetails, index) => (
            <div
              key={index}
              className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={ourDetails.src}
                  alt={ourDetails.title}
                  width={96}
                  height={96}
                  priority
                />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-white">
                {ourDetails.title}
              </h2>
              <p className="leading-relaxed text-gray-300 text-[30px] font-bold">
                {ourDetails.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourdetails;
