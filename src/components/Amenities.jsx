import React from 'react'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
const Amenities = () => {

const navigate = useNavigate();
const handleClick = () => {
  navigate('/amenities');
};

  return (
   <div id='amenities' >
    <h1 className="head">Discover Our Premium Amenities</h1>
    <div  className='grid-container'>
      <div className="grid-box acard">
        <img src="/images/entert.jpg" alt="amenity" />
        <div className="info">
        <h2 className='info'>Dine Under the Stars</h2>
        <p className='info'>- A Culinary Voyage Awaits!</p>
        <button onClick={handleClick} className='button' >Know more</button>
        </div>
      </div>
     
      <div className="grid-box acard">
        <img src="/images/sho.jpeg" alt="amenity" />
        <div className="info">
        <h2 className='info'>Feel the Beat</h2>
        <p className='info'>- Dazzling Dance Show on Deck!</p>
        <button onClick={handleClick} className='button' >Know more</button>
        </div>
      </div>
      
      <div className="grid-box acard">
        <img src="/images/shopping_am.jpg" alt="amenity" />
        <div className="info">
        <h2 className='info'>Shop the Seas</h2>
        <p className='info'>- Discover Treasures on Board!</p>
        <button onClick={handleClick} className='button' >Know more</button>
        </div>
      </div>
      
     
      
    </div>
    </div>
  )
}

export default Amenities