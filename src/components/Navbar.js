import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;