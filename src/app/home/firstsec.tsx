import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Firstsec = () => {
  return (
    <div>
      {/* Hero Content */}
      <div className="bg-black text-[#FFFFFF]">
        <div className="px-4 sm:px-6 lg:px-8 py-7 mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="hidden lg:flex flex-col items-center space-y-4">
            <div className="h-[100px] w-[1px] bg-gray-400 rotate-0"></div>
            <FaFacebookF className="text-white text-[20px] hover:text-[#FF9F0D]" />
            <FaTwitter className="text-white text-[20px] hover:text-[#FF9F0D]" />
            <FaPinterestP className="text-white text-[20px] hover:text-[#FF9F0D]" />
            <div className="h-[100px] w-[1px] bg-gray-400 rotate-0"></div>
          </div>
          {/* Left Content */}
          <div className="max-w-md text-center lg:text-left lg:ml-8 space-y-6">
            <h2
              className={`text-[#FF9F0D] text-2xl font-bold ${greatVibes.className}`}
            >
              Its Quick & Amusing!
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />{" "}
              Food Quality
            </h1>
            <p className="text-[#FFFFFF] mt-4 pb-7">
              Blends fast service with exceptional taste, ensuring every dish is
              crafted with care and delivered with efficiency.
            </p>
            <Link
              href={"/about"}
              className="mt-6 px-6 py-2 bg-[#FF9F0D] text-[#FFFFFF] rounded-full font-semibold hover:bg-[#FF9F0D] transition"
            >
              See More
            </Link>
          </div>

          {/* Right Content (Hero Image Section) */}
          <div className="relative w-full lg:w-[50%] mt-8 lg:mt-0">
            {/* Main Dish Image */}

            <div className="relative z-10 mx-auto w-[70%] sm:w-[300px] md:w-[350px] lg:w-[625px] left-3">
              <Image
                src="/images/landingmain.png" // Use the relative path from public
                alt="Main Dish"
                width={633}
                height={633}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsec;
