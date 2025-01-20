import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  imageUrl: string;
  name: string;
  price: number;
}

const Ourshop = async () => {
  const query = `*[_type=="food"]{
  _id,
  "imageUrl":image.asset->url,
  name,
  price}`;

  const data = await client.fetch(query);

  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-2">
            <Link href="/">Home</Link> ›
            <span className="text-yellow-400"> Shop</span>
          </p>
        </div>
      </section>
      <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8  mx-auto px-4">
        <div className="md:w-[984px] px-4 w-full">
          <div className="flex flex-col md:flex-row gap-3  w-[317]px">
            <div className="flex w-[332px] ">
              <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
                Sort By
              </label>
              <select className="opacity-30 rounded border border-gray-400 w-[236px] text-[18px] h-12">
                <option value="Newest">Newest</option>
              </select>
            </div>

            <div className="flex md:w-[236px] gap-2">
              <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
                Show
              </label>
              <select className="opacity-30 rounded border border-gray-400 md:w-[236px] text-[18px] h-12">
                <option value="Default">Default</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {data.map((item: Product) => (
              <div
                key={item._id}
                className="shadow-md p-4 w-full m-4 rounded-lg"
              >
                <Link href={`./products/${item._id}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={312}
                    height={267}
                    className="object-cover w-full h-[180px]"
                  />
                </Link>
                <h2 className="text-xl font-bold p-2 ">{item.name}</h2>
                <p className="text-gray-600 pl-2">$ {item.price}.00</p>
                <Link href={`/productinfo/${item._id}`}>
                  <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Show Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="w-[312px] md:h-[418px]">
          <div className="flex w-[248px] h-[46px] mt-[72px] text-center ">
            <input
              type="text"
              placeholder="Search Product"
              className="w-[202px] bg-[#ebe2d5] pl-4 text-gray-400"
            />
            <CiSearch
              size={20}
              className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px]"
            />
          </div>
          <ul className="space-y-2">
            <h2 className="font-helvetica text-[20px] font-bold mt-2">
              Category
            </h2>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Sandwitch
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Burger
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Chicken Chup
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Drink
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Pizza
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Thi
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Non Veg
            </li>
            <li>
              <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
              Uncategorized
            </li>
          </ul>
          <div className="bg-[url(/images/shopimg1.jpg)] p-4 mt-4 bg-cover w-[248px] h-[286px] ">
            <p className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">
              {" "}
              Perfect Taste
            </p>
            <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">
              Classic Restaurant
            </h2>
            <p className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]">
              $45.00
            </p>
            <p className="flex gap-2 w-full h-[24px] mt-32">
              <button className="font-inter text-[16px]  text-[#FFFFFF]">
                Shop Now
              </button>
              <IoArrowForwardCircleOutline
                size={20}
                className="text-[#FFFFFF] mt-1"
              />
              <button />
            </p>
          </div>
          <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
            Filter By Price
          </h2>
          <div className="w-[248px] h-[11px] rounded-[4px] bg-[#ff9f0d] mb-2"></div>
          <p className="font-inter text-[14px] w-[105px] text-[#333333] mb-2">
            {" "}
            Perfect Taste
          </p>
          <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
            Latest Products
          </h2>
          <div className=" w-[252px] mb-2 space-y-2">
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image
                  src="/images/latestprodimg.jpg"
                  alt="Fresh Breakfast"
                  width={100}
                  height={100}
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">
                  Fresh Breakfast
                </h3>
                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <CiStar size={10} />
                  <CiStar size={10} />
                  <CiStar size={10} />
                </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image
                  src="/images/latestprodimg.jpg"
                  alt="Fresh Breakfast"
                  width={100}
                  height={100}
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">
                  Fresh Breakfast
                </h3>
                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <CiStar size={10} />
                  <CiStar size={10} />
                  <CiStar size={10} />
                </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image
                  src="/images/latestprodimg.jpg"
                  alt="Fresh Breakfast"
                  width={100}
                  height={100}
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">
                  Fresh Breakfast
                </h3>
                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <CiStar size={10} />
                  <CiStar size={10} />
                  <CiStar size={10} />
                </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="object-cover w-[72px] h-16 relative">
                <Image
                  src="/images/latestprodimg.jpg"
                  alt="Fresh Breakfast"
                  width={100}
                  height={100}
                  className=" w-[72px] h-[65px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] ">
                  Fresh Breakfast
                </h3>
                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <FaStar size={10} className="text-[#FF9F0D] " />
                  <CiStar size={10} />
                  <CiStar size={10} />
                  <CiStar size={10} />
                </div>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
            <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
              Product Tags
            </h2>
            <div className="w-[225px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline  text-[#333333] cursor-pointer">
                Services
              </p>
              <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333] cursor-pointer">
                Our Menu
              </p>
            </div>
            <div className="w-[225px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333]cursor-pointer">
                Cupcake
              </p>
              <p className="font-inter font-bold text-[16px] hover:underline hover:text-[#333333] text-[#FF9F0D] cursor-pointer">
                Burger
              </p>
              <p className="font-inter font-bold text-[16px]   hover:text-[#FF9F0D] hover:underlinetext-[#333333] cursor-pointer">
                Cookies
              </p>
            </div>
            <div className="w-[225px] h-[24px] gap-2 flex">
              <p className="font-inter font-bold text-[16px]  hover:text-[#FF9F0D] hover:underline text-[#333333] cursor-pointer">
                Our Shop
              </p>
              <p className="font-inter font-bold text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333] cursor-pointer">
                Tandoori Chicken
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourshop;
