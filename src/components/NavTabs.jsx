import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

export default function NavTabs() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div>
      <Link to='/' className='name-link'>Brandon Kelly</Link>
      <label className="hamburger-menu">
        <input type="checkbox" checked={menuOpen} onChange={handleMenuClick} />
      </label>

      {menuOpen && (
        <aside className="sidebar">
          <nav>
            <div className='link-text'>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleMenuClick}>
                <FaHome /> About
              </Link>
            </div>
            <div className='link-text'>
              <Link to="/Resume" className={location.pathname === '/Resume' ? 'active' : ''} onClick={handleMenuClick}>
                <FaBriefcase /> Resume
              </Link>
            </div>
            <div className='link-text'>
              <Link to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active' : ''} onClick={handleMenuClick}>
                <FaUser /> Portfolio
              </Link>
            </div>
            <div className='link-text'>
              <Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''} onClick={handleMenuClick}>
                <FaEnvelope /> Contact
              </Link>
            </div>
          </nav>
        </aside>
      )}
    </div>
  );
}
