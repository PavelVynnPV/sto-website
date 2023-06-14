import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
import slide1 from "../img/bottom_slider_images/acura.png"
import slide2 from "../img/bottom_slider_images/alphaRomeo.png"
import slide3 from "../img/bottom_slider_images/audi.png"
import slide4 from "../img/bottom_slider_images/bmw.png"
import slide5 from "../img/bottom_slider_images/chevrolet.png"
import slide6 from "../img/bottom_slider_images/citroen.png"
import slide7 from "../img/bottom_slider_images/daewoo.png"
import slide8 from "../img/bottom_slider_images/fiat.png"
import slide9 from "../img/bottom_slider_images/ford.png"
import slide10 from "../img/bottom_slider_images/honda.png"
import slide11 from "../img/bottom_slider_images/hyundai.png"
import slide12 from "../img/bottom_slider_images/infinity.png"
import slide13 from "../img/bottom_slider_images/jaguar.png"
import slide14 from "../img/bottom_slider_images/kia.png"
import slide15 from "../img/bottom_slider_images/landRover.png"
import slide16 from "../img/bottom_slider_images/lexus.png"
import slide17 from "../img/bottom_slider_images/mercedes.png"
import slide18 from "../img/bottom_slider_images/mitsubishi.png"
import slide19 from "../img/bottom_slider_images/nissan.png"
import slide20 from "../img/bottom_slider_images/peugeot.png"
import slide21 from "../img/bottom_slider_images/porsche.png"
import slide22 from "../img/bottom_slider_images/renault.png"
import slide23 from "../img/bottom_slider_images/seat.png"
import slide24 from "../img/bottom_slider_images/skoda.png"
import slide25 from "../img/bottom_slider_images/smart.png"
import slide26 from "../img/bottom_slider_images/ssangYoung.png"
import slide27 from "../img/bottom_slider_images/subaru.png"
import slide28 from "../img/bottom_slider_images/suzuki.png"
import slide29 from "../img/bottom_slider_images/volkswagen.png"
import slide30 from "../img/bottom_slider_images/volvo.png"

// Import Swiper styles
import "swiper/css";

import "./stylesforBottom.css";

const SwiperBottomSlider = () => {
  return (
    <>
      <Swiper
      loop={true}
       autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      slidesPerView={5}
        spaceBetween={20}
      modules={[Autoplay]}
      className="mySwiper swiperBottom"
      >
        <SwiperSlide>
            <img src={slide1} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide7} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide8} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide9} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide10} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide11} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide12} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide13} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide14} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide15} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide16} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide17} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide18} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide19} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide20} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide21} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide22} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide23} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide24} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide25} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide26} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide27} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide28} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide29} alt="slide_auto" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide30} alt="slide_auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperBottomSlider
