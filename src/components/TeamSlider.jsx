// src/Slider.js
import React, { useState, useEffect } from "react";
import "./TeamSlider.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import teammember1 from './t1.png.webp';
import teammember2 from './t2.png.webp';
import teammember3 from './t3.png.webp';
const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides as separate divs
  const slides = [
    <div className="team-slide-content">
        <div className="team-member extra-slide">
         <div className="team-img"><img src={teammember1}/></div>   
         <h1>Lori Kennedy</h1>
         <p className="team-member-job">YOGA INSTRUCTOR</p>
         <p>Yoga & Therapy Certificate of Uttrakhand University</p>
         <div className="icons">
            <FaFacebook className="team-icons" />
            <FaInstagram  className="team-icons" />
            <FaTwitter  className="team-icons"/>
            <FaLinkedin  className="team-icons"/>
            </div>
        </div>

        <div className="team-member">
         <div className="team-img"><img src={teammember2}/></div>   
         <h1>Lori Kennedy</h1>
         <p className="team-member-job">YOGA INSTRUCTOR</p>
         <p>Yoga & Therapy Certificate of Uttrakhand University</p>
         <div className="icons">
            <FaFacebook className="team-icons" />
            <FaInstagram  className="team-icons" />
            <FaTwitter  className="team-icons"/>
            <FaLinkedin  className="team-icons"/>
            </div>
        </div>
    </div>,
    <div className="team-slide-content">
         <div className="team-member extra-slide">
         <div className="team-img"><img src={teammember3}/></div>   
         <h1>Lori Kennedy</h1>
         <p className="team-member-job">YOGA INSTRUCTOR</p>
         <p>Yoga & Therapy Certificate of Uttrakhand University</p>
         <div className="icons">
            <FaFacebook className="team-icons" />
            <FaInstagram  className="team-icons" />
            <FaTwitter  className="team-icons"/>
            <FaLinkedin  className="team-icons"/>
            </div>
        </div>

        <div className="team-member">
         <div className="team-img"><img src={teammember1}/></div>   
         <h1>Lori Kennedy</h1>
         <p className="team-member-job">YOGA INSTRUCTOR</p>
         <p>Yoga & Therapy Certificate of Uttrakhand University</p>
         <div className="icons">
            <FaFacebook className="team-icons" />
            <FaInstagram  className="team-icons" />
            <FaTwitter  className="team-icons"/>
            <FaLinkedin  className="team-icons"/>
            </div>
        </div>
    </div>,
  ];

  // Function to handle slide change
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay slides every 3 seconds
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(autoPlay); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="team-slider">
      <div
        className="team-slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="team-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <button className="team-prev team-button" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="team-next team-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TeamSlider;
