import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-44 ">
      {/* Support Section */}
      <div className="max-w-[1169px] flex flex-col md:flex-row px-6 md:px-0 mx-auto border-b-2 border-[#ff9f0d] pb-6">
        <div className="space-y-4 pb-5 w-full md:w-full">
          <h2 className="font-bold text-[24px] md:text-[32px] text-white">
            <span className="font-bold text-[#ff9f0d]">St</span>ill need our
            support?
          </h2>
          <p className="text-[14px] md:text-[16px] font-[400] text-white">
            Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty
            easy.
          </p>
        </div>
        <div className="w-full ml-0 mx-auto md:flex items-center md:ml-52">
          <div className="flex flex-col md:flex-row w-full items-center">
            <input
              type="text"
              className="bg-[#ff9f0d] w-full md:w-[325px] rounded-sm p-4 text-white font-light placeholder-gray-300"
              placeholder="Enter Your Email"
            />
            <button className="w-full md:w-[150px] h-[55px] text-[#ff9f0d] bg-white p-2 rounded-sm">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-[1320px] mt-8 flex flex-wrap justify-center md:justify-between gap-8 px-auto md:px-0 mx-auto">
        {/* About Section */}
        <div className="w-full md:w-[395px] space-y-4">
          <h2 className="text-white font-bold">About</h2>
          <p className="text-white text-sm">
            Corporate clients and leisure travelers have been relying on us for
            dependable, safe, and professional chauffeured car service in major
            cities across the world.
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-[#FF9F0D] w-[70px] h-[70px] rounded-sm flex items-center justify-center">
              <Image
                src="/images/icons/Clock.png"
                alt="clock icon"
                width={40}
                height={40}
              />
            </button>
            <p className="text-white text-sm">
              Opening Hours
              <br />
              <span className="font-light">Mon - Sat (8.00 - 6.00)</span>
              <br />
              <span className="font-light">Sunday - Closed</span>
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-auto text-white">
          <h2 className="font-bold">Useful Links</h2>
          <div className="flex flex-wrap gap-2 md:flex-col md:gap-5 mt-4">
            <Link href="/news" className="text-sm">
              News
            </Link>
            <Link href="/partners" className="text-sm">
              Partners
            </Link>
            <Link href="/team" className="text-sm">
              Team
            </Link>
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/menu" className="text-sm">
              Menu
            </Link>
            <Link href="/contact" className="text-sm">
              Contact
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="w-full md:w-auto text-white">
          <h2 className="font-bold">Help?</h2>
          <div className="flex flex-wrap gap-2 md:flex-col md:gap-5 mt-4">
            <p className="text-sm">FAQ</p>
            <p className="text-sm">Terms & Condition</p>
            <p className="text-sm">Reporting</p>
            <p className="text-sm">Documentation</p>
            <p className="text-sm">Support Policy</p>
            <p className="text-sm">Privacy</p>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="w-full md:w-auto text-white">
          <h2 className="font-bold">Recent Post</h2>
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] overflow-hidden">
                  <Image
                    src="/images/heroimages/footerimg.jpg"
                    alt="recentpost img"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                <p className="text-sm">
                  Is fastfood good for your body?
                  <br />
                  <span className="text-xs text-zinc-500">
                    February 28,2022
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-[#4f4f4f] py-4 md:mt-8 mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-white text-center">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center gap-4 text-white">
          <TiSocialFacebook size={24} />
          <TiSocialTwitter size={24} />
          <TiSocialInstagram size={24} />
          <TiSocialYoutube size={24} />
          <TiSocialPinterest size={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
