import React from 'react';
import { Link } from 'react-scroll';
import './styles/Navbar.css';
import logo from './imgs/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Digital Den Logo" className="logo-image" />
        <span className="logo-text">Digital Den</span>
      </div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            HomePage
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
