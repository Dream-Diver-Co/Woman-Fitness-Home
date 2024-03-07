import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Event from "../components/Event/Event";
import Video from "../components/video/Video";
import Gallery from "../components/gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Event />
      <Video />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
