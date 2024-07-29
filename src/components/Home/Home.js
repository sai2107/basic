import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure this is the correct path
import Infobar from '../Infobar/Infobar'
import Bikes from '../Bikes/Bikes'
import Slider from '../Slider/Slider'

const Home = () => {
  const words = ["Style", "Elegance", "Innovation", "Performance"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="container">
        <h1 className="word1">Let's Elevate Your Ride Experience</h1>
        <h1 className="word2">With Rhyno – Where Superiority Meets</h1>
        <h1 className="word3"><span className="changing-word">{words[index]}</span></h1>
      </div>
      <Infobar/>
      <Bikes/>
      <Slider/>
    </div>
  );
}

export default Home;
