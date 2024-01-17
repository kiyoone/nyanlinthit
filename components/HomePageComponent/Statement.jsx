import React, { useContext } from "react";
import { Typography } from "@mui/material";
import StatementPhoto from "@/assets/Statement.jpg";
import { DisplayTheme } from "@/context/Context";
import { useGetClashQuery } from "../../features/api/apiSlice";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Statement = () => {
  const { darkMode } = useContext(DisplayTheme);
  const {
    data: statements,
    isLoading,
    isError,
    isSuccess,
  } = useGetClashQuery(`resources/type/STATEMENTS?page=1&limit=6&category=`);
  if (isSuccess) console.log(statements);
  return (
    <div className="p-5 sm:p-20 hidden sm:block">
      <div className=" w-full text-2xl md:text-[32px] mb-24  text-center font-medium">
        <h1 className={darkMode ? "text-white" : "text-black"}>Statement</h1>
      </div>
      <div className="h-40 w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper  h-full "
        >
          {isSuccess &&
            statements?.resources?.map((statement) => (
              <SwiperSlide key={statement._id}>
                <div className="relative h-full">
                  <a
                    href={statement?.mmFile[0]}
                    className="absolute h-full w-full top-0 opacity-0 hover:opacity-80 rounded-lg drop-shadow-md flex items-center justify-center bg-gray-100"
                    download
                    title="Click to Download PDF"
                  >
                    <DownloadForOfflineIcon fontSize="large" />
                  </a>
                  <img
                    src={StatementPhoto}
                    className="w-full h-full rounded-lg"
                    alt="image"
                    title="Click to Downloads"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Statement;
