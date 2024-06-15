import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/bkness" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a> */}
        <a href="https://www.linkedin.com/in/brandon-kelly-367b3730b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2024 Brandon Kelly. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
