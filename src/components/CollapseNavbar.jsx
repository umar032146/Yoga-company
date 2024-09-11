import React, { useState } from 'react';
import './Collapse.css'; // Optional for styling
import { Link } from 'react-router-dom';
const CollapseNavbar = () => {
    // State to handle the navbar collapse
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbarC">
           
            <div className={`navbar-linksC ${isOpen ? 'active' : ''}`}>
            <Link to="./home">Home</Link>
          <Link to="./about">About</Link>
          <Link to="./classes">Classes</Link>
          <Link to="./trainers">Trainers</Link>
          <Link to="./events">Events</Link>
          <Link to="./blogs">Blog</Link>
          <Link to="./contact">Contact</Link>
            </div>
            <div className="navbar-toggleC" onClick={toggleNavbar}>
                <span className="menu-iconC">{isOpen ? '✖' : '☰'}</span>
            </div>
        </nav>
    );
};

export default CollapseNavbar;
