import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Secondsec = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 lg:px-12 ">
      <div className="px-4 lg:px-8 max-w-screen-xl flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2
            className={`${greatVibes.className} text-2xl text-[#FF9F0D] font-bold`}
          >
            About Us
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-[#FF9F0D]">We</span> Create the Best Foody
            Product
          </h1>

          <p className="text-base pt-4 leading-7 text-justify">
            At our company, we are passionate about creating exceptional food
            products that deliver a perfect balance of flavor, quality, and
            convenience. Our products are crafted using the finest ingredients,
            ensuring a memorable taste experience with every bite. We understand
            that food is not just about nourishment but about bringing joy and
            satisfaction to your daily life.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
                Premium Ingredients for Exceptional Flavor
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
                Innovative Recipes with Unique Flavor Combinations
              </p>
            </div>
            <div className="flex items-start gap-3 pb-8">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
                Convenient and Quick Meal Solutions
              </p>
            </div>
          </div>

          <button className=" px-8 py-3 space-y-6 bg-[#FF9F0D] text-white rounded-full font-semibold hover:bg-[#FF8C00] transition duration-300">
            Read More
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          {/* First Image */}
          <div className="w-full">
            <Image
              src="/images/landingp2.jpg"
              alt="restaurant1"
              width={600}
              height={400}
              className="w-full h-[180px] md:h-[280px] lg:h-[400px] object-cover rounded-md"
            />
          </div>

          {/* Second and Third Images */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Image
                src="/images/landingp3.jpg"
                alt="restaurant2"
                width={600}
                height={400}
                className="w-full h-[100px] md:h-[160px] lg:h-[200px] object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/landingp4.jpg"
                alt="restaurant3"
                width={600}
                height={400}
                className="w-full h-[100px] md:h-[160px] lg:h-[200px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsec;
