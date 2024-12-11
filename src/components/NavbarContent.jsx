import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavbarStyle.css';
import {  useNavigate } from 'react-router-dom';
const NavbarContent = () => {
   const navigate=useNavigate();
  const Logout=()=>{
    localStorage.removeItem('token');
    // navigate('/');
  }
  return (
    <section className='navbar'>
      <Navbar expand="lg" style={{ backgroundColor: 'rgb(2, 45, 95)' }} fixed='top'>
        <Container>
          <Navbar.Brand href="#home"><img src='/images/dcruise-high-resolution-logo-transparent.png' ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <nav className="nav-links">
                <Link to='/' className='btn nav-link'>Home</Link>
                <Link to='/explore' className='btn nav-link'>Explore</Link>
                <Link to='/about' className='btn nav-link'>About</Link>
                <Link to='/amenities' className='btn nav-link'>Amenities</Link>
                <Link to='/login' className='btn nav-link'>Login</Link>
                <Link to='/signup' className='btn nav-link'>SignUp</Link>
                <Link to='/' onClick={Logout} className='btn nav-link'>Logout</Link>
                {/* <Link to='/login' className='btn nav-link'>Book Now!</Link> */}
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarContent;
