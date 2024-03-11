import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo_icon_19.svg";
import Button from "../button/Button";
import "./Header.css";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar ${scrolling ? "bg-dark" : "heder-bg"}  navbar-expand-lg bg-body-tertiary fixed-top`}
        data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="nav-brand-height" alt="logo" />
          </a>
          <button
            className="navbar-toggler color-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-uppercase fw-bold fs-5"
            id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Pool
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Print
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <Button link="/" title="Book Now" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
