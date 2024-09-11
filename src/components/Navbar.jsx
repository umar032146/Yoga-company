import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import {FaInstagram} from 'react-icons/fa'
import './Navbar.css'
import logo from './logo.png.webp';
import col1 from './r1.jpg.webp';
import col2 from './r2.jpg.webp';
import col3 from './r3.jpg.webp';
import col4 from './r4.jpg.webp';
import col5 from './r5.jpg.webp';
import col6 from './r6.jpg.webp';
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Close the menu if the search is opened
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Close the search if the menu is opened
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"><img src={logo}/></div>
        <div className="navbar-links">
          <Link to="./home">Home</Link>
          <Link to="./about">About</Link>
          <Link to="./classes">Classes</Link>
          <Link to="./trainers">Trainers</Link>
          <Link to="./events">Events</Link>
          <Link to="./blogs">Blog</Link>
          <Link to="./contact">Contact</Link>
        </div>
        <div className="navbar-icons">
          <button onClick={toggleSearch} className="icon-button">
            <SearchIcon className="icon" />
          </button>
          <button onClick={toggleMenu} className="icon-button">
              {isMenuOpen ? <XIcon className="icon" /> : <MenuIcon className="icon" />}
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button onClick={toggleSearch} className="icon-button">
              <XIcon className="icon" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className="image-row">
          <div className="image-container">
        <img src={col1} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>
      <div className="image-container">
        <img src={col2} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>

      <div className="image-container">
        <img src={col3} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>
      
      </div>


      <div className="image-row">
          <div className="image-container">
        <img src={col4} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>
      <div className="image-container">
        <img src={col5} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>

      <div className="image-container">
        <img src={col6} alt="Image 1" className="image" />
        <div className="overlay">
        <FaInstagram  className="image-icon" />
          <h2 className="overlay-heading">Ahana.yoga</h2>
          
        </div>
      </div>
      
      </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
