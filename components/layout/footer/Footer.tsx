import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Link href="/" className="logo mb-30">
              <Image src={Logo} alt="Image" priority />
            </Link>
            <p>
              We deliver reliable IT outsourcing, software development,
              infrastructure solutions, and technology consulting to help
              businesses operate smarter. We build scalable systems, modern
              applications, and efficient processes that support growth, improve
              performance, and drive long-term success.
            </p>
            <div className="social-icon">
              <Link
                href="https://www.facebook.com/profile.php?id=61580416365995"
                target="_"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                href="https://linkedin.com/in/ironpeak-technologies-08a69939a"
                target="_"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Technology Services</h3>
            <ul>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Software
                  Development
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Website
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> IT
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  Infrastructure Integration
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Technology
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Quick Link</h3>
            <ul>
              <li>
                <Link href="about">
                  <i className="fa-regular fa-angles-right me-1"></i> About
                  IronPeak
                </Link>
              </li>
              <li>
                <Link href="service">
                  <i className="fa-regular fa-angles-right me-1"></i> Our
                  Services
                </Link>
              </li>
              <li>
                <Link href="case">
                  <i className="fa-regular fa-angles-right me-1"></i> Articles
                </Link>
              </li>
              <li>
                <Link href="team">
                  <i className="fa-regular fa-angles-right me-1"></i> Our Team
                </Link>
              </li>
              <li>
                <Link href="pricing">
                  <i className="fa-regular fa-angles-right me-1"></i> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Contact Us</h3>
            <p className="mb-20">
              DCRD Bldg. Purok 1 Tubod, Isabel Leyte, Philippines
            </p>
            <ul className="footer-contact">
              <li>
                <i className="fa-regular fa-clock"></i>
                <div className="info">
                  <h5>Opening Hours:</h5>
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <p>+63 927 775 7470</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500">
              &copy; All Copyright 2024 by <Link href="/">Gratech</Link>
            </p>
            <ul
              className="d-flex align-items-center flex-wrap gap-4 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <li>
                <Link href="/">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
