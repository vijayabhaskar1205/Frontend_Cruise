import React, { useRef } from 'react';
import '../styles/footer.css'
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from "react-icons/fa";
import { GiBattleship } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
// import { Link as ScrollLink } from 'react-scroll';
import { FaTwitter,FaLinkedin,FaYoutube,FaFacebook} from "react-icons/fa";

const Footer = () => {
    const navRef=useRef();
  return (
    <div className='footer'>
       <div className='row1'>
      <div className='fcol'>
      <nav ref={navRef} >
      <nav className="footer-nav-links">
                <Link to='/' className='footer-nav-link'><IoMdHome /> Home</Link>
                <Link to='/explore' className='footer-nav-link'><BsSearch /> Explore</Link>
                <Link to='/about' className='footer-nav-link'><GiBattleship /> About</Link>
                <Link to='/amenities' className='footer-nav-link'><GrGallery /> Amenities</Link>
               
              
              </nav>
    </nav>
      </div>
      <div className="fcol">
     <h5>D'Cruise Holdings Ltd.</h5>
     <p>123 Ocean Avenue, Suite 456,</p>
     <p>Harbor City, ST 78910,</p>
     <p>USA</p>
     <p>Phone: +1 (123) 456-7890</p>
      
    </div>
      <div className="fcol">
      <FaQuoteLeft />
        <p>The cure for anything is salt water: sweat, tears, or the sea.</p>
        <br />
        <h5>  - Isak Dinesen</h5>
      </div>
    </div> 
    <div className='row2'>
      <p>© 2024 D'Cruise Holdings Ltd.</p>
      <ul>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaYoutube /></a></li>
          <li><a href="#"><FaFacebook /></a></li>
      </ul>
    </div>
  
    </div>
  )
}

export default Footer
