import React from "react";
import bgImg from "../../assets/Header-bg.svg";
import logo from "../../assets/Logo.svg";
import ProjectDataCard from "./dashboardDetails/ProjectDataCard";
import ProductChart from "./dashboardDetails/ProductChart";
import logout from "../../assets/Logout.svg";
import { MdLogout } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const DashboardDetails = () => {
  const dashboardCounters = [
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
    {
      text: "Total Project",
      count: 8,
    },
  ];
  return (
    <>
      <div className=" w-full h-full space-y-20 mb-[110px]">
        <div className="relative w-full h-full">
          <img src={bgImg} className="w-full h-full" />
          <h3 className="absolute top-1 left-2 md:top-[20%] md:left-[2%] text-xl md:-2xl font-semibold text-white">
            Dashboard
          </h3>

          <img
            src={logo}
            className="absolute hidden md:block top-[20%] left-[50%] w-[5%]"
          />

          <div className="md:hidden absolute   top-1 right-6 w-[5%]">
            <MdLogout size={25} className="text-white" />
          </div>

          <div className=" mt-2 md:-mt-10  w-[90%] mx-auto ">
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
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              // loop={true}
              spaceBetween={20}
              pagination={false}
              freeMode={true}
              rewind={false}
              centeredSlides={false}
              navigation={false}
              className="mySwiper mb-4"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-navigation-size": "20px",
              }}
            >
              {dashboardCounters.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <ProjectDataCard text={data.text} count={data.count} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="px-4 space-y-3 h-full ">
          <h2 className="text-xl font-medium   text-[#070808]">
            Department wise - Total vs Closed
          </h2>
          <ProductChart />
        </div>
      </div>
    </>
  );
};

export default DashboardDetails;
