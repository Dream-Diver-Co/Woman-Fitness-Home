import React, { useState, useRef } from "react";
import "./video.css";
import video from "../../assets/images/video/Dream Diver.mp4";
const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="full-video">
      <video ref={videoRef} className="video" onClick={togglePlay} loop>
        <source src={video} type="video/mp4" />
        {/* Add more <source> elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      <div className={`controls ${isPlaying ? "hide" : ""}`}>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default Video;
