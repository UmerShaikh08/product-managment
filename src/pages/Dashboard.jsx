import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardDetails from "../components/dashboard/DashboardDetails";
import AddProject from "../components/dashboard/addProject/AddProject";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F5F7] flex flex-row h-full  w-full  max-w-[100vw] overflow-x-hidden">
      <Sidebar />
      <div className="bg-[#F3F5F7] w-screen md:w-[calc(100vw-4vw)] h-full">
        {/* <DashboardDetails /> */}
        <AddProject />
      </div>
    </div>
  );
};

export default Dashboard;
