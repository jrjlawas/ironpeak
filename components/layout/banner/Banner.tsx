"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Banner = () => {
  return (
    <section className="banner-area">
      <div className=" banner__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          freeMode={true}
          speed={3000}
          effect={"fade"}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".banner__dot",
            clickable: true,
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/ironpeak/banner/banner1.svg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    Build Powerful Software for Any Platform
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Custom apps designed to scale your business
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    We develop reliable and high-performance applications across
                    web, mobile, and desktop. From business tools to full-scale
                    platforms, our solutions are built to enhance operations,
                    improve user experience, and support long-term growth.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/ironpeak/banner/banner2.svg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    Reliable IT Infrastructure for Growth
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Secure, efficient systems for daily operations
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    Our team delivers secure and scalable network setups, system
                    integrations, and digital portals. Built for uptime,
                    optimized for performance, and supported with professional
                    IT expertise.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/ironpeak/banner/banner3.svg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    Smart Technology Consulting for Businesses
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Streamline processes with proven IT strategies
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    We guide organizations in improving workflows, automating
                    key operations, and implementing the right technology. Our
                    goal is to enhance efficiency and help your business operate
                    smarter.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner__dot-wrp">
        <div className="dot-light banner__dot"></div>
      </div>
    </section>
  );
};

export default Banner;
