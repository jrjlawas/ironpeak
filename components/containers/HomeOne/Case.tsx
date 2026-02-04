"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import offer1 from "@/public/images/ironpeak/offerings/offer1.svg";
import offer2 from "@/public/images/ironpeak/offerings/offer2.svg";
import offer3 from "@/public/images/ironpeak/offerings/offer3.svg";
import offer4 from "@/public/images/ironpeak/offerings/offer4.svg";
import offer5 from "@/public/images/ironpeak/offerings/offer5.svg";

const Case = () => {
  return (
    <section className="case-area pt-120 pb-120" id="case-section">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              What We Deliver
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Smart, Scalable, and Reliable IT Solutions
            </h2>
          </div>
          <Link
            href="case"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            view All Services <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
      <div className="case__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          speed={800}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".case__dot",
            clickable: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div>
              <div className="case__item">
                <div className="image case__image">
                  <Image src={offer1} alt="Image" priority />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">Application</span>
                  <h3>
                    <Link
                      href="case-details"
                      className="text-white primary-hover"
                    >
                      Software Development
                    </Link>
                  </h3>
                </div>
                <Link href="case-details" className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="case__item">
                <div className="image case__image">
                  <Image src={offer2} alt="Image" priority />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">Solution</span>
                  <h3>
                    <Link
                      href="case-details"
                      className="text-white primary-hover"
                    >
                      Website Solution
                    </Link>
                  </h3>
                </div>
                <Link href="case-details" className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="case__item">
                <div className="image case__image">
                  <Image src={offer3} alt="Image" priority />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">Solution</span>
                  <h3>
                    <Link
                      href="case-details"
                      className="text-white primary-hover"
                    >
                      IT Outsourcing
                    </Link>
                  </h3>
                </div>
                <Link href="case-details" className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="case__item">
                <div className="image case__image">
                  <Image src={offer4} alt="Image" priority />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">Infrastructure</span>
                  <h3>
                    <Link
                      href="case-details"
                      className="text-white primary-hover"
                    >
                      Infrastructure Integration
                    </Link>
                  </h3>
                </div>
                <Link href="case-details" className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="case__item">
                <div className="image case__image">
                  <Image src={offer5} alt="Image" priority />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">Consultancy</span>
                  <h3>
                    <Link
                      href="case-details"
                      className="text-white primary-hover"
                    >
                      Technology Consulting
                    </Link>
                  </h3>
                </div>
                <Link href="case-details" className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="mt-60 text-center "
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <div className="dot case__dot"></div>
      </div>
    </section>
  );
};

export default Case;
