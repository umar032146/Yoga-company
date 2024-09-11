import React from 'react'
import Map from './Map';
import ContactForm from './ContactForm';
import './Contact.css'
const Contact = () => {
  return (
    <>
     <div className='banner'>
    <h1>CONTACT</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <Map/>

    <div className='contact-section'>
      <div className='contact-info-sec'>
        <h3>Visit the Yoga Ahana</h3>
        <p> <i className="fa fa-map-marker"></i>184 Main Collins Street</p>
        <h3>Message Us</h3>
        <p><i className="fa fa-phone"></i> +123-456-7890</p>
        <p> <i className="fa fa-envelope"></i> info@example.com</p>
        <h3>Opening Hours</h3>
        <div className="open-time-item">
            <i className="fa fa-clock"></i> Mon - Fri: 6:30am - 07:45pm
          </div>
          <div className="open-time-item">
            <i className="fa fa-clock"></i> Sat - Sun: 8:30am - 05:45pm
          </div>
      </div>

      <ContactForm/>
    </div>

    </>
  )
}

export default Contact