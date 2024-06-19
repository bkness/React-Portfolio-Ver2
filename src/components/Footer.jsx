import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/bkness" target="_blank" rel="noopener noreferrer"
        aria-label="Visit Brandon Kelly's GitHub profile"
        >
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/brandon-kelly-367b3730b/" target="_blank" rel="noopener noreferrer"
        aria-label="Visit Brandon Kelly's LinkedIn profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
