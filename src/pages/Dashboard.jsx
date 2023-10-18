import React from "react";
// import Sidebar from "../components/sidebar/Sidebar";
import DashboardDetails from "../components/dashboard/DashboardDetails";
import AddProject from "../components/dashboard/addProject/AddProject";
import ProjectList from "../components/dashboard/ProjectList/ProjectList";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F5F7] flex flex-row h-full  w-full  max-w-[100vw] overflow-x-hidden">
      <Sidebar />
      <div className="bg-[#F3F5F7] w-screen md:max-w-[calc(100vw-60px)] h-full">
        {/* <DashboardDetails /> */}
        {/* <AddProject /> */}
        {/* <ProjectList /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
