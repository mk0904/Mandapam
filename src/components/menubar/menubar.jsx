import React, { useState } from 'react';
import './menubar.css';
import { NavLink } from 'react-router-dom';

function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='br-header'>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink onClick={closeMenu} to="/" className="main-logo">mandapam</NavLink>
        </div>
        
        {/* Toggle button for smaller screens */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        {/* Menu items (show/hide based on menuOpen state) */}
        <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink onClick={closeMenu} to="/resorts">Resorts</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/vendors">Vendors</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/plan-your-wedding">Plan your wedding</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/rivaaya">Rivaaya</NavLink></li>
          </ul>
        </div>
        
        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink className='mandapamfc' to="/mfc">mandapam <span className='s1'>for <span className='s2'>corporates</span></span></NavLink></li>
            <li><NavLink onClick={closeMenu} to="/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menubar;
