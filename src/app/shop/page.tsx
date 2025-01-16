"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShareAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import Heroimg from "@/app/components/Common/heroimg";

interface Product {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: string; // Make sure price is a string for formatting
}

interface MealApiResponse {
  meals: Product[];
}

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchProducts = (query: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data: MealApiResponse) => {
        if (data.meals) {
          const productsWithPrice = data.meals.map((product) => ({
            ...product,
            price: "$19.99", // Default price for now
          }));
          setProducts(productsWithPrice);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  };

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement)["search"].value.trim();
    setSearchTerm(query);
  };

  return (
    <div>
      <Heroimg title="Our Shop" subtitle="Shop" />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-20 px-6 lg:px-12">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            {/* Product Section */}
            <div className="w-full lg:w-3/4">
              {/* Search Field */}
              <form onSubmit={handleSearch} className="flex w-full mb-20">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Product..."
                  className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded-l-md focus:outline-none focus:ring-0 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] text-gray-700"
                />
                <button
                  type="submit"
                  className="bg-[#FF9F0D] px-4 rounded-r-md text-white flex items-center justify-center"
                >
                  <FaSearch />
                </button>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.idMeal}
                      className="bg-white rounded-md shadow-md overflow-hidden group relative"
                    >
                      <Image
                        src={product.strMealThumb}
                        alt={product.strMeal}
                        className="w-full h-50 object-cover"
                        width={300}
                        height={300}
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href="#"
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaShareAlt />
                        </Link>
                        <Link
                          href={`/shop/${product.idMeal}`}
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaShoppingCart />
                        </Link>
                        <Link
                          href="#"
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaHeart />
                        </Link>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold">
                          {product.strMeal}
                        </h4>
                        <p className="text-sm text-[#FF9F0D]">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center">
                    <p className="text-xl text-gray-700">No products found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 p-4 border-l-2 my-6 py-6">
              {/* Author Card */}
              <div className="bg-white rounded-md shadow-md p-4 mb-6 space-y-5 ">
                <h1 className="text-left font-bold text-3xl">Category</h1>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Sandwiches">Sandwiches</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Burgers">Burgers</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Chicken Soup">Chicken Soup</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Drinks">Drinks</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Pizza">Pizza</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Thai">Thai</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Non Veg">Non Veg</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <label htmlFor="Uncategorized">Uncategorized</label>
                </div>
                <div className="space-y-4">
                  <h1 className="text-left font-bold text-3xl">
                    Latest Products
                  </h1>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/latestprodimg.jpg"}
                      alt="latestpordimg"
                      width={65}
                      height={65}
                      className="object-cover w-[65px] h-[65px]"
                    />
                    <h2 className="space-y-2">
                      Pizza
                      <img src="/images/star.png" alt="star" className="pt-1" />
                      <p>$35.00</p>
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/latestprodimg.jpg"}
                      alt="latestpordimg"
                      width={65}
                      height={65}
                      className="object-cover w-[65px] h-[65px]"
                    />
                    <h2 className="space-y-2">
                      Cupcake
                      <img src="/images/star.png" alt="star" className="pt-1" />
                      <p>$35.00</p>
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/latestprodimg.jpg"}
                      alt="latestpordimg"
                      width={65}
                      height={65}
                      className="object-cover w-[65px] h-[65px]"
                    />
                    <h2 className="space-y-2">
                      Cookies
                      <img src="/images/star.png" alt="star" className="pt-1" />
                      <p>$35.00</p>
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/latestprodimg.jpg"}
                      alt="latestpordimg"
                      width={65}
                      height={65}
                      className="object-cover w-[65px] h-[65px]"
                    />
                    <h2 className="space-y-2">
                      Burger
                      <img src="/images/star.png" alt="star" className="pt-1" />
                      <p>$35.00</p>
                    </h2>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-left font-bold text-3xl">Product Tags</h1>
                  <div className="grid grid-cols-3 text-lg font-light">
                    <h2>Pizza</h2>
                    <h2>Burger</h2>
                    <h2>Cookies</h2>
                    <h2>Tandoori Chicken</h2>
                    <h2>Chicken Soup</h2>
                    <h2>Cupcakes</h2>
                    <h2>Thai</h2>
                    <h2>Non Veg</h2>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
