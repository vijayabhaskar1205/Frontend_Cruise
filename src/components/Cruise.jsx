// Cruise.jsx
import React from 'react';
import { GiAnchor } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GrFormLocation } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
const Cruise = ({ cruise }) => {
  const navigate=useNavigate();
  console.log(cruise);
  const handleBook=()=>{
        navigate('/bookingsPage',{state:{cruisename:cruise.name,price:Number(cruise.basePrice)}});
  }
  return (
    <>
    <div className='cruisecontent'>
      <div className='cruise-col1'>
        <p>{cruise.noOfDays} Days on {cruise.departureCountry}</p>
      <h2>{cruise.name}</h2>
      <h5 className='destination'>to {cruise.destination}</h5>
      <p className='description'>{cruise.description}</p>
      <p><BsFillCalendarDateFill color="rgb(17, 199, 240)"/> <span>Sailing</span> {cruise.departure}</p>
      <p className='Additional'><GiAnchor color="rgb(17, 199, 240)"/>  {cruise.specialAccomodation}</p>
       
      <h4>Itinerary</h4>
        <ul>
          {cruise.itineary.map((port, index) => (
            <li key={index}><GrFormLocation /> {port} </li>
            ))}
        </ul>
            </div>
      <div className='cruise-col2'>
        <p>From <span style={{color:'blue'}}> ${cruise.basePrice}</span></p>
        <div className='add-ons'>
          <h5>Free at Sea</h5>
           <h6><span>FREE</span> Open bar</h6>
           <h6><span>FREE</span> Excursions</h6>
           <h6><span>FREE</span> Speciality Dining</h6>
           <h6><span>FREE</span> Wifi</h6>
        </div>
        <div className="special-offer">
          <h5>Special Offers</h5>
          <p>Up to $1,000 off for all cruises</p>
        </div>
            <button onClick={handleBook}>Book Now!</button>
        </div>
      {/* Add more details as needed */}
    </div>
    </>
  );
}

export default Cruise;
