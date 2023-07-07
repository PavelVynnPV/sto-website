import React from "react";
import { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/slider_first.jpg";
import img3 from "../img/slider_second.jpg";
import img2 from "../img/slider_third.jpg";
import img4 from "../img/autodiagnostic.jpeg";
import img5 from "../img/conditioner_img.jpeg";
import img6 from "../img/tire.jpg";
import img7 from "../img/rozval_img.jpeg";
import img8 from "../img/engine_imgs.jpg";
import img9 from "../img/fluids_imgs.jpg";
import img10 from "../img/break_imgs.jpg";
import img11 from "../img/steering_imgs.jpg";
import img12 from "../img/cooling_imgs.jpg";
import img13 from "../img/belt_imgs.jpg";
import img14 from "../img/clutch_imgs.webp";
import img15 from "../img/injection_imgs.jpg";
import img16 from "../img/engines_imgs.jpg";
import img17 from "../img/radiator_imgs.jpg";
import img18 from "../img/svarka_imgs.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const SwiperSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  return (
    <>
      <Swiper
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
