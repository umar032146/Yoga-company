import React from 'react'
import './Events.css';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import event1 from './e1.jpg.webp';
import event2 from './e2.jpg.webp';
import event3 from './e3.jpg.webp';
import event4 from './e4.jpg.webp';
import event5 from './e5.jpg.webp';
import event6 from './e6.jpg.webp';
import event7 from './e7.jpg.webp';
import event8 from './e8.jpg.webp';

const Events = () => {
  return (
    <>
      <div className='banner'>
    <h1>ALL EVENTS</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className='search-event'>
   <p>Showing 8 classes of 30 classes</p>

   <div className='event-input-row'>
   <input type='date' placeholder='Event Date'/>
   <input type='text' placeholder='Search'/>
   <input type='text' placeholder='Location'/>
   <button>FIND EVENT</button>
   </div>

    </div>

<div className='event-row'>
    <div className='event-sec eventsec'>
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


      <div className='event-sec eventsec'>
     <div className='event-img'><img src={event2}/></div>
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

      </div>

      <div className='event-row'>
    <div className='event-sec eventsec'>
     <div className='event-img'><img src={event3}/></div>
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


      <div className='event-sec eventsec'>
     <div className='event-img'><img src={event4}/></div>
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

      </div>


      <div className='event-row'>
    <div className='event-sec eventsec'>
     <div className='event-img'><img src={event5}/></div>
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


      <div className='event-sec eventsec'>
     <div className='event-img'><img src={event6}/></div>
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

      </div>


      <div className='event-row'>
    <div className='event-sec eventsec'>
     <div className='event-img'><img src={event7}/></div>
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


      <div className='event-sec eventsec'>
     <div className='event-img'><img src={event8}/></div>
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

      </div>



    </>
  )
}

export default Events