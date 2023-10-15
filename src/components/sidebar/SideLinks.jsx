import React, { useState } from "react";

const SideLinks = ({ activeName, name, openLink, setOpenLink }) => {
  return (
    <div
      className=" flex md:flex-row flex-col-reverse  items-center gap-2 cursor-pointer mr-4"
      onClick={() => setOpenLink(activeName)}
    >
      <div
        className={`md:h-7 w-7 md:w-0 font-semibold  md:border-r border-b border-[8px] rounded-full -mb-[7px] md:-ml-[4px] ${
          openLink === activeName ? "border-[#025AAB]" : "border-[#96A1A9]"
        }  `}
      ></div>
      <img
        loading="lazy"
        src={activeName === openLink ? activeName : name}
        alt="sidebar"
        className=" md:w-[2rem]"
      />
    </div>
  );
};

export default SideLinks;
