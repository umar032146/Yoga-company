import React from 'react';
import './Footer.css'; // Ensure you have this CSS file
import logo from './logo-3.png.webp';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Your one-stop solution for all educational needs. 
          Providing quality education online and offline.
        </p>
        <div className="footer-icons">
          <div className="footer-icon">
            <i className="fa fa-phone"></i> +123-456-7890
          </div>
          <div className="footer-icon">
            <i className="fa fa-envelope"></i> info@example.com
          </div>
          <div className="footer-icon">
            <i className="fa fa-map-marker"></i> 123 Education St, Learnville
          </div>
        </div>
      </div>

      <div className="footer-section company-section">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="#online-education">Online Education</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#special-issues">Special Issues</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section about-section">
        <h4>About Us</h4>
        <ul className="footer-links">
          <li><a href="#our-vision">Our Vision</a></li>
          <li><a href="#our-mission">Our Mission</a></li>
          <li><a href="#meet-the-team">Meet The Team</a></li>
          <li><a href="#introduce">Introduce</a></li>
          <li><a href="#customer-service">Customer Service</a></li>
          </ul>
      </div>

      <div className="footer-section open-time-section">
        <h4>Open Time</h4>
        <div className="open-time">
          <div className="open-time-item">
            <i className="fa fa-clock"></i> Mon - Fri: 6:30am - 07:45pm
          </div>
          <div className="open-time-item">
            <i className="fa fa-clock"></i> Sat - Sun: 8:30am - 05:45pm
          </div>
        </div>
        <input className='input' placeholder='Email'/>
      </div>
    </footer>
    <div className='footer2'>
     <div className='footer-icon'>
     <FaFacebook className="footer-icons" />
       <FaInstagram  className="footer-icons" />
            <FaTwitter  className="footer-icons"/>
            <FaLinkedin  className="footer-icons"/>
     </div>
     <div>Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Colorlib</div>
    </div>
    </div>    
  );
};

export default Footer;
