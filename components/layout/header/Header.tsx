"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-light.svg";
// import one from "@/public/images/menu/home1-image.jpg";
// import two from "@/public/images/menu/home2-image.jpg";
// import three from "@/public/images/menu/home3-image.jpg";
// import four from "@/public/images/menu/home4-image.jpg";
import OffCanvasMenu from "./OffCanvasMenu";

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // search toggle
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <header
        className={(scrolled ? " aniamted menu-fixed" : " ") + " header-area"}
      >
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li className="has-megamenu">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Our Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="service-solutions">
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="service">Website Solutions</Link>
                      </li>
                      <li>
                        <Link href="service-details">IT Outsourcing</Link>
                      </li>
                      <li>
                        <Link href="service-details">
                          Infrastructure Integrations
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details">
                          Technology Consulting
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="about">Careers</Link>
                  </li>
                  {/* <li>
                    <Link href="/service">Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="service-solutions">IT Solutions</Link>
                      </li>
                      <li>
                        <Link href="service">IT Services</Link>
                      </li>
                      <li>
                        <Link href="service-details">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/case">Pages</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="case">Case Study 01</Link>
                      </li>
                      <li>
                        <Link href="case-2">Case Study 02</Link>
                      </li>
                      <li>
                        <Link href="case-details">Case Study Details</Link>
                      </li>
                      <li>
                        <Link href="team">Our Team</Link>
                      </li>
                      <li>
                        <Link href="team-details">Team Details</Link>
                      </li>
                      <li>
                        <Link href="pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link href="faq">FAQ&apos;s</Link>
                      </li>
                      <li>
                        <Link href="error">404 Error</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="blog">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="blog-standard">Blog Standard</Link>
                      </li>
                      <li>
                        <Link href="blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-lg-inline-block">
              <Link href="contact" className="btn-one">
                Consult Us <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="bars d-block d-lg-none">
              <i
                id="openButton"
                className="fa-solid fa-bars"
                onClick={handleToggleMenu}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />

      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
