import React from "react";
import "../App.css";

const HeroBanner = () => {
  return (
    <div className="hero-section">
      <img
        src="https://m.media-amazon.com/images/I/71j0UYQFzfL._SX3000_.jpg"
        alt="Amazon Banner"
        className="hero-image"
      />

      <div className="hero-msg">
        <p>
          You are on Amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
          <a
            href="https://www.amazon.in/"
            target="_blank"
            rel="noreferrer"
          >
            Click here to go to amazon.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;