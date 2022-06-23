import React from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../Redux/Actions/userAction';

function MainNavbar() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(userLogOut());
  };

  return (
    <div className="MainNavbar">
      <div className="main-logo">
        <nav className="main-navigation">
          <ul className="navigation">
            <Link to="/">
              <li className="nav-item">НА ГЛАВНУЮ</li>
            </Link>
            <Link to="/about">
              <li className="nav-item">ОБ ИГРЕ</li>
            </Link>
            {!users.username
              ? (
                <Link to="/signin">
                  <li className="nav-item">АВТОРИЗАЦИЯ</li>
                </Link>
              )
              : (
                <>
                  <Link to="/ladderboard">
                    <li className="nav-item">РЕЙТИНГ</li>
                  </Link>
                  <Link to="/" onClick={logOutHandler}>
                    <li className="nav-item">ВЫЙТИ</li>
                  </Link>
                </>
              )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default React.memo(MainNavbar);
