import React from "react";

const ProjectRow = ({ data }) => {
  //   console.log("inside row ", data);

  const {
    ProjectName,
    Reason,
    Type,
    Division,
    Category,
    Priority,
    Dept,
    Location,
    Status,
  } = data;

  return (
    <>
      {/* deskstop view */}
      <>
        <div className="hidden lg:grid  grid-cols-13 gap-3  pl-2 ">
          <div className="col-span-2">
            <h2 className=" font-semibold">{ProjectName}</h2>
            <p className="text-sm text-[#999999] font-serif">
              jun-21,2020 to jan-01,2021
            </p>
          </div>
          <div className="col-span-1">{Reason}</div>
          <div className="col-span-1">{Type}</div>
          <div className="col-span-1">{Division}</div>
          <div className="col-span-1">{Category}</div>
          <div className="col-span-1">{Priority}</div>
          <div className="col-span-1">{Dept}</div>
          <div className="col-span-1">{Location}</div>
          <div className="col-span-1">{Status}</div>
          <div className="col-span-3 w-full space-x-2 flex flex-row items-center   justify-center">
            <button className="text-white rounded-full h-fit border-[#1B6AB4] px-3  bg-[#025AAB]">
              Start
            </button>
            <button className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-3 ">
              Close
            </button>
            <button className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-3 ">
              Cancel
            </button>
          </div>
        </div>
        <div className="w-full  border border-[#E3E3E3]"></div>
      </>

      {/* mobile view */}
      <div className=" lg:hidden   sm:col-span-2 col-span-4 bg-white w-full rounded-md px-2 space-y-2 py-3">
        {/*  project name and status */}

        <div className="flex flex-row justify-between ">
          <div className="">
            <h2 className=" font-semibold">{ProjectName}</h2>
            <p className="text-sm text-[#999999] font-serif">
              jun-21,2020 to jan-01,2021
            </p>
          </div>
          <h3>Running</h3>
        </div>
        {/* details */}
        <div className="text-sm space-y-1">
          <p className="text-[#8A8A8A]">
            Reason : <span className="text-black">{Reason}</span>{" "}
          </p>

          <div className="flex flex-row gap-1">
            <p className="text-[#8A8A8A]">
              Type : <span className="text-black">{Type}</span>{" "}
            </p>
            <p className="text-[#8A8A8A]">
              Category : <span className="text-black">{Category}</span>{" "}
            </p>
          </div>

          <div className="flex flex-row gap-1">
            <p className="text-[#8A8A8A]">
              Div : <span className="text-black">{Division}</span>{" "}
            </p>
            <p className="text-[#8A8A8A]">
              Dept : <span className="text-black">{Dept}</span>{" "}
            </p>
          </div>

          <p className="text-[#8A8A8A]">
            Loacation : <span className="text-black">{Location}</span>{" "}
          </p>
          <p className="text-[#8A8A8A]">
            Priority : <span className="text-black">{Priority}</span>{" "}
          </p>
        </div>

        {/* status chaning option */}
        <div className=" w-full space-x-2  flex flex-row    justify-around">
          <button className="text-white rounded-full h-fit border-[#1B6AB4] px-5 py-1  bg-[#025AAB]">
            Start
          </button>
          <button className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-5 py-1 ">
            Close
          </button>
          <button className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-5 py-1 ">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectRow;
