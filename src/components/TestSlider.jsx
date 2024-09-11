// src/Slider.js
import React, { useState, useEffect } from "react";
import "./TestSlider.css";
import test1 from './cl1.jpg.webp';
import test2 from './cl2.jpg.webp';
const TestSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Define the slides as separate divs
    const slides = [
      <div className="test-slide-content">
        <img src={test1}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus asperiores alias, vitae minus possimus totam sapiente sint hic ratione consequuntur repudiandae fugit id eveniet distinctio impedit cum maiores ab!</p>
        <h1>Denis Thompson</h1>
        <h3>Designer</h3>
      </div>,
      <div className="test-slide-content">
        <img src={test2}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus asperiores alias, vitae minus possimus totam sapiente sint hic ratione consequuntur repudiandae fugit id eveniet distinctio impedit cum maiores ab!</p>
        <h1>Denis Thompson</h1>
        <h3>Designer</h3>
      </div>,
    ];
  
    // Function to handle slide change
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    // Autoplay slides every 3 seconds
    useEffect(() => {
      const autoPlay = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(autoPlay); // Cleanup interval on component unmount
    }, []);
  
    // Function to handle indicator click
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    return (
      <div className="test-slider">
        <div
          className="test-slides-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="test-slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className="test-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`test-indicator ${currentSlide === index ? "test-active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

export default TestSlider;
