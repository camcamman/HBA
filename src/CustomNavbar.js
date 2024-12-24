import React, { useState } from 'react';
import './css/navbar.css';

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav-flex-box">
        {/* Hamburger Menu for Mobile */}
        <div
          className={`mobile-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Dropdown Menu */}
        <div className={`mobile-dropdown ${menuOpen ? "active" : ""}`}>
          <a href="#" className="nav-bar-text">Home</a>
          <a href="#" className="nav-bar-text">Courses</a>
          <a href="#" className="nav-bar-text">Licensing Assistance</a>
          <a href="#" className="nav-bar-text">Events</a>
          <a href="#" className="nav-bar-text">Membership & Services</a>
          <a href="#" className="nav-bar-text">Frequently Asked Questions</a>
          <a href="#" className="nav-bar-text">About Utah HBA</a>
          <a href="#" className="nav-bar-text">Sponsors</a>
          <a href="#" className="nav-bar-text">Contact Us</a>
        </div>

        {/* Full Navbar (hidden on mobile) */}
        <div className="nav-bar-flex-box">
          <img src="https://hbautah.com/wp-content/uploads/2019/03/logo.jpg" alt="Logo" className="navbar-brand" />
          <a href="#" className="nav-bar-text">Home</a>
          <a href="#" className="nav-bar-text">Courses</a>
          <a href="#" className="nav-bar-text">Licensing Assistance</a>
          <a href="#" className="nav-bar-text">Events</a>
          <a href="#" className="nav-bar-text">Membership & Services</a>
          <a href="#" className="nav-bar-text">Frequently Asked Questions</a>
          <a href="#" className="nav-bar-text">About Utah HBA</a>
          <a href="#" className="nav-bar-text">Sponsors</a>
          <a href="#" className="nav-bar-text">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
