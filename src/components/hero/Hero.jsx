import React, { useState, useEffect } from 'react';
import '../hero/Hero.css'
import slide1 from '../../assets/images/product2.webp'
import slide2 from '../../assets/images/product5.webp'
import slide3 from '../../assets/images/product7.webp'
import slide4 from '../../assets/images/poll1.webp'
import slide5 from '../../assets/images/poll6.webp'
import slide6 from '../../assets/images/poll.jpg'
import StackLeft from './StackLeft';
import StackMiddle from './StackMiddle';

const Hero = () => {
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

  // useEffect to change the image every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(changeImage, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="hero">
            <div className="hero-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lore loreo leoewp lkoew</p>
              <h4>heading loram</h4>
              <button type='btn' className='btn bg-black text-light'>shop now</button>
            </div>
            <StackLeft/>
            <StackMiddle/>
            <div class="stack stack-rotate3">
              <div class="card">
                <div class="image">
                  <img src={images[(currentImageIndex + 2) % images.length]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
