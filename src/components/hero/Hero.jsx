import React, { useState, useEffect } from "react";
import "../hero/Hero.css";
// import StackLeft from "./StackLeft";
// import StackMiddle from "./StackMiddle";
import Button from "../button/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import StackRight from "./StackRight";
import HeroSlider from "./HeroCard";

const Hero = () => {
  // ---------> event animation  <-------------
  const texts = ["Event", "Pool", "Music", "Sports"];
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, texts.length]);
  return (
    <div className="bg-dark my-5">
      <div className="container-fluid ">
        <div className="row">
          <div className="hero">
            <div className="hero-text">
              <div className="tex-head">
                <h1 className="fw-bold text-light" data-aos="fade-right">
                  A place for
                  <FaRegArrowAltCircleRight className="m-3" />
                  <span style={{ opacity, transition: "opacity 0.5s ease" }}>
                    {texts[index]}
                  </span>{" "}
                </h1>
              </div>
              <hr />
              <div className="text-primary hero-btn-middle fw-medium">
                <Button className="text-center" link="/" title="Book Now" />
                <p></p>
              </div>
            </div>
            <div className="slide-main" data-aos="fade-left">
              <HeroSlider />
              {/* <StackLeft />
              <StackMiddle />
              <StackRight /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
