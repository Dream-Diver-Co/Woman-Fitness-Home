import React, { useState, useEffect } from "react";
import "./Hero.css";
import "./HeroCard.css";
import slide1 from "../../assets/images/evant/evant1.jpg";
import slide2 from "../../assets/images/evant/evant2.jpg";
import slide3 from "../../assets/images/evant/evant3.jpg";
import slide4 from "../../assets/images/evant/evant4.jpg";
import slide5 from "../../assets/images/evant/evant5.jpg";
import slide6 from "../../assets/images/evant/evant6.jpg";
import sports1 from "../../assets/images/Sports/sports1.jpg";
import sports2 from "../../assets/images/Sports/sports2.jpeg";
import sports3 from "../../assets/images/Sports/sports3.jpeg";
import sports4 from "../../assets/images/Sports/sports4.jpeg";
import sports5 from "../../assets/images/Sports/sports5.jpeg";
import sports6 from "../../assets/images/Sports/sports6.jpeg";
import sports7 from "../../assets/images/Sports/sports7.jpeg";
import sports8 from "../../assets/images/Sports/sports8.jpg";
import poll1 from "../../assets/images/poll1.webp";

const HeroSlider = () => {
  // Define image arrays for each stack
  const stack1Images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const stack2Images = [slide2, slide3, slide4, slide1];
  const stack3Images = [
    sports1,
    sports2,
    sports3,
    sports4,
    sports5,
    sports6,
    sports7,
    sports8,
    poll1,
  ];

  // State to track the current image index for each stack
  const [currentStack1Index, setCurrentStack1Index] = useState(0);
  const [currentStack2Index, setCurrentStack2Index] = useState(0);
  const [currentStack3Index, setCurrentStack3Index] = useState(0);

  // Function to change the image for each stack
  const changeStack1Image = () => {
    setCurrentStack1Index((prevIndex) => (prevIndex + 1) % stack1Images.length);
  };

  const changeStack2Image = () => {
    setCurrentStack2Index((prevIndex) => (prevIndex + 1) % stack2Images.length);
  };

  const changeStack3Image = () => {
    setCurrentStack3Index((prevIndex) => (prevIndex + 1) % stack3Images.length);
  };

  // useEffect to change the image for each stack at different intervals
  useEffect(() => {
    const interval1 = setInterval(changeStack1Image, 5000);
    const interval2 = setInterval(changeStack2Image, 4000);
    const interval3 = setInterval(changeStack3Image, 3000);

    // Clear intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="hero-slider">
      {/* Stack 1 */}
      <div className="stack stack-rotate1 position-relative">
        <div className="slide-card">
          <a href="/">
            <div className="image">
              <img
                src={stack1Images[currentStack1Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Stack 2 */}
      <div className="stack stack-rotate2 position-relative">
        <div className="slide-card">
          <a href="/">
            <div className="image">
              <img
                src={stack2Images[currentStack2Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Stack 3 */}
      <div className="stack stack-rotate3 position-relative">
        <div className="slide-card">
          <a href="/">
            <div className="image">
              <img
                src={stack3Images[currentStack3Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
