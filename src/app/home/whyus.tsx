import React from "react";
import { Great_Vibes } from "next/font/google";
import { PiHamburgerLight } from "react-icons/pi";
import { GiShatteredGlass } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import Image from "next/image";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Whyus = () => {
  return (
    <div className="bg-black text-white lg:h-[1000px] min-h-screen flex items-center justify-center px-6 lg:px-1 ">
      <div className="px-4 lg:px-8 max-w-screen-xl flex flex-col lg:flex-row-reverse lg:justify-between gap-12 lg:gap-16  ">
        {/* right content */}
        <div className="lg:w-1/2 space-y-6 lg:ml-20">
          <h2
            className={`${greatVibes.className} text-2xl text-[#FF9F0D] font-bold`}
          >
            Why Choose Us
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-[#FF9F0D]">Ex</span>tra ordinary Taste and
            Experience
          </h1>

          <p className="text-base pt-4 leading-7 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex items-center lg:gap-8 gap-6">
            <div className="bg-[#FF9F0D] lg:w-[102px] lg:h-[102px] w-[92px] h-[92px] flex items-center justify-center rounded-sm">
              <PiHamburgerLight className="w-[56px] h-[56px]" />
            </div>
            <div className="bg-[#FF9F0D] lg:w-[102px] lg:h-[102px] w-[92px] h-[92px] flex items-center justify-center rounded-sm">
              <GiFullPizza className="w-[56px] h-[56px]" />
            </div>{" "}
            <div className="bg-[#FF9F0D] lg:w-[102px] lg:h-[102px] w-[92px] h-[92px] flex items-center justify-center rounded-sm">
              <GiShatteredGlass className="w-[56px] h-[56px]" />
            </div>
          </div>
          <div className="flex items-center lg:gap-20 gap-14 ">
            <p className="ml-2">Fast Food</p>
            <p className="ml-1">Lunch</p>
            <p className="ml-2">Dinner</p>
          </div>
          <div className="lg:w-[374px] lg:h-[93px] w-auto bg-white rounded-sm flex">
            <div className="w-[10px] h-[93px] bg-[#FF9F0D] rounded-sm"></div>

            <div className="flex items-center justify-center w-full ">
              <div className="text-center">
                <h1 className="font-extrabold text-[#FF9F0D] text-2xl">30+</h1>
                <h2 className="font-bold text-black text-2xl">
                  <span className="font-light text-2xl">Years of </span>
                  Experience
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* left content (image) */}
        <div className="lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 gap-4 relative pb-14">
          {/* First row */}
          <div className="col-span-2 ">
            <Image
              src="/images/chooseus1.jpg"
              alt="Image 1"
              width={362}
              height={356}
              className="w-[362px] h-[356px] object-cover rounded-lg"
            />
          </div>
          <div className="pt-32">
            <Image
              src="/images/chooseus2.jpg"
              alt="Image 2"
              width={281}
              height={231}
              className="w-[281px] h-[231px] object-cover rounded-lg"
            />
          </div>

          <div>
            <Image
              src="/images/chooseus3.jpg"
              alt="Image 3"
              width={244}
              height={260}
              className="w-[244px] h-[260px] object-cover rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/images/chooseus4.jpg"
              alt="Image 4"
              width={221}
              height={226}
              className="w-[221px] h-[226px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-full max-w-[168px] max-h-[168px]">
            <Image
              src="/images/chooseus5.jpg"
              alt="Image 5"
              width={168}
              height={168}
              className="w-[168px] h-[168px] object-cover rounded-lg"
            />
          </div>

          <div className="relative lg:absolute lg:top-[560px] lg:left-[368px] w-[168px] h-[168px] mx-auto">
            <Image
              src="/images/chooseus6.jpg"
              alt="Image 6"
              width={168}
              height={168}
              className="w-[168px] h-[168px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
