import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import '../styles/bookings.css';
import Navbar from './NavbarContent'
const Bookings = () => {
  const location = useLocation();
  const { cruisename = '', price = 0 } = location.state || {};

  const navigate=useNavigate();


  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noOfAdults, setNoOfAdults] = useState(1);
  const [noOfRooms, setNoOfRooms] = useState(1);
  const [noOfChildren, setNoOfChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(''); // Single room selection

  const roomOptions = [
    { type: 'balcony', label: 'Balcony View- $150',rate: 150 },
    { type: 'inside', label: 'Inside- $100',rate: 100 },
    { type: 'oceanview', label: 'Ocean View- $120',rate: 120 },
    { type: 'suite', label: 'Suite- $250',rate: 250  }
  ];
  const handleRoomChange = (e) => {
    const [roomtype, rate] = e.target.value.split('-');
    setSelectedRoom({ roomtype, rate: parseInt(rate, 10) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adultprice=noOfAdults*price;
    const childrenprice=noOfChildren*(price*0.75);
    const totalprice=adultprice+childrenprice;
    const roomrate=noOfRooms*selectedRoom.rate;
    // Handle form submission (e.g., save booking details, navigate to confirmation page, etc.)
    const bookingDetails={
      name,
      email,
      cruisename,
      adultprice,
      childrenprice,
      price,
      totalprice,
      roomrate
      
    };
    console.log('Booking Details:', {

      bookingDetails
    });

    navigate('/payment',{state:{bookingDetails:bookingDetails}});
    setName('');
    setEmail('');
    setNoOfAdults(1);
    setNoOfRooms(1);
    setNoOfChildren(0);
    setSelectedRoom({ roomtype: '', rate: 0 });
  };

  return (
    <>
    <Navbar/>
    <div className='bookingform-box '>
    <div className='booking-container'>
      <h1>Book Your Cruise</h1>
      {cruisename && <h4>You're booking: <strong>{cruisename}</strong></h4>}
      <p>Maximum 4 members are allowled in a room</p>
      <br />

      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>
        <div className='form-row'>
          <label htmlFor="Rooms">Number of Rooms</label>
          <input
            id="noOfRooms"
            type="number"
            min="1"
            value={noOfRooms}
            onChange={(e) => setNoOfRooms(e.target.value)}
            required
          />
          
        </div>
        <div className='form-row'>
          <label htmlFor="adults">Number of Adults:</label>
          <input
            id="adults"
            type="number"
            min="1"
            value={noOfAdults}
            onChange={(e) => setNoOfAdults(e.target.value)}
            required
          />
        </div>

        <div className='form-row'>
          <label htmlFor="children">Number of Children:</label>
          <input
            id="children"
            type="number"
            min="0"
            value={noOfChildren}
            onChange={(e) => setNoOfChildren(e.target.value)}
          />
        </div>
        <label>Room Type:</label>
        <div className='form-row roomtype'>
        
          {roomOptions.map((option) => (
            <div key={option.type} className='checkbox-row'>
              <input
                type="checkbox"
                id={option.type}
                value={`${option.type}-${option.rate}`}
                checked={selectedRoom.roomtype === option.type}
                onChange={handleRoomChange}
              />
              <label htmlFor={option.type}>{option.label}</label>
            </div>
          ))}
        </div>

        <button 
        // onClick={makePayment}
        type="submit" className='booking-button'>Confirm Booking</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Bookings;
