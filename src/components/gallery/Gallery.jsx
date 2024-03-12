import React, { useState } from "react";
import "./gallery.css";
import image0 from "../../assets/images/Sports/sports3.jpeg";
import image2 from "../../assets/images/Sports/sports4.jpeg";
import image3 from "../../assets/images/evant/evant5.jpg";
import image4 from "../../assets/images/poll6.webp";
import image5 from "../../assets/images/poll1.webp";
import image6 from "../../assets/images/evant/evant6.jpg";
import image7 from "../../assets/images/Sports/sports7.jpeg";
import image8 from "../../assets/images/poll.jpg";
import image9 from "../../assets/images/evant/evant3.jpg";
import image1 from "../../assets/images/evant/evant3.jpg";
import { lazy } from "react";
const Gallery = () => {
  const [match, setmatch] = useState(false);
  const [images, setimages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image6,
    image7,
    image8,
    image9,
    image0,
  ]);
  return (
    <>
      <div className="text-center text-light my-5">
        <h1>
          {" "}
          Few <span className="text-scend fw-bold nuts-f">Moments</span> At
          ROTTERDAMP
        </h1>
      </div>
      <div className="gallery">
        <div className="column">
          {images.map((image, index) => (
            <div className="pics" key={index}>
              <img
                className={`image-${index}`}
                src={image}
                alt={index}
                onLoad={lazy}
                data-aos={index % 2 == 0 ? "zoom-in-down" : "zoom-in-up"}
                data-aos-duration="1000"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
