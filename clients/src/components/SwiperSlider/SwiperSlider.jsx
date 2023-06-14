import React from "react";
import { Autoplay} from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/slider_first.jpg";
import img3 from "../img/slider_second.jpg";
import img2 from "../img/slider_third.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        speed={500}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt='sto_news'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt='sto_news'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt='sto_news'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
