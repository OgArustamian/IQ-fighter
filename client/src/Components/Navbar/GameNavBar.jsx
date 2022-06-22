import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { leaveRoom } from '../../Redux/Actions/wsAction';

function GameNavbar() {
  const dispatch = useDispatch();

  return (
    <div className="MainNavbar">
      <div className="main-logo">
        <nav className="main-navigation">
          <ul className="navigation">
            <Link onClick={() => dispatch(leaveRoom())} to="/">
              <li className="nav-item">ПОКИНУТЬ ИГРУ</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default GameNavbar;
