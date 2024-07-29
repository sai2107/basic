import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
        <p><strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a></p>
        <p><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
      </div>
      <div className="about-rhyno">
        <h2>About Rhyno EV</h2>
        <p>Rhyno EV is revolutionizing eMobility with cutting-edge electric vehicles that offer unmatched performance, safety, and sustainability. Our innovative designs and advanced technology provide a thrilling ride experience while ensuring environmental responsibility. Join us in redefining the future of transportation with Rhyno EV.</p>
      </div>
    </div>
  );
}

export default Contact;
