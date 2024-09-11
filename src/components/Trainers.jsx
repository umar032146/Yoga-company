import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import teammember1 from './t1.png.webp';
import teammember2 from './t2.png.webp';
import teammember3 from './t3.png.webp';
import './Trainers.css';
const Trainers = () => {
  return (
    <>
    <div className='banner'>
    <h1>OUR TRAINERS</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
 
    <div className='team-row'>
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

        </div>

        <div className='team-row'>
    <div className="team-member">
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
        
        </div>

        <div className='team-row'>
    <div className="team-member">
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
        
        </div>
    </>
  )
}

export default Trainers