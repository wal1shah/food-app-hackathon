import Heroimg from "@/components/home/heroimg";
import Image from "next/image";
import React from "react";

interface Chef {
  name: string;
  title: string;
  id: number;
  img: string;
}
const Chefs = () => {
  const chefData: Chef[] = [
    {
      name: "Tahmina Rumi",
      title: "chef",
      id: 1,
      img: "/images/chefs/chef1.jpg",
    },
    {
      name: "Jorina Begum",
      title: "chef",
      id: 2,
      img: "/images/chefs/chef2.jpg",
    },
    {
      name: "M.Mohammad",
      title: "chef",
      id: 3,
      img: "/images/chefs/chef3.jpg",
    },
    {
      name: "Munna Kathy",
      title: "chef",
      id: 4,
      img: "/images/chefs/chef4.jpg",
    },
    {
      name: "Tahmina Rumi",
      title: "chef",
      id: 5,
      img: "/images/chefs/chef5.jpg",
    },
    {
      name: "Jorina Begum",
      title: "chef",
      id: 6,
      img: "/images/chefs/chef6.jpg",
    },
    {
      name: "M.Mohammad",
      title: "chef",
      id: 7,
      img: "/images/chefs/chef7.jpg",
    },
    {
      name: "Munna Kathy",
      title: "chef",
      id: 8,
      img: "/images/chefs/chef8.jpg",
    },
    {
      name: "Tahmina Rumi",
      title: "chef",
      id: 9,
      img: "/images/chefs/chef9.jpg",
    },
    {
      name: "Jorina Begum",
      title: "chef",
      id: 10,
      img: "/images/chefs/chef10.jpg",
    },
    {
      name: "M.Mohammad",
      title: "chef",
      id: 11,
      img: "/images/chefs/chef11.jpg",
    },
    {
      name: "Munna Kathy",
      title: "chef",
      id: 12,
      img: "/images/chefs/chef12.jpg",
    },
  ];
  return (
    <div className="md:max-w-[1920px] w-full mx-auto">
      <Heroimg title="Our Chefs" subtitle="Chefs" />
      <div className="max-w-[1320px] px-8 mx-auto">
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center my-12">
          {chefData.map((items, index) => (
            <div
              key={index}
              className="w-full max-w-[312px] mx-auto p-4 bg-white rounded-lg shadow-lg"
            >
              <Image
                src={items.img}
                alt={items.title}
                width={312}
                height={380}
                className="w-full object-center"
              />
              <h2 className="text-center font-bold text-[20px] ">
                {" "}
                {items.name}
              </h2>
              <p className="text-center text-gray-600 text-[14px] ">
                {items.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
