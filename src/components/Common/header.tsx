import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiHandbagLight, PiUserLight } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-black lg:max-w-auto h-auto lg:h-[90px] w-full flex flex-col lg:flex-row items-center justify-center p-4">
      <div className="flex justify-around items-center w-full lg:max-w-auto">
        {/* Logo */}
        <div className="text-[24px] flex font-bold">
          <h1 className="text-white">Food </h1>
          <span className="text-[#FF9F0D]">Tuck</span>
        </div>

        {/* PC Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link
            className="text-white font-bold text-lg hover:text-[#FF9F0D]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/chefs"
          >
            Chefs
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navbar */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <GiHamburgerMenu size={24} className="text-white" />
          </SheetTrigger>
          <SheetContent className="p-6">
            <nav className="space-y-4 flex flex-col">
              <Link className="text-[#FF9F0D] font-bold" href="/">
                Home
              </Link>
              <Link className="text-lg font-bold text-black" href="/menu">
                Menu
              </Link>
              <Link className="text-lg font-bold text-black" href="/blog">
                Blog
              </Link>
              <Link className="text-lg font-bold text-black" href="/chefs">
                Chefs
              </Link>
              <Link className="text-lg font-bold text-black" href="/about">
                About
              </Link>
              <Link className="text-lg font-bold text-black" href="/shop">
                Shop
              </Link>{" "}
              <Link className="text-lg font-bold text-black" href="/contact">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="text-white flex gap-3 font-bold items-center justify-center mt-4 lg:mt-0">
          <CiSearch size={24} />
          <Link href="/signup">
            <PiUserLight size={24} />
          </Link>
          <Link href="/cart">
            <PiHandbagLight size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
