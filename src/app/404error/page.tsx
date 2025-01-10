import React from "react";
import Heroimg from "@/components/home/heroimg";

const Error = () => {
  return (
    <div className="w-full md:max-w-[1920px] mb-16">
      <Heroimg title="404 Error" subtitle="404" />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="font-bold text-[#ff9f0d] text-6xl md:text-[96px] md:leading-[104px]">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mt-8">
          Oops! Looks like something went wrong
        </h2>
        <p className="text-base md:text-lg leading-7 max-w-lg mt-8">
          Page cannot be found! We’ll have it figured out in no time. Meanwhile,
          check out these fresh ideas:
        </p>
        <button className="rounded-md bg-[#ff9f0d] text-white w-[160px] md:w-[197px] h-[50px] md:h-[58px] mt-8">
          Go to home
        </button>
      </div>
    </div>
  );
};

export default Error;
