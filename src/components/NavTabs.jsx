import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Brandon Kelly's Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                <FaBriefcase /> Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                <FaUser /> Resume
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                <FaEnvelope /> Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
