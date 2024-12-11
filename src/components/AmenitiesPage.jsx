import React from 'react'
import '../styles/amenities.css'
import '../styles/home.css'
import NavbarContent from './NavbarContent'
const AmenitiesPage = () => {
  return (
   <>
    <NavbarContent/> 

    <div className='amenitiesPage'>

        <div className="dining">
        <div className='amrow1'>
            <h2 className='title'>DINING OPTIONS FOR EVERY DAY AND NIGHT</h2>
            <p>When you cruise with us, the dining options are as 
               diverse as the flavors find on each menu. 
               From casual bites to elevated dinner and cocktail 
               spots that raise the bar, find something onboard 
               for every craving and occasion during your cruise.</p>
               </div>
            <div className="grid-container">
                <div className="grid-box acard">
                    <img src="/images/d3.jpeg" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>CASUAL DINING</h2>
                    <p className='info'>Great flavor doesn’t need to come with lots of fuss. Enjoy grab-and-go goodness and amazing eats at casual, complimentary Windjammer, Dog House, and Pizza</p>
                    </div>
                </div>
                <div className="grid-box acard">
                    <img src="/images/d1.jpg" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>DINE IN</h2>
                    <p className='info'>Experience the thrill of zip lines and high-flying adventures, offering breathtaking 
                    views and an adrenaline rush. Perfect for those seeking excitement and a unique perspective.</p>
                    </div>
                </div>
                <div className="grid-box acard">
                    <img src="/images/d4.jpg" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>BARS & LOUNGES</h2>
                    <p className='info'>If you’re craving cocktails, we offer amazing bars onboard our cruises where
                    the vibe is always right and the drinks are always delicious.</p>
                    </div>
                </div>
      
            </div>
        </div>
     <div className="features">
        <div className='amrow2'>
            <h2 className='title'>ONBOARD ACTIVITIES & ENTERTAINMENT</h2>
            <p>Embark on an unforgettable journey with D'Cruise, where each day offers new 
               thrills and adventures. Kids will love the award-winning Adventure Ocean® 
               youth program, giving parents a chance to relax and enjoy their own time onboard.</p>
               </div>
            <div className="grid-container">
                
                <div className="grid-box acard">
                    <img src="/images/activity_am.webp" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Ocean Thrills</h2>
                    <p className='info'>Enjoy thrilling water activities, including surfing on the FlowRider and sliding down 
                    the Ultimate Abyss. Fun and excitement await at every splash.</p>
                    </div>
                </div>
                <div className="grid-box acard">
                    <img src="/images/zip.jpg" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Sun,Sea and Splash</h2>
                    <p className='info'>Experience the thrill of zip lines and high-flying adventures, offering breathtaking 
                    views and an adrenaline rush. Perfect for those seeking excitement and a unique perspective.</p>
                    </div>
                </div>
                <div className="grid-box acard">
                    <img src="/images/acti_am.png" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Game On</h2>
                    <p className='info'>Engage in exciting sports like basketball, pool and more, offering fun and competition
                     for everyone. Whether you’re shooting hoops or perfecting your pool game, there’s always a game waiting for you.</p>
                    </div>
                </div>
      
            </div> 
        </div>
        <div className="facilities">
        <div className='amrow3'>
            <h2 className='title'>ULTIMATE RELAXATION AND FITNESS EXPERIENCE</h2>
            <p>Discover a world of relaxation and wellness with our top-notch facilities. 
               Stay fit at the state-of-the-art gym, unwind at the luxurious spa, and 
               indulge in a range of rejuvenating treatments. Whether you’re looking for a 
               vigorous workout or a peaceful escape, our onboard amenities
               cater to all your needs.</p>
               </div>
        <div className="grid-container">
                <div className="grid-box acard">
                    <img src="/images/jym.jpg" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Sweat with a View</h2>
                    <p className='info'>Stay active with our state-of-the-art gym, featuring the latest equipment for all your 
                    fitness needs. Whether you’re lifting weights or taking a cardio class, our facilities 
                    help you maintain your workout routine.
                   </p>
                </div>
            </div>
            <div className="grid-box acard">
                    <img src="/images/spa_am.webp" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Seaside Serenity</h2>
                    <p className='info'>Unwind at our luxurious spa, where you can indulge in soothing treatments
                     and relaxation. Enjoy a range of massages and therapies designed to rejuvenate and refresh.</p>
                </div>
            </div>
            <div className="grid-box acard">
                    <img src="/images/pool_party.webp" alt="amenity" />
                    <div className="info">
                    <h2 className='info'>Pool Parties</h2>
                    <p className='info'>Dive into fun at our lively pool parties, where you can enjoy music, dancing, 
                    and refreshing drinks. Perfect for soaking up the sun and socializing with friends.</p>
                </div>
            </div>
            </div>
        </div> 
            
    </div>
    </>
  )
}

export default AmenitiesPage
