import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const handleNavLinkClick = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="my-name" to="/">Brandon Kelly</Link>
        <button
          id="navbarToggler"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link' : 'nav-link'}
                onClick={handleNavLinkClick}
              >
                <FaHome className="react-icon" style={{ fontSize: '.8rem' }} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link' : 'nav-link'}
                onClick={handleNavLinkClick}
              >
                <FaBriefcase className="react-icon" style={{ fontSize: '.8rem' }} /> Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link' : 'nav-link'}
                onClick={handleNavLinkClick}
              >
                <FaUser className="react-icon" style={{ fontSize: '.8rem' }} /> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link' : 'nav-link'}
                onClick={handleNavLinkClick}
              >
                <FaEnvelope className="react-icon" style={{ fontSize: '.8rem' }} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
