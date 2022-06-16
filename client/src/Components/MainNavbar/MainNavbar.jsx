import React from 'react';
import './MainNavbar.css';

function MainNavbar() {
  return (
    <div className="MainNavbar">
      <div className="main-logo">
        <nav className="main-navigation">
          <ul className="navigation">
            <a href="/">
              <li className="nav-item">HOME</li>
            </a>
            <a href="/">
              <li className="nav-item">LADDERBOARD</li>
            </a>
            <a href="/">
              <li className="nav-item">LOGIN</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
