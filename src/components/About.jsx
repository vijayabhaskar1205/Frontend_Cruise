import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {

  const navigate = useNavigate();
  const handletoAbout = () => {
    navigate('/about');
  }

  
  return (
    <>
     <div className="landing-container">
      <img src="/images/land6.jpg" alt="Landing" className="landing-image" />
    </div>
     <h1 className='abt-head'>About us</h1>
    <div  className="arow">
      <div className='abt-col1'>
      <h1 id="about">Set Sail for Adventure: Your Dream Cruise Awaits!</h1>
      <p >Discover a world of unforgettable journeys with us. Whether you 
        seek serene ocean escapes or thrilling voyages, our expertly 
        curated cruises promise unparalleled experiences. Set sail to 
        breathtaking destinations, from the pristine beaches of the 
        Caribbean to the majestic fjords of Norway. Indulge in luxurious
        amenities, including gourmet dining, world-class entertainment,
        and rejuvenating spa treatments. Our exceptional customer service 
        ensures every aspect of your journey is seamless and enjoyable. 
        Create cherished memories as you explore new horizons and embrace 
        new adventures. Join us on board and let your dream cruise adventure begin!</p>
        <button className='button'onClick={handletoAbout} >Explore Ship</button>
         </div>
         <img src="/images/scrusie.jpg" alt="" className='abt-col2'/>
    
    </div>
    </>
  )
}

export default About;
