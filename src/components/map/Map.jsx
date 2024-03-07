import React from "react";

const Map = () => {
  return (
    <section id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.9599775882257!2d4.452075999999999!3d51.916441299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434bfe23b8931%3A0x17b2b0dd95462fd0!2sRDMP%20Conceptstore!5e0!3m2!1sen!2sbd!4v1709783619673!5m2!1sen!2sbd"
        width="100%"
        height="555"
        style={{ border: 0 }}
        title="map"
        allowFullScreen=""
        loading="lazy"></iframe>
    </section>
  );
};

export default Map;
