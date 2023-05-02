import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./HomeBanner.css";

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
        <div className="w-full h-[80vh] lg:h-full relative">
          <img
            className="w-full"
            src="https://i.ibb.co/bJxLXx2/banner-1.jpg"
            alt=""
          />
          <div className="slider-content bg-[#FACC15] rounded-t-lg md:w-[40%] mx-auto absolute p-5">
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              maiores assumenda officia beatae, quasi architecto cum sint
              consequatur provident molestias perferendis officiis, blanditiis,
              deleniti omnis consectetur eligendi at amet voluptatum.
            </p>
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
          <div className="slider-content bg-[#FACC15] rounded-t-lg md:w-[40%] mx-auto absolute p-5">
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              maiores assumenda officia beatae, quasi architecto cum sint
              consequatur provident molestias perferendis officiis, blanditiis,
              deleniti omnis consectetur eligendi at amet voluptatum.
            </p>
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
          <div className="slider-content bg-[#FACC15] rounded-t-lg md:w-[40%] mx-auto absolute p-5">
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              maiores assumenda officia beatae, quasi architecto cum sint
              consequatur provident molestias perferendis officiis, blanditiis,
              deleniti omnis consectetur eligendi at amet voluptatum.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
