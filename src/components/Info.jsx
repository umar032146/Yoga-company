import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaGlobe, FaClock } from 'react-icons/fa';
import './Info.css'
const Info = () => {
  return (
    <>
    <div className='Info'>

    <div className='info-sec'>
    <FaMapMarkerAlt className='logonav' /><p> 184 Main Collins Street</p>
    <FaPhone  className='logonav'/><p>(965) 436 3274</p>
    </div>
    <div className='info-sec'>
    <FaClock  className='logonav'/><p> Mon - Fri: 6:30am - 07:45pm</p>
    <FaGlobe  className='logonav'/><p>Language</p>
   </div>

    </div>
    </>
  )
}

export default Info