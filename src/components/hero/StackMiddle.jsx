import React, { useState, useEffect } from "react";
import "../hero/Hero.css";
import slide1 from "../../assets/images/connor-coyne-OgqWLzWRSaI-unsplash.jpg";
import slide2 from "../../assets/images/fancy-crave-qowyMze7jqg-unsplash.jpg";
import slide3 from "../../assets/images/thomas-serer-alUSb8lCE5s-unsplash.jpg";
import slide4 from "../../assets/images/EFC_Gallery2.jpg";

const StackMiddle = () => {
  // Array of image URLs
  const images = [slide1, slide2, slide3, slide4];

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

  // useEffect to change the image every 6 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(changeImage, 4000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div class="stack stack-rotate2 position-relative">
      <div class="card">
        <a href="/">
          <div class="image">
            <img src={images[(currentImageIndex + 1) % images.length]} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default StackMiddle;
