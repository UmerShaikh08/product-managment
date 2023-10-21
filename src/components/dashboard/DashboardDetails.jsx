import React, { useEffect, useState } from "react";
import bgImg from "../../assets/Header-bg.svg";
import logo from "../../assets/Logo.svg";
import ProjectDataCard from "./dashboardDetails/ProjectDataCard";
import ProductChart from "./dashboardDetails/ProductChart";

import { MdLogout } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/operations/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardDetails } from "../../services/operations/project";
import { Dept } from "../../utils/data";
import CountersShimmer from "../shimmer/CountersShimmer";

const DashboardDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((store) => store.auth);
  const { projectList } = useSelector((store) => store.project);
  const { projectCounters, totalDeptWise, closeDeptWise } = useSelector(
    (store) => store.dashboard
  );

  const [dashboardCounters, setDashboardCounters] = useState(null);
  const [total, setTotal] = useState(null);
  const [closed, setClosed] = useState(null);
  const [flag, setFlag] = useState(false);

  const fetchDashboard = async () => {
    const result = await fetchDashboardDetails(
      Dept,
      token,
      setLoading,
      dispatch
    );

    if (result) {
      setDashboardCounters(result?.projectCouters);
      setTotal(result?.totalDeptWise);
      setClosed(result?.closeDeptWise);
    }
  };

  useEffect(() => {
    if (
      projectCounters?.length === 0 ||
      totalDeptWise?.length === 0 ||
      closeDeptWise?.length === 0
    ) {
      console.log("yes");
      fetchDashboard(Dept, token);
    } else {
      setDashboardCounters(projectCounters);
      setTotal(totalDeptWise);
      setClosed(closeDeptWise);
    }
  }, []);

  useEffect(() => {
    if (projectList.length > 0) {
      fetchDashboard(Dept, token);
    }
  }, [projectList]);

  return (
    <>
      <div className=" w-[100%] h-full space-y-20 mb-[100px] lg:mb-[10px]">
        <div className="relative w-full h-full">
          <img src={bgImg} className="w-full h-full" />
          <h3 className="absolute top-1 left-2 md:top-[20%] md:left-[2%] text-xl md:-2xl font-semibold text-white">
            Dashboard
          </h3>

          <img
            src={logo}
            className="absolute hidden md:block top-[20%] left-[50%] w-[5%]"
          />

          <div
            className="md:hidden absolute   top-1 right-6 w-[5%]"
            onClick={() => dispatch(logout(navigate))}
          >
            <MdLogout size={25} className="text-white" />
          </div>

          <div className=" mt-2 md:-mt-10  w-[90%] mx-auto ">
            {projectCounters?.length !== 0 ? (
              <Swiper
                mousewheel={{
                  enabled: true,
                  forceToAxis: true,
                }}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true,
                }}
                allowSlidePrev={true}
                slidesPerView={1.1}
                breakpoints={{
                  300: { slidesPerView: 3, spaceBetween: 20 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4.9 },
                }}
                modules={[Mousewheel, Keyboard]}
                spaceBetween={20}
                freeMode={true}
                className="mySwiper mb-4"
                style={{
                  "--swiper-navigation-size": "20px",
                }}
              >
                {dashboardCounters &&
                  dashboardCounters.map((data, idx) => (
                    <SwiperSlide key={idx}>
                      <ProjectDataCard text={data.text} count={data.count} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>
                <CountersShimmer />
              </div>
            )}
          </div>
        </div>

        <div className="px-4 space-y-3 h-full ">
          <h2 className="text-xl font-medium   text-[#070808]">
            Department wise - Total vs Closed
          </h2>
          <ProductChart total={total} closed={closed} />
        </div>
      </div>
    </>
  );
};

export default DashboardDetails;
