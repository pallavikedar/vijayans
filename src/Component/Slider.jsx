import React, { useState, useEffect } from "react";
import "../Style/slider.css";
import img1 from "../Assets/Images/slider1.jpg";
import img2 from "../Assets/Images/19142597410.png";
import img3 from "../Assets/Images/slider3.webp";
import img4 from "../Assets/Images/slider4.jpg";
const Slider = () => {
  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider_container">
      <div
        className="slider_wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider_image"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
