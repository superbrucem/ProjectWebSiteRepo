import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Project Dashboard</h4>
          <p>A comprehensive project management solution designed to help teams track and manage their projects efficiently.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: example@email.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Location: San Francisco, CA</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Project Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;