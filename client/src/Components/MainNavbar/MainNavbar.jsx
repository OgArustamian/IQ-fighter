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
              <li className="nav-item">НА ГЛАВНУЮ</li>
            </Link>
            <Link to="/ladderboard">
              <li className="nav-item">РЕЙТИНГ</li>
            </Link>
            <Link to="/signin">
              <li className="nav-item">АВТОРИЗАЦИЯ</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
