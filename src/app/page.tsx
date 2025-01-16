import React from "react";
import Firstsec from "./home/firstsec";
import Secondsec from "./home/secondsec";
import Foodcat from "./home/foodcat";
import Whyus from "./home/whyus";
import Ourdetails from "@/app/components/Common/ourdetails";
const Page = () => {
  return (
    <div>
      <Firstsec />
      <Secondsec />
      <Foodcat />
      <Whyus />
      <Ourdetails />
    </div>
  );
};
export default Page;
