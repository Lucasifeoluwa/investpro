import React from "react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper as Swipe, SwiperSlide } from "swiper/react";
import "./swiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swiper() {
  return (
    <div className="slider">
      <Swipe
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
                src={require("../../assets/images/star.png")}
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
                src={require("../../assets/images/star.png")}
                alt=""
                className="Img"
              />
              <div className="first">“Easy, Quick ,Simple”</div>
              <div className="second">
                I don’t normally write a review however for me to end up writing
                one a company has to have done something excellent. This app is
                easy and straightforward. Yes there’s teething problems in the
                early days hence the poor reviews earlier however those problems
                were nonexistent today when I signed up, payment was quick and
                easy.
              </div>
              <div className="third">_crossima9406</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trySlide">
              <img
                src={require("../../assets/images/star.png")}
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
                src={require("../../assets/images/star.png")}
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
                src={require("../../assets/images/star.png")}
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
                src={require("../../assets/images/star.png")}
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
                src={require("../../assets/images/star.png")}
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
      </Swipe>
    </div>
  );
}

export default Swiper;
