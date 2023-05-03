import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./HomeBanner.css";
import { FaClock, FaComment, FaHeart } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-full h-[80vh] lg:h-full relative bg-black">
          <img
            className="w-full"
            src="https://i.ibb.co/bJxLXx2/banner-1.jpg"
            alt=""
          />
          <div className="slider-content bg-white bg-opacity-[0.7] lg:bg-opacity-[1] rounded-t-lg lg:w-[40%] mx-auto absolute p-5">
            <p>
              <small className="text-[#1d4ed8]">Appetizers</small>
            </p>
            <h2 className="text-[28px] font-bold mb-2">Gobi Manchurian</h2>
            <p className="text-lg font-medium lg:text-gray-500">
              Sometimes overlapping with snacks and street foods, Indian
              appetizers start the meal with tantalizing spices, contrasting
              textures and a nod to the diverse cultural influences and
              legendary creations that make up this unique segment of Indian
              cuisine
            </p>
            <div className="flex justify-center items-center gap-5 mt-4">
              <p className="flex items-center gap-2">
                <FaClock className="text-[#1d4ed8]" /> 55 Mins
              </p>
              <p className="flex items-center gap-2">
                <FaComment className="text-[#1d4ed8]" /> 23
              </p>
              <p className="flex items-center gap-2">
                <FaHeart className="text-[#1d4ed8]" /> 41
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[80vh] lg:h-full relative">
          <img
            className="w-full"
            src="https://i.ibb.co/879pDWk/banner-2.jpg"
            alt=""
          />
          <div className="slider-content bg-white bg-opacity-[0.7] lg:bg-opacity-[1] rounded-t-lg lg:w-[40%] mx-auto absolute p-5">
            <p>
              <small className="text-[#1d4ed8]">Indian Dishes</small>
            </p>
            <h2 className="text-[28px] font-bold mb-2">Tikka Masala</h2>
            <p className="text-lg font-medium lg:text-gray-500">
              Cooking styles and techniques for preparing Indian food vary
              greatly amongst the Northern, Western, Eastern and Southern
              regions of the country. The result of history, geography and
              migration, each region has signature styles and dishes that
              differentiate these unique types of Indian food from one another.
            </p>
            <div className="flex justify-center items-center gap-5 mt-4">
              <p className="flex items-center gap-2">
                <FaClock className="text-[#1d4ed8]" /> 70 Mins
              </p>
              <p className="flex items-center gap-2">
                <FaComment className="text-[#1d4ed8]" /> 44
              </p>
              <p className="flex items-center gap-2">
                <FaHeart className="text-[#1d4ed8]" /> 98
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[80vh] lg:h-full relative">
          <img
            className="w-full"
            src="https://i.ibb.co/WFF24tP/banner-3.jpg"
            alt=""
          />
          <div className="slider-content bg-white bg-opacity-[0.7] lg:bg-opacity-[1] rounded-t-lg lg:w-[40%] mx-auto absolute p-5">
            <p>
              <small className="text-[#1d4ed8]">Desserts</small>
            </p>
            <h2 className="text-[28px] font-bold mb-2">Gajar Ka Halwa</h2>
            <p className="text-lg font-medium lg:text-gray-500">
              The Indian deserts are a harsh and arid region located in the
              western part of the country, mainly comprising the Thar desert.
              Characterized by vast expanses of sand dunes, sparse vegetation,
              and extreme temperatures, these deserts are home to a diverse
              range of flora and fauna that have adapted to survive in the harsh
              desert environment.
            </p>
            <div className="flex justify-center items-center gap-5 mt-4">
              <p className="flex items-center gap-2">
                <FaClock className="text-[#1d4ed8]" /> 45 Mins
              </p>
              <p className="flex items-center gap-2">
                <FaComment className="text-[#1d4ed8]" /> 19
              </p>
              <p className="flex items-center gap-2">
                <FaHeart className="text-[#1d4ed8]" /> 65
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
