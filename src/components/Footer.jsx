import React from 'react';
import '../Styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Fields Manager</h2>
        <p className="footer-text">Your favorite sports booking platform since 2017!</p>
        <p className="footer-text">Fields Manager © 2022</p>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Help</h3>
        <ul className="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Customer service</a></li>
          <li><a href="#">How to guide</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;