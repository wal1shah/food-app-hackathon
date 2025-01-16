import React from "react";
import { Great_Vibes } from "next/font/google";
import { Section } from "lucide-react";
import Image from "next/image";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Foodcat = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 lg:px-12 ">
      <div>
        <h2
          className={`${greatVibes.className} text-2xl text-[#FF9F0D] font-bold text-center`}
        >
          {" "}
          Food Category
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center pt-6 pb-10">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
          <Image
            src={"/images/category1.jpg"}
            alt={"foodcategory"}
            width={305}
            height={305}
            className="object-cover rounded-sm h-[305px]"
          />
          <Image
            src={"/images/category2.jpg"}
            alt={"foodcategory"}
            width={305}
            height={305}
            className="object-cover rounded-sm h-[305px]"
          />
          <Image
            src={"/images/category3.jpg"}
            alt={"foodcategory"}
            width={305}
            height={305}
            className="object-cover rounded-sm h-[305px]"
          />
          <Image
            src={"/images/category4.jpg"}
            alt={"foodcategory"}
            width={305}
            height={305}
            className="object-cover rounded-sm h-[305px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Foodcat;
