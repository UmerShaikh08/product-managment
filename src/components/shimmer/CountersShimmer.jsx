import React from "react";

const CountersShimmer = () => {
  return (
    <div className="flex flex-row">
      <div class=" p-2 max-w-sm w-full mx-auto">
        <div class="animate-pulse z-40 flex space-x-4">
          <div class="  w-full z-40 bg-slate-200 rounded-md h-[100px] "></div>
        </div>
      </div>
      <div class=" p-2 max-w-sm w-full mx-auto">
        <div class="animate-pulse z-40 flex space-x-4">
          <div class="  w-full z-40 bg-slate-200 rounded-md h-[100px] "></div>
        </div>
      </div>
      <div class=" p-2 max-w-sm w-full mx-auto">
        <div class="animate-pulse z-40 flex space-x-4">
          <div class="  w-full z-40 bg-slate-200 rounded-md h-[100px] "></div>
        </div>
      </div>
      <div class=" p-2 max-w-sm w-full mx-auto">
        <div class="animate-pulse z-40 flex space-x-4">
          <div class=" w-full z-40 bg-slate-200 rounded-md h-[100px] "></div>
        </div>
      </div>
    </div>
  );
};

export default CountersShimmer;
