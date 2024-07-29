import React, { useState, useEffect } from 'react';
import './Infobar.css';

const Infobar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const infoPoints = [
    {
      heading: "LFP Battery",
      text: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!"
    },
    {
      heading: "Wider Tyres",
      text: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand."
    },
    {
      heading: "Range Prediction",
      text: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery."
    },
    {
      heading: "Extraordinary Experience",
      text: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!"
    },
    {
      heading: "Rugged and Simple Design",
      text: "We've had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infoPoints.length);
    }, 3000); // Change info point every 3 seconds
    return () => clearInterval(interval);
  }, [infoPoints.length]);

  return (
    <div className="carousel1">
      <div className="carousel-inner1" style={{ transform: `rotateY(${currentIndex * -72}deg)` }}>
        {infoPoints.map((info, index) => (
          <div className="carousel-item1" key={index}>
            <div className="carousel-item-box1">
              <h2>{info.heading}</h2>
              <p>{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infobar;
