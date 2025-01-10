import React from "react";
import Heroimg from "@/components/home/heroimg";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

const Signin = () => {
  return (
    <div className="md:1920px">
      <Heroimg title="Sign in here" subtitle="Sign in" />
      <div className="md:max-w-[424px] w-full h-[684px] shadow-lg shadow-[rgba(255,159,13,0.3)]  mx-auto my-[40px]">
        <h2 className="font-bold text-[20px] pl-[38px] pt-[18px]">Sign In</h2>
        <div className="flex items-center gap-4 p-4 mx-5 border-[2px] mt-4 rounded-md ">
          <AiOutlineMail size={24} className="opacity-70" />
          <input
            type="text"
            placeholder="Email"
            className="placeholder-slate-700 border-none focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-4 p-4 mx-5 border-[2px] mt-4 rounded-md ">
          <HiOutlineLockClosed size={24} className="opacity-70" />
          <input
            type="password"
            placeholder="Password"
            className="placeholder-slate-700 border-none focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-4 p-4 mx-5 mt-4 ">
          <input type="checkbox" className="w-4 h-4" />
          <p className="">Remember Me?</p>
        </div>
        <button className="md:mx-8  mx-auto mt-4 rounded-md bg-[#ff9f0d] text-white p-4 md:max-w-[360px] w-full">
          Sign In
        </button>
        <p className="text-right mt-4 mx-8 opacity-50">Forgot Password?</p>
        <div className="w-full mt-8 flex items-center justify-center">
          <hr className="w-1/3 bg-gray-500 border-[1px]" />
          <span className=" text-gray-500 border-[2px] p-2 ">OR</span>
          <hr className="w-1/3 bg-gray-500 border-[1px]" />
        </div>
        <div className="flex items-center gap-20 p-4 mx-5 border-[2px] mt-4 rounded-md ">
          <FcGoogle size={24} />
          <button>Sign in with Google</button>
        </div>
        <div className="flex items-center gap-20 p-4 mx-5 border-[2px] mt-4 rounded-md ">
          <IoLogoApple size={24} />
          <button>Sign in with Apple</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
