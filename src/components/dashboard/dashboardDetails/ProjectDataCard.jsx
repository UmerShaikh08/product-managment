import React from "react";

const ProjectDataCard = ({ text, count }) => {
  console.log("j");
  return (
    <div className="  w-full rounded-md pl-2 py-3 shadow-lg bg-white h-full border-l-[6px] -ml-[3px] border-[#0CC9E8]">
      <div className="text-sm md:text-base text-[#4D5358]">{text} </div>
      <div className="md:text-[3rem] text-3xl text-[#474D52] font-semibold">
        {count}
      </div>
    </div>
  );
};

export default ProjectDataCard;
