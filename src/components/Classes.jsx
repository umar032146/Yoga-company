import React from 'react'
import './Classes.css'
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import classimg from './1.jpg.webp';
import classimg2 from './2.jpg.webp';
import classimg3 from './3.jpg.webp';
import person from './cl1.jpg.webp';
import person2 from './cl2.jpg.webp';
import event3 from './e3.jpg.webp';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import video from './video.jpg.webp';
const Classes = () => {
  return (
    <>
      <div className='banner'>
    <h1>CLASSES</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>


   <div className='classes'>
    <div className='available-classes'>
  
  <div className='shown'>
    <p>Showing 8 classes of 30 classes</p>
    <select>
    <option value="option1">Default</option>
        <option value="option2">Oldest</option>
        <option value="option3">Newest</option>
    </select>
  </div>

<div className='class-row'>
          <div className="class class-section">
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
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


           <div className="class class-section">
             <img className="cls-img" src={classimg2}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person2}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


</div>


<div className='class-row'>
          <div className="class class-section">
             <img className="cls-img" src={classimg3}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


           <div className="class class-section">
             <img className="cls-img" src={classimg2}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person2}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


</div>


<div className='class-row'>
          <div className="class class-section">
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
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


           <div className="class class-section">
             <img className="cls-img" src={classimg3}/>
             <h1>TRADITIONAL HATHA</h1>
             <p><FaCalendarAlt className="class-icon"/> Mon, Wed , Fri  <FaClock className="class-icon" /> 6:30pm - 7:30pm</p>
             <p className="class-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!</p>
             <div className="class-person">
                <div className="class-personimg"><img src={person2}/></div>
                <div className="class-person-info">
                    <h1>Victoria Webb</h1>
                    <p> Yoga Trainer</p>
                </div>
             </div>
             <button className='booking-btn'>BOOK NOW</button>
           </div>


</div>


    </div>
   
   <div className='search-classes'>
    <h3>SEARCH CLASSES</h3>
   <select>
    <option value="option1">Choose Category</option>
        <option value="option2">Oldest</option>
        <option value="option3">Newest</option>
    </select>

    <select>
    <option value="option1">Choose Level</option>
        <option value="option2">first</option>
        <option value="option3">Second</option>
    </select>

    <select>
    <option value="option1">Choose Trainer</option>
        <option value="option2">Trainer 1</option>
        <option value="option3">Trainer 2</option>
    </select>

    <h3>Filter by Day</h3>
   <label className='day'><input type='checkbox'/> Monday</label>
   <label className='day'><input type='checkbox'/> Tuesday</label>
   <label className='day'><input type='checkbox'/> Wednesday</label>
   <label className='day'><input type='checkbox'/> Thursday</label>
   <label className='day'><input type='checkbox'/> Friday</label>
   <label className='day'><input type='checkbox'/> Saturday</label>
   <label className='day'><input type='checkbox'/> Sunday</label>
   <button className='booking-btn'>Filter</button>
   <h3>POPULAR CLASSES</h3>

   <div className='event-sec class-event'>
     <div className='event-img class-event-img'><img src={event3}/></div>
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

      <img className='event-vid class-vid' src={video}/> 
   </div>
   </div>


    </>
  )
}

export default Classes