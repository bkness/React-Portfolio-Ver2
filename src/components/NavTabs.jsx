import { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

export default function NavTabs() {
  
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
        <div className='link-text'>
         <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome /> About
          </Link>
          </div>
          <div className='link-text'>
          <Link to="/Resume" className={location.pathname === '/Resume' ? 'active' : ''}>
            <FaBriefcase /> Resume
          </Link>
          </div>
          <div className='link-text'>
          <Link to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active' : ''}>
            <FaUser /> Portfolio
          </Link>
          </div>
          <div className='link-text'>
          <Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>
            <FaEnvelope /> Contact
          </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}