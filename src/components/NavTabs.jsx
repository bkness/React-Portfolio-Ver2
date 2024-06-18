import { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

export default function NavTabs() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen((open) => !open)
}
  return (
   <nav className='dvs-header'>
      <ul className='d-flex wrap justify-between align-center'>
        <li>
          <a href="#" className='nav-text my-name'>Brandon Kelly</a>
        </li>
        <li className='dvs-header__trigger' onClick={toggleMenu}>
            Trigger
            </li>
        <li class={`dvs-header__menuItems ${isOpen ? 'is-open' : ''}`}>
        <ul>
          <li className='d-flex align-center wrap'>
            <a href='#' className='nav-text'>About</a>
            <a href='#' className='nav-text'>Portfolio</a>
            <a href='#' className='nav-text'>Contact</a>
          </li>
          </ul>
         </li> 
      </ul>
    </nav>
  );
}


