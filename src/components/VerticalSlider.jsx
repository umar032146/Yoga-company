import React, { useState, useEffect } from 'react';
import './VerticalSlider.css'; // Import the CSS for styling
import img1 from './1.png.webp';
import img2 from './2.png.webp';
import img3 from './3.png.webp';
const VerticalSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to go to the next slide
    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 slides
    };

    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Assuming there are 3 slides
    };

    // Set up autoplay using useEffect
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
            <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
                    <img className='slide1img' src={img1}/>
                </div>
             <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
                <div className='slide2'>
                 <div className='slide2img'> <img src={img2}/></div>
                 <div className='slide2info'>
                    <h1>Get SLIM AND TONE WITH YOGA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos-trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>Register Now</button>
                 </div>

                </div>
                
                   
                </div>
            
            <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
                <div className='slide3'>
                <h1>REDUCE YOUR STRESS</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                <button>Register Now</button>
                <img src={img3}/>
                </div>
                </div>
            </div>
            <div className="slider-controls">
                <button onClick={goToPreviousSlide}>▲</button>
                <button onClick={goToNextSlide}>▼</button>
            </div>
            <div className="slider-indicators">
                <span
                    className={`indicator ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => setActiveIndex(0)}
                ></span>
                <span
                    className={`indicator ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => setActiveIndex(1)}
                ></span>
                <span
                    className={`indicator ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => setActiveIndex(2)}
                ></span>
            </div>
        </div>
    );
};

export default VerticalSlider;
