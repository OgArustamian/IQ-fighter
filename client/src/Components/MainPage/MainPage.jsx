import React from 'react';
import './MainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizModal from '../QuizModal/QuizModal';
import { useWsContext } from '../Context/Context';
import { messageFind } from '../../Redux/Actions/wsAction';

function MainPage() {
//   {user ? className="start-btn" : className="disabled"}

  const { users } = useSelector((state) => state);

  return (
    <div className="page-container">
      {users.id
        ? (
          <Link to="/game">
            <button className="start-btn" type="button">
              <h1 className="start-title">Начать игру</h1>
            </button>
          </Link>
        )
        : (
          <button className="start-btn disabled" type="button">
            <h1 className="start-title text-disabled">Начать игру</h1>
          </button>
        )}
    </div>
  );
}

export default MainPage;
