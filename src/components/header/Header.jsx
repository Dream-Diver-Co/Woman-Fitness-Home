import React from "react";
import logo from "../../assets/images/logo_icon_19.svg";
import Button from "../button/Button";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar heder-bg navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="nav-brand-height" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
