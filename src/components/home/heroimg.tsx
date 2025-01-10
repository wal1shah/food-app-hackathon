import { url } from "inspector";
import React from "react";
interface propsType {
  title: string;
  subtitle: string;
}

const Heroimg: React.FC<propsType> = ({ title, subtitle }: propsType) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-[320px] sm:h-[200px] lg:h-[320px] lg:max-w-[1920px]"
      style={{ backgroundImage: "url('/images/heroimages/headerimg.jpeg')" }}
    >
      <div className="pt-[100px]">
        <h1 className="font-bold sm:text-[24px] lg:text-[48px] text-white text-center">
          {title}
        </h1>
      </div>
      <div className="flex items-center sm:flex-row justify-center gap-2 text-white w-full">
        <span className="text-white">Home</span>&gt;
        <span className="text-[#FF9F0D]">{subtitle}</span>
      </div>
    </div>
  );
};

export default Heroimg;
