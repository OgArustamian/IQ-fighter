import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leaveGame } from '../../Redux/Actions/playerAction';
import { useWsContext } from '../Context/Context';

function GameNavbar() {
  const dispatch = useDispatch();

  return (
    <div className="MainNavbar">
      <div className="main-logo">
        <nav className="main-navigation">
          <ul className="navigation">
            <a onClick={() => dispatch(leaveGame())} href="/">
              <li className="nav-item">ПОКИНУТЬ ИГРУ</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default GameNavbar;
