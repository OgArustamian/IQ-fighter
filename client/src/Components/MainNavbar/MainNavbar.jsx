import React from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <div className="MainNavbar">
      <div className="main-logo">
        <nav className="main-navigation">
          <ul className="navigation">
            <Link to="/">
              <li className="nav-item">HOME</li>
            </Link>
            <Link to="/ladderboard">
              <li className="nav-item">LADDERBOARD</li>
            </Link>
            <Link to="/login">
              <li className="nav-item">LOGIN</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
