import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import bgImg from "../../assets/Header-bg.svg";
import ProductChart from "./dashboardDetails/ProductChart";
import CountersShimmer from "../shimmer/CountersShimmer";
import ProjectDataCard from "./dashboardDetails/ProjectDataCard";
import { Dept } from "../../utils/data";
import { logout } from "../../services/operations/auth";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import { fetchDashboardDetails } from "../../services/operations/project";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const DashboardDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [total, setTotal] = useState(null);
  const [closed, setClosed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dashboardCounters, setDashboardCounters] = useState([]);

  const { token } = useSelector((store) => store.auth);

  const fetchDashboard = async () => {
    const result = await fetchDashboardDetails(Dept, token, setLoading);

    if (result) {
      setDashboardCounters(result?.projectCouters);
      setTotal(result?.totalDeptWise);
      setClosed(result?.closeDeptWise);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

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
            {dashboardCounters?.length !== 0 ? (
              <Swiper
                allowSlidePrev={true}
                slidesPerView={1.1}
                mousewheel={{
                  enabled: true,
                  forceToAxis: true,
                }}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true,
                }}
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
                {dashboardCounters?.map((data, idx) => (
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
