import React, { useState } from "react";
import SideLinks from "./SideLinks";
import dashboard from "../../assets/Dashboard.svg";
import dashboardActive from "../../assets/Dashboard-active.svg";
import projectList from "../../assets/Project-list.svg";
import projectListActive from "../../assets/Project-list-active.svg";
import createProject from "../../assets/create-project.svg";
import createProjectActive from "../../assets/create-project-active.svg";
import logout from "../../assets/Logout.svg";

const Sidebar = () => {
  const [openLink, setOpenLink] = useState(dashboardActive);

  return (
    <>
      {/* deskstop view */}
      <div className="bg-white hidden md:flex max-h-[calc(100-3px)] h-screen   flex-col justify-center items-center gap-5 ">
        <div className="flex flex-col justify-center h-full items-center gap-8 ">
          <SideLinks
            activeName={dashboardActive}
            name={dashboard}
            openLink={openLink}
            setOpenLink={setOpenLink}
          />

          <SideLinks
            activeName={projectListActive}
            name={projectList}
            openLink={openLink}
            setOpenLink={setOpenLink}
          />
          <div className="border-b border-[#96A1A9] w-[70%] mx-auto"></div>

          <SideLinks
            activeName={createProjectActive}
            name={createProject}
            openLink={openLink}
            setOpenLink={setOpenLink}
          />
        </div>
        <div className="pb-3">
          <img src={logout} />
        </div>
      </div>

      {/* mobile view */}
      <div className=" flex md:hidden fixed bottom-0 justify-around z-10 items-center md:px-2 py-1 rounded-t-full bg-white  w-screen">
        <SideLinks
          activeName={dashboardActive}
          name={dashboard}
          openLink={openLink}
          setOpenLink={setOpenLink}
        />

        <SideLinks
          activeName={projectListActive}
          name={projectList}
          openLink={openLink}
          setOpenLink={setOpenLink}
        />

        <SideLinks
          activeName={createProjectActive}
          name={createProject}
          openLink={openLink}
          setOpenLink={setOpenLink}
        />
      </div>
    </>
  );
};

export default Sidebar;
