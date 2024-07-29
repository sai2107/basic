import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Ensure this is the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="/about" className="footer-link">Privacy Policy</a>
          <a href="/about" className="footer-link">Refund Policy</a>
        </div>

        <div className="footer-center">
          <a href="/about" className="footer-link">Website Policy</a>
          <a href="/contact-us" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-right">
          <a href="/compare" className="footer-link">Products</a>
          <a href="/prebook" className="footer-link">Rentals</a>
        </div>
      </div>

      <div className="footer-socials">
        <a href="https://www.instagram.com/your-company" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/your-company" className="footer-icon">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
