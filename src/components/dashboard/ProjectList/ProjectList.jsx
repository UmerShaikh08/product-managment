import React, { useEffect, useState } from "react";
import bgImg from "../../../assets/Header-bg.svg";
import logo from "../../../assets/Logo.svg";
import { MdLogout } from "react-icons/md";
import ProjectRow from "./ProjectRow";
import { HiOutlineSearch } from "react-icons/hi";
import { projectList } from "../../../utils/data";
import { TbMathGreater, TbMathLower } from "react-icons/tb";

const ProjectList = () => {
  const [allData, setAllData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [sortType, setSortType] = useState("Priority");

  const [currentPage, setCurrenPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const recordPerPage = 6;
  // const lastIdx = recordPerPage * currentPage;
  // const firstIdx = lastIdx - recordPerPage;
  // const records = projectList?.splice(firstIdx, lastIdx);
  // const nPage = Math.ceil(projectList?.length - recordPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handlePagination = () => {
    if (projectList.length > recordPerPage) {
      setEnd(recordPerPage);
    } else {
      setEnd(projectList?.length);
    }

    setStart(0);
    setCurrenPage(1);
  };

  useEffect(() => {
    if (projectList.length > recordPerPage) {
      setEnd(recordPerPage);
    } else {
      setEnd(projectList?.length);
    }
  }, []);

  useEffect(() => {
    let arr = [];
    if (sortType !== "Priority") {
      arr = (currentData ? [...currentData] : [...projectList])?.sort(
        (a, b) => {
          const categoryA = a?.[sortType];
          const categoryB = b?.[sortType];
          if (categoryA?.toLowerCase() < categoryB?.toLowerCase()) {
            return -1;
          }
          if (categoryA?.toLowerCase() > categoryB?.toLowerCase()) {
            return 1;
          }
          return 0;
        }
      );
    } else {
      arr = projectList.sort((a, b) => {
        //   set value corresponding to priority and sort them
        const priorityOrder = { High: 1, Mid: 2, Low: 3 };
        return priorityOrder[a.Priority] - priorityOrder[b.Priority];
      });
    }

    if (!allData) setAllData(projectList);
    console.log(arr);
    setCurrentData(arr);

    handlePagination();
  }, [sortType]);

  // search functionality
  useEffect(() => {
    console.log("search ", searchKey);

    const debounce = setTimeout(() => {
      if (searchKey === "") {
        setSortType("Priority");
        if (allData) {
          setCurrentData(allData);
        }
      } else {
        console.log("filter search ", searchKey);
        const filteredData =
          allData &&
          allData?.filter((data) =>
            data?.ProjectName?.toLowerCase()?.includes(searchKey?.toLowerCase())
          );

        setCurrentData(filteredData);
      }
      handlePagination();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchKey]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrenPage(currentPage - 1);
      setStart(start - recordPerPage);
      setEnd(end - recordPerPage);
    }
  };

  const nextPage = () => {
    if (currentPage < currentData?.length / recordPerPage - 1) {
      setCurrenPage(currentPage + 1);
      setStart(start + recordPerPage);
      setEnd(end + recordPerPage);
    }
  };

  return (
    <div className="relative w-full h-full space-y-4  mb-[100px]">
      <div className="relative w-full h-full">
        <img src={bgImg} className="w-full h-full" />
        <h3 className="absolute top-1 left-2 md:top-[20%] md:left-[2%] text-xl md:-2xl font-semibold text-white">
          Create Project
        </h3>

        <img
          src={logo}
          className="absolute hidden md:block top-[20%] left-[50%] w-[5%]"
        />

        <div className="md:hidden absolute   top-1 right-6 w-[5%]">
          <MdLogout size={25} className="text-white" />
        </div>
      </div>
      <div className="lg:absolute lg:top-[70%] lg:left-[3%] space-y-4 lg:right-auto lg:bg-white w-[95%] rounded-md mt-[500px] overflow-hidden  py-5">
        <div className=" relative flex flex-row justify-between pl-2">
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search"
            className="border-b-2 pl-8 text-lg border-b-[#979797]  outline-none"
          />
          <HiOutlineSearch
            size={20}
            className="absolute bottom-2 left-4 text-[#BBBEC1]"
          />
          <select
            value={sortType}
            className=""
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="Pirority">Pirority</option>
            <option value="Category">Category</option>
            <option value="Reason">Reason</option>
            <option value="Division">Division</option>
            <option value="Dept">Department</option>
            <option value="Location">Location</option>
          </select>
        </div>

        {/* table */}
        <div className=" lg:block lg:w-full mx-auto space-y-2 ">
          {/* table head */}
          <div className=" hidden lg:grid bg-[#EBF5FF] lg:grid-cols-13 pl-2   lg:gap-3 lg:py-3">
            <div className="col-span-2">Project Name</div>
            <div className="col-span-1">Reason</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-1">Division</div>
            <div className="col-span-1">Category</div>
            <div className="col-span-1">Priority</div>
            <div className="col-span-1">dept</div>
            <div className="col-span-1">Location</div>
            <div className="col-span-1">Status</div>
          </div>

          {/* table body */}
          <>
            <div className="hidden lg:block   w-[100%] mx-auto    lg:space-y-3">
              {currentData &&
                currentData
                  ?.slice(start, end)
                  ?.map((data, idx) => <ProjectRow data={data} key={idx} />)}
            </div>
            <div className=" lg:hidden grid grid-cols-4  w-[100%] mx-auto pl-2 gap-5  lg:space-y-3">
              {currentData &&
                currentData?.map((data, idx) => (
                  <ProjectRow data={data} key={idx} />
                ))}
            </div>
          </>
        </div>
        <div className="hidden  md:flex flex-row justify-center items-center gap-4">
          <div onClick={prevPage}>
            <TbMathLower
              className={` ${
                currentPage === 1 ? "text-[#999999]" : "text-black"
              }`}
            />
          </div>
          <div className="bg-[#0CC9E8] rounded-full  h-6 w-6 flex justify-center items-center text-white ">
            {currentPage}
          </div>
          <div
            onClick={nextPage}
            className={`${
              currentPage >= currentData?.length / recordPerPage - 1
                ? "text-[#999999]"
                : "tect-black"
            }`}
          >
            <TbMathGreater />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
