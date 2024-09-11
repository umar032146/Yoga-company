import React from 'react';
import './ImageRow.css'; // Make sure to import CSS for styling
import {FaInstagram} from 'react-icons/fa'
import col1 from './r1.jpg.webp';
import col2 from './r2.jpg.webp';
import col3 from './r3.jpg.webp';
import col4 from './r4.jpg.webp';
import col5 from './r5.jpg.webp';
import col6 from './r6.jpg.webp';
const ImageRow = () => {
  return (
    <div className="image-row">
      <div className="image-container">
        <img src={col1} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>
      <div className="image-container">
        <img src={col2} alt="Image 2" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
        </div>
      </div>
      <div className="image-container">
        <img src={col3} alt="Image 3" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
        </div>
      </div>
      <div className="image-container">
        <img src={col4} alt="Image 4" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2> 
        </div>
      </div>
      <div className="image-container">
        <img src={col5} alt="Image 5" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
        </div>
      </div>
      <div className="image-container">
        <img src={col6} alt="Image 6" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>          
        </div>
      </div>
    </div>
  );
};

export default ImageRow;
