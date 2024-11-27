import React from 'react';
import './css/navbar.css';


/**
 * CustomNavbar - A custom React-Bootstrap Navbar component
 *
 * This component renders a navigation bar with the following links:
 * Home, Courses, Licensing Assistance, Events, Membership & Services, Frequently Asked Questions,
 * About Utah HBA, Sponsors, and Contact Us.
 *
 */
const CustomNavbar = () => {
  return (
    <div>
      <div className="nav-flex-box">
        <div className="navbar-nav">
        <div className="nav-bar-flex-box">
          <img src="https://hbautah.com/wp-content/uploads/2019/03/logo.jpg" alt="Logo" className="navbar-brand" />
          <div className='gray-line'></div>
          <a href="#" className="nav-link" class="nav-bar-text">Home</a>
          <a href="#" className="nav-link" class="nav-bar-text">Courses</a>
          <a href="#" className="nav-link" class="nav-bar-text">Licensing Assistance</a>
          <a href="#" className="nav-link" class="nav-bar-text">Events</a>
          <a href="#" className="nav-link" class="nav-bar-text">Membership & Services</a>
          <a href="#" className="nav-link" class="nav-bar-text">Frequently Asked Questions</a>
          <a href="#" className="nav-link" class="nav-bar-text">About Utah HBA</a>
          <a href="#" className="nav-link" class="nav-bar-text">Sponsors</a>
          <a href="#" className="nav-link" class="nav-bar-text">Contact Us</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
