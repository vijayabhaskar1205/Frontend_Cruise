import React from 'react'
import { useEffect } from 'react';
import '../styles/About.css'
import NavbarContent from './NavbarContent'
function AboutPage() {

  
   return (
      <>
      <NavbarContent/>
         
         <div className="abtrow rowone">
            <div className="abtcol1">
               <h2>Know about us</h2>
               <p>
                  D'Cruise believe that every journey should be as
                  remarkable as the destination. Founded with a passion
                  for the sea and a commitment to excellence, we have been
                  creating unforgettable cruise experiences for travelers
                  from all walks of life. Whether you're looking for a relaxing
                  retreat, an adventurous expedition, or a family-friendly getaway,
                  
               </p>
            </div>
            <div className="abtcol2">
               <img src="/images/abt8.jpg" alt="" />
            </div>
         </div>
         <div className="abtrow">

            <div className="abtcol1">
               <h2>Our Mission</h2>
               <p>
                  At D'Cruise, our mission is to craft extraordinary cruise
                  experiences that delight and inspire. We are dedicated to providing
                  luxurious accommodations, world-class dining, and diverse onboard activities,
                  ensuring every journey is unforgettable. Our commitment to exceptional customer
                  service guarantees that each guest feels valued and pampered from embarkation to
                  disembarkation. We strive to explore the world's most stunning destinations while
                  upholding sustainable practices to protect our precious oceans. Join us at D'Cruise,
                  where your dream vacation becomes reality.
               </p>
            </div>
            <div className="abtcol2">
               <img src="/images/abt1.jpg" alt="" />
            </div>
         </div>
         <div className="abtrow">
            <div className="abtcol1">
               <h2>Our Fleets</h2>
               <p>D'Cruise proudly presents a fleet of modern, state-of-the-art ships designed for your ultimate comfort 
                  and enjoyment. Each vessel in our fleet is a masterpiece of maritime engineering, equipped with the 
                  latest amenities to ensure a luxurious and seamless voyage. Onboard, you'll
                   find an array of dining options, from gourmet restaurants to casual eateries, each serving delicious
                    cuisine crafted by renowned chefs. For entertainment, our ships boast grand theaters showcasing Broadway-style shows, 
                    vibrant nightclubs, and serene lounges perfect for relaxation.
               </p>
            </div>
            <div className="abtcol2">
               <img src="/images/abt5.jpg" alt="" />
            </div>
         </div>
         <div className="abtrow">

            <div className="abtcol1">
               <h2>Why to choose us?</h2>
               <p>
                  Choosing D'Cruise means embarking on a journey where every detail is meticulously crafted for your
                  delight. Our luxurious ships offer unparalleled comfort and world-class amenities, ensuring a truly
                  remarkable experience. We prioritize sustainability, implementing eco-friendly practices to protect our oceans. Onboard,
                  enjoy gourmet dining, top-tier entertainment, and a variety of recreational activities.Join D'Cruise for an
                  unforgettable vacation where luxury, adventure, and relaxation blend seamlessly. Trust us to turn your travel
                  dreams into reality.
               </p>
            </div>
            <div className="abtcol2">
               <img src="/images/abt3.jpg" alt="" />
            </div>
         </div>
      </>
   )
}

export default AboutPage;
