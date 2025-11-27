"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import One from "@/public/images/ironpeak/welcome/img1.svg";
import Two from "@/public/images/ironpeak/welcome/img2.svg";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-area sub-bg pt-120" id="about-section">
        <div
          className="about__shape "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        ></div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-6 "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
                <div className="image sm-image">
                  <Image src={Two} alt="Image" priority />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  Welcome to IronPeak Technologies
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Experienced Professionals Delivering Reliable IT Solutions
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  IronPeak Technologies is powered by a team of highly trained
                  professionals dedicated to delivering smart, reliable, and
                  efficient IT solutions for your business. With over 30+ years
                  of combined industry experience, we build systems and services
                  that support real operational needs—whether you’re a growing
                  local business or a large international enterprise.
                </p>
              </div>
              <div
                className="row g-4 "
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Trusted Expertise</h4>
                      <p>Delivering reliable solutions backed by experience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Five} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Client-First Approach</h4>
                      <p>Focused on results that grow businesses.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about__info mt-50 "
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link href="about" className="btn-one">
                  Learn More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
