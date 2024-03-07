import React, { useState, useEffect } from "react";
import "../hero/Hero.css";
import slide1 from "../../assets/images/evant/evant1.jpg";
import slide2 from "../../assets/images/evant/evant2.jpg";
import slide3 from "../../assets/images/evant/evant3.jpg";
import slide4 from "../../assets/images/evant/evant4.jpg";
import slide5 from "../../assets/images/evant/evant5.jpg";
import slide6 from "../../assets/images/evant/evant6.jpg";

const StackLeft = () => {
  // Array of image URLs
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // Increment current image index
      let newIndex = prevIndex + 1;

      // Reset index if it exceeds the length of the images array
      if (newIndex >= images.length) {
        newIndex = 0;
      }

      return newIndex;
    });
  };

  // useEffect to change the image every 9 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(changeImage, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div class="stack stack-rotate1 position-relative">
      <div class="card">
        <a href="/">
          <div class="image">
            <img src={images[currentImageIndex]} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default StackLeft;
