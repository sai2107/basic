import React, { useState, useEffect } from 'react';
import './Slider.css';
import assets from '../../assets/assets'; // Adjust the path according to your project structure

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    assets.red,
    assets.black,
    assets.blue,
    assets.golden,
    assets.grp,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `rotateY(${currentIndex * -72}deg)` }}>
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <div className="carousel-item-box">
              <img src={src} alt={`Slide ${index}`} />
              <button className="checkout-button"><a href="/product3">Check-out</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
