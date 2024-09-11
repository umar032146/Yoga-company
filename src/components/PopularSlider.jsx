import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import "./PopularSlider.css";
import classimg from './1.jpg.webp';
import classimg2 from './2.jpg.webp';
import classimg3 from './3.jpg.webp';
import person from './cl1.jpg.webp';
import person2 from './cl2.jpg.webp';
const PopularSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const sliderTrackRef = useRef(null);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    };
  
    // Autoplay setup with useEffect
    useEffect(() => {
      intervalRef.current = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalRef.current); // Clear interval on unmount
    }, []);
  
    useEffect(() => {
      if (sliderTrackRef.current) {
        sliderTrackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }, [currentIndex]);
  
    const handleIndicatorClick = (index) => {
      setCurrentIndex(index);
      clearInterval(intervalRef.current); // Stop autoplay when an indicator is clicked
      intervalRef.current = setInterval(nextSlide, 3000); // Restart autoplay
    };

  return (
    <div className="popular-slider-wrapper">
      <div className="popular-slider-track">
        {/* Slide 1 */}
        <div className={`popular-slider-slide ${currentIndex === 0 ? "popular-slide-active" : ""}`}>
        <div className="popular-slide-content">
           <div className="class">
             <img className="cls-img" src={classimg}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
                <button>BOOK NOW</button>
             </div>
           </div>
           <div className="class extra-class">

           <img src={classimg2}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person2}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
                <button>BOOK NOW</button>
             </div>


           </div>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div className={`popular-slider-slide ${currentIndex === 1 ? "popular-slide-active" : ""}`}>
          <div className="popular-slide-content">
           <div className="class">
             <img src={classimg3}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person2}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
                <button>BOOK NOW</button>
             </div>
           </div>
           <div className="class extra-class">

           <img src={classimg}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
                <button>BOOK NOW</button>
             </div>


           </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="popular-slider-indicators">
        <button
          className={`popular-slider-indicator ${currentIndex === 0 ? "popular-indicator-active" : ""}`}
          onClick={() => handleIndicatorClick(0)}
        ></button>
        <button
          className={`popular-slider-indicator ${currentIndex === 1 ? "popular-indicator-active" : ""}`}
          onClick={() => handleIndicatorClick(1)}
        ></button>
      </div>
    </div>
  );
};

export default PopularSlider;
