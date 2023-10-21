import React, { useState } from "react";
import { updateStatus } from "../../../services/operations/project";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../../redux/slices/projectSlice";

const ProjectRow = ({ data }) => {
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
    _id,
    Start,
    End,
  } = data;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((store) => store.auth);
  const { projectList } = useSelector((store) => store.project);

  const changeDate = (date) => {
    const inputDateStr = date;
    const inputDate = new Date(inputDateStr);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const statusHanlder = async (Status) => {
    const projectId = _id;
    const result = await updateStatus(
      { projectId, Status },
      token,

      setLoading
    );

    if (result) {
      dispatch(addProject(result));
    }
  };
  return (
    <>
      {/* deskstop view */}
      <>
        <div className="hidden lg:grid  grid-cols-13 gap-3  pl-2 ">
          <div className="col-span-2">
            <h2 className=" font-semibold">{ProjectName}</h2>
            <p className="text-xs text-[#999999]  font-semibold">
              {changeDate(Start)} to {changeDate(End)}
            </p>
          </div>
          <div className="col-span-1">{Reason}</div>
          <div className="col-span-1">{Type}</div>
          <div className="col-span-1">{Division}</div>
          <div className="col-span-1">{Category}</div>
          <div className="col-span-1">{Priority}</div>
          <div className="col-span-1">{Dept}</div>
          <div className="col-span-1">{Location}</div>
          <div className="col-span-1 font-semibold">
            {Status === "Start"
              ? "Running"
              : Status === "Cancel"
              ? "Cancelled"
              : Status === "Close"
              ? "Closed"
              : "Registered"}
          </div>
          <div className="col-span-3 w-full space-x-2 flex flex-row items-center   justify-center">
            <button
              disabled={loading}
              className="text-white rounded-full h-fit border-[#1B6AB4] px-3  bg-[#025AAB] transition-all duration-200 hover:bg-[#0259abe2]"
              onClick={() => statusHanlder("Start")}
            >
              Start
            </button>
            <button
              disabled={loading}
              className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-3 transition-all duration-200 hover:bg-[#0259abe2] hover:text-white"
              onClick={() => statusHanlder("Close")}
            >
              Close
            </button>
            <button
              disabled={loading}
              className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-3 transition-all duration-200 hover:bg-[#0259abe2] hover:text-white"
              onClick={() => statusHanlder("Cancel")}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className=" hidden lg:block w-full  border border-[#E3E3E3]"></div>
      </>

      {/* mobile view */}
      <div className=" lg:hidden   sm:col-span-2 col-span-4 bg-white w-full rounded-md px-2 space-y-2 py-3">
        {/*  project name and status */}

        <div className="flex flex-row justify-between ">
          <div className="">
            <h2 className=" font-semibold">{ProjectName}</h2>
            <p className="text-xs  text-[#999999] ">
              {changeDate(Start)} to {changeDate(End)}
            </p>
          </div>
          <h3>{Status}</h3>
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
          <button
            disabled={loading}
            className="text-white rounded-full h-fit border-[#1B6AB4] px-5 py-1  bg-[#025AAB]"
            onClick={() => statusHanlder("Start")}
          >
            Start
          </button>
          <button
            disabled={loading}
            className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-5 py-1 "
            onClick={() => statusHanlder("Close")}
          >
            Close
          </button>
          <button
            disabled={loading}
            className="text-[#1B6AB4] border h-fit border-[#1B6AB4] rounded-full  px-5 py-1 "
            onClick={() => statusHanlder("Cancel")}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectRow;
