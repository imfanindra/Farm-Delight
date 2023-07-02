import React from "react";
import "./preheader.css";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#229ad6] px-6 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
          <img
            src="https://www.pngfind.com/pngs/m/613-6131138_vit-bhopal-logo-vit-bhopal-logo-png-transparent.png"
            className="logo"
            alt=""
          />
          <p className="font-semibold text-white text-xs sm:text-sm ml-1">
            Vellore Institute Of Technology
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
