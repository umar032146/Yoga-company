import React from 'react'
import './Home.css'
import VerticalSlider from './VerticalSlider';
import logo from './logo-icon.png.webp';
import about from './about.png.webp';
import PopularSlider from './PopularSlider';
import TeamSlider from './TeamSlider';
import about1 from './about-1.png.webp';
import about2 from './about-2.png.webp';
import about3 from './about-3.png.webp';
import video from './video.jpg.webp';
import TestSlider from './TestSlider';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import event1 from './e1.jpg.webp';
import event2 from './e2.jpg.webp';
import event3 from './e3.jpg.webp';
import ContactForm from './ContactForm';
import Map from './Map';
import ImageRow from './ImageRow';
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <VerticalSlider/>
    <div className='welcome'>
     <img src={logo}/>
     <h1>WELCOME TO AHANA</h1>
     <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
    
    <div className='welcome-flex'>
      <div className='welcomeimg'>
      <img src={about}/>
      </div>
      <div className='welcomeinfo'>
       <div className='welcome-sec'>
        <div className='welcome-sec-img'><img src={about1}/></div>  
        <div className='welcome-sec-info'>
          <h1>Full Rejuvenation</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>

       <div className='welcome-sec'>
        <div className='welcome-sec-img'><img src={about2}/></div>  
        <div className='welcome-sec-info'>
          <h1>Extension of Spring</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>

       <div className='welcome-sec'>
        <div className='welcome-sec-img'><img src={about3}/></div>  
        <div className='welcome-sec-info'>
          <h1>Against Aging</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>

       <button>EXPLORE NOW</button>
      </div>
    </div>
    </div>

    <div className='popular-classes'>
      
      <img src={logo}/>
      <h1>POPULAR CLASSES</h1>
      <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
       <PopularSlider/>
    </div>
    <TeamSlider/>
    <TestSlider/>
    <div className='events'>
         <img src={logo}/>
         <h1>UPCOMING EVENTS</h1>
         <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
         <img className='event-vid' src={video}/> 
    </div>
    <div className='event-part'>
      <div className='event-sec'>
     <div className='event-img'><img src={event1}/></div>
     <div className='event-info'>
      <h1>Lola White Yoga Tour</h1>
      <div className='event-info-icon'>
      <FaUser title="User Icon" className='event-icon' />
      <p>Kelly Alexander</p>
      </div>
      
      <div className='event-info-icon'>
      <FaCalendarAlt title="Calendar Icon" className='event-icon'/>
      <p>15 January, 2019</p>
      </div>

      <div className='event-info-icon'>
      <FaMapMarkerAlt title="Map Icon" className='event-icon'/>
      <p>184 Main Collins Street</p>
      </div>
     
     </div>
      </div>


      <div className='event-sec'>
     <div className='event-img'><img src={event2}/></div>
     <div className='event-info'>
      <h1>Free Yoga Madrid</h1>
      <div className='event-info-icon'>
      <FaUser title="User Icon" className='event-icon' />
      <p>Kelly Alexander</p>
      </div>
      
      <div className='event-info-icon'>
      <FaCalendarAlt title="Calendar Icon" className='event-icon'/>
      <p>15 January, 2019</p>
      </div>

      <div className='event-info-icon'>
      <FaMapMarkerAlt title="Map Icon" className='event-icon'/>
      <p>184 Main Collins Street</p>
      </div>
     
     </div>
      </div>

      <div className='event-sec'>
     <div className='event-img'><img src={event3}/></div>
     <div className='event-info'>
      <h1>One Love Dallas</h1>
      <div className='event-info-icon'>
      <FaUser title="User Icon" className='event-icon' />
      <p>Kelly Alexander</p>
      </div>
      
      <div className='event-info-icon'>
      <FaCalendarAlt title="Calendar Icon" className='event-icon'/>
      <p>15 January, 2019</p>
      </div>

      <div className='event-info-icon'>
      <FaMapMarkerAlt title="Map Icon" className='event-icon'/>
      <p>184 Main Collins Street</p>
      </div>
     
     </div>
      </div>


    </div>


    <div className='pricing'>
        
    <img src={logo}/>
         <h1>UPCOMING EVENTS</h1>
         <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>

    <div className='pricing-row'>
      <div className='pricing-sec'>
       <div className='pricing-sec-bg' >
        <h1>BIGINNER</h1>
       
       <div className='pricing-sec-price'>
       <h1>$49</h1>
       <p>PER MONTH</p>
       </div>
       </div>
       <div className='pricing-sec-info'>
       <p>Take Up To 7 Classes</p>
       <p>Available to Anyone</p>
       <p>Towels Included</p>
       <p>Never Expires</p>
       <button>GET STARTED</button>
       </div>
      </div>

      <div className='pricing-sec'>
       <div className='pricing-sec-bg' id='inter'>
        <h1>INTERMEDIATE</h1>
       
       <div className='pricing-sec-price'>
       <h1>$99</h1>
       <p>PER MONTH</p>
       </div>
       </div>
       <div className='pricing-sec-info'>
       <p>Take Up To 7 Classes</p>
       <p>Available to Anyone</p>
       <p>Towels Included</p>
       <p>Never Expires</p>
       <button>GET STARTED</button>
       </div>
      </div>

      <div className='pricing-sec'>
       <div className='pricing-sec-bg' id='adv'>
        <h1>ADVANCED</h1>
       
       <div className='pricing-sec-price'>
       <h1>$49</h1>
       <p>PER MONTH</p>
       </div>
       </div>
       <div className='pricing-sec-info'>
       <p>Take Up To 7 Classes</p>
       <p>Available to Anyone</p>
       <p>Towels Included</p>
       <p>Never Expires</p>
       <button>GET STARTED</button>
       </div>
      </div>

      <div className='pricing-sec'>
       <div className='pricing-sec-bg' id='pro'>
        <h1>PROFESSIONAL</h1>
       
       <div className='pricing-sec-price'>
       <h1>$49</h1>
       <p>PER MONTH</p>
       </div>
       </div>
       <div className='pricing-sec-info'>
       <p>Take Up To 7 Classes</p>
       <p>Available to Anyone</p>
       <p>Towels Included</p>
       <p>Never Expires</p>
       <button>GET STARTED</button>
       </div>
      </div>
      
      </div>     
    </div>


   <div className='contact'>

    <div className='contact-row'>
      <Map/>
     <ContactForm/>

    </div>
      
   </div>


    </>
  )
}

export default Home