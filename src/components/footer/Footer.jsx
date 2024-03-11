import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo_icon_19.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Map from "../map/Map";
import ReservationCard from "../reservationCard/ReservationCard";
const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-dark text-white text-center text-md-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                loading="lazy"
                src={logo}
                alt="logo1"
                className="mb-3"
                width={50}
                height={50}
              />
              <div className="editable-text left">
                <h2></h2>
                <p> Rotterdamp &nbsp;</p>
                <p>
                  <strong>Locate</strong>
                  <br />
                  Gerrit Jan Mulderstraat 4B,
                  <br />
                  3023 RE Rotterdam,
                  <br />
                  Netherlands
                </p>{" "}
                <p>
                  <strong>Opening hours</strong>
                  <br />
                  Every day 08:00-20:00, except Sunday.
                </p>
              </div>

              <ul className="icon-center social-nav navbar-nav flex-row justify-content-center justify-content-md-start mb-4">
                <li className="nav-item">
                  <a
                    className="nav-link p-2 text-white"
                    href="/"
                    rel="noreferrer"
                    target="_blank">
                    <FaFacebook className="fs-2" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link p-2  text-white"
                    href="/"
                    rel="noreferrer"
                    target="_blank">
                    <FaInstagram className="fs-2" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link p-2  text-white"
                    href="/"
                    rel="noreferrer"
                    target="_blank">
                    <IoLogoLinkedin className="fs-2" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div
              className="col-lg-3"
              style={{ overflow: "hidden", height: "350px" }}>
              <Map />
            </div> */}
            {/* ------menu item footer----- */}
            {/* <div className="col-md-6 col-lg-3 mb-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/about">
                      AboutUs
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/service">
                      Services
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/career">
                      Career
                    </a>
                </li>
              </ul>
            </div> */}
            <div className="col">
              <h2>CONTACT</h2>
              <div className="editable-text left">
                <h2></h2>{" "}
                <p>
                  <strong>Telefoon</strong>
                  <br />
                  <a href="Tel:+316%202818%203284">+31108480412</a>
                  &nbsp;(WF82+HR Rotterdam, Netherlands)
                  <br />
                  +31108480412
                </p>{" "}
                <p>
                  <strong>E-mail</strong>
                  <br />
                  <a href="/">info@rotterdamp.com</a>
                  <br />
                  <a href="/">example.com</a>
                </p>
              </div>
            </div>
            {/* start card */}
            <div className="col">
              <ReservationCard />
              {/* end card */}
            </div>
          </div>
        </div>
      </footer>
      <div id="dream-diver" className="bg-dark w-100 text-white mb-0">
        <div className="container">
          <p className="text-end mb-0">
            Developed
            <a
              href="https://www.linkedin.com/in/sakib6619/"
              className=" text-light">
              {" "}
              by
            </a>{" "}
            <a
              href="https://dreamdiver.nl/"
              rel="noreferrer"
              className="text-dreamDiver">
              DREAM DIVER
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
