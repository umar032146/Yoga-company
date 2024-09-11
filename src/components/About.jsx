import React from 'react'
import './About.css';
import TeamSlider from './TeamSlider';
import TestSlider from './TestSlider';
import logo from './logo-icon.png.webp';
import about1 from './about-1.png.webp';
import about2 from './about-2.png.webp';
import about3 from './about-3.png.webp';
import about4 from './about-4.png.webp';
import blogimg1 from './b1.jpg.webp';
import blogimg2 from './b2.jpg.webp';
import blogimg3 from './b3.jpg.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const percentage=85;
const percentage1=75;
const percentage2=90;
const percentage3=78;

const About = () => {
  return (
    <>
     <div className='banner'>
    <h1>ABOUT</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className='about-row'>
    <div className='welcome-sec about-welcome'>
        <div className='welcome-sec-img about-welcome-img'><img src={about1}/></div>  
        <div className='welcome-sec-info about-welcome-sec'>
          <h1>Full Rejuvenation</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>

       <div className='welcome-sec about-welcome'>
        <div className='welcome-sec-img about-welcome-img'><img src={about2}/></div>  
        <div className='welcome-sec-info about-welcome-sec'>
          <h1>Extension of Spring</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>

       <div className='welcome-sec about-welcome'>
        <div className='welcome-sec-img about-welcome-img'><img src={about3}/></div>  
        <div className='welcome-sec-info about-welcome-sec'>
          <h1>Against Aging</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </div>
       <div className='welcome-sec about-welcome'>
        <div className='welcome-sec-img about-welcome-img'><img src={about4}/></div>  
        <div className='welcome-sec-info about-welcome-sec'>
          <h1>Slim Body</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        
        </div>
       </div>
    </div>


    <div className='about-percent'>

<div className='data'>
  <h1>WHAT WE DO</h1>
  <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
  <div className="percentage-bar">
      <label className="percentage-label">Breathing</label>
      <span className="tag" id='breath'>{percentage}%</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage}%` }}
        >
          
        </div>
      </div>
    </div>

    <div className="percentage-bar">
      <label className="percentage-label" >Metabolism</label>
      <span className="tag" id='meta'>{percentage1}%</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage1}%` }}
        >
          
        </div>
      </div>
    </div>

    <div className="percentage-bar">
      <label className="percentage-label">Flexability</label>
      <span className="tag" id='flex'>{percentage2}%</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage2}%` }}
        >
          
        </div>
      </div>
    </div>

    <div className="percentage-bar">
      <label className="percentage-label" >Strongness</label>
      <span className="tag" id='strong'>{percentage3}%</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage3}%` }}
        >
          
        </div>
      </div>
    </div>
</div>
    </div>

<div className='about-classes '>
    <img src={logo}/>
      <h1>OUR TRAINER YOGA</h1>
      <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
      </div>      
      <TeamSlider/>
      <TestSlider/>
      <div className='about-classes '>
    <img src={logo}/>
      <h1>COURSE BENEFITS</h1>
      <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
      </div>


      <div className='blog-row'>

   <div className='blog-sec'>
    <div className='blog-img'><img src={blogimg1}/></div>
    <div className='blog-info'>
      <h1>Yoga for Slim Physique</h1>
      <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
    </div>
    <div className='blog-socials'>
      <p>Health and Beauty</p>
      <div className='blog-icons'>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
        </div> 
    </div>
   </div>

   <div className='blog-sec'>
    <div className='blog-img'><img src={blogimg2}/></div>
    <div className='blog-info'>
      <h1>Yoga for Slim Physique</h1>
      <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
    </div>
    <div className='blog-socials'>
      <p>Health and Beauty</p>
      <div className='blog-icons'>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
        </div> 
    </div>
   </div>

   <div className='blog-sec'>
    <div className='blog-img'><img src={blogimg3}/></div>
    <div className='blog-info'>
      <h1>Yoga for Slim Physique</h1>
      <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
    </div>
    <div className='blog-socials'>
      <p>Health and Beauty</p>
      <div className='blog-icons'>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
        </div> 
    </div>
   </div>



   </div>    
    </>
  )
}

export default About