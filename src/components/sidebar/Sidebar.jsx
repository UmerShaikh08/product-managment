import React, { useEffect, useState } from "react";
import SideLinks from "./SideLinks";
import dashboard from "../../assets/Dashboard.svg";
import dashboardActive from "../../assets/Dashboard-active.svg";
import projectList from "../../assets/Project-list.svg";
import projectListActive from "../../assets/Project-list-active.svg";
import createProject from "../../assets/create-project.svg";
import createProjectActive from "../../assets/create-project-active.svg";
import logoutImg from "../../assets/Logout.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/operations/auth";

const Sidebar = () => {
  const location = useLocation();
  const [openLink, setOpenLink] = useState(location.pathname);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setOpenLink(location.pathname);
  }, [location.pathname]);
  return (
    <>
      {/* deskstop view */}
      <div className="bg-white hidden md:flex max-h-[calc(100-3px)] h-screen min-w-[60px]   flex-col justify-center items-center gap-5 ">
        <div className="flex flex-col justify-center h-full items-center gap-8 ">
          <SideLinks
            active={"dashboardActive"}
            activeName={dashboardActive}
            name={dashboard}
            openLink={openLink}
            setOpenLink={setOpenLink}
            path={"/dashboard/dashboard-details"}
          />

          <SideLinks
            active={"projectListActive"}
            activeName={projectListActive}
            name={projectList}
            openLink={openLink}
            setOpenLink={setOpenLink}
            path={"/dashboard/project-list"}
          />
          <div className="border-b border-[#96A1A9] w-[70%] mx-auto"></div>

          <SideLinks
            active={"createProjectActive"}
            activeName={createProjectActive}
            name={createProject}
            openLink={openLink}
            setOpenLink={setOpenLink}
            path={"/dashboard/create-page"}
          />
        </div>
        <div className="pb-3" onClick={() => dispatch(logout(navigate))}>
          <img src={logoutImg} />
        </div>
      </div>

      {/* mobile view */}
      <div className=" flex md:hidden fixed bottom-0 justify-around z-10 items-center md:px-2 py-1 rounded-t-full bg-white  w-screen">
        <SideLinks
          active={"dashboardActive"}
          activeName={dashboardActive}
          name={dashboard}
          openLink={openLink}
          setOpenLink={setOpenLink}
          path={"/dashboard/dashboard-details"}
        />

        <SideLinks
          active={"projectListActive"}
          activeName={projectListActive}
          name={projectList}
          openLink={openLink}
          setOpenLink={setOpenLink}
          path={"/dashboard/project-list"}
        />

        <SideLinks
          active={"createProjectActive"}
          activeName={createProjectActive}
          name={createProject}
          openLink={openLink}
          setOpenLink={setOpenLink}
          path={"/dashboard/create-page"}
        />
      </div>
    </>
  );
};

export default Sidebar;
