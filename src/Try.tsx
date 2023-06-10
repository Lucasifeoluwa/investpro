// import Swiper core and required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./try.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="slider">
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        loop={true}
        /*   coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }} */
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="swiper-slide">
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Great app and great support”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Easy, Quick ,Simple”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_crossima9406</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Super Fast”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Very Helpful”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Great app”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Helpful”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("./assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Excellent!”</div>
              <div className="second">
                Really useful if you need a quick bit of money. Easy to pay back
                and if ur unable to pay it back right on time they'll give u a
                little bit of wiggle room to help out. Thanks guys
              </div>
              <div className="third">_Jack</div>
            </div>
          </SwiperSlide>
        </div>

        <div className="slider-controler">
          <div className=""></div>
          <div className=""></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
