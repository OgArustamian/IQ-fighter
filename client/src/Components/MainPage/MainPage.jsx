import React from 'react';
import './MainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizModal from '../QuizModal/QuizModal';
import { useWsContext } from '../Context/Context';
import { messageFind } from '../../Redux/Actions/wsAction';

function MainPage() {
//   const { user } = useSelector((state) => state);
//   {user ? className="start-btn" : className="disabled"}

  return (
    <div className="page-container">
      <Link to="/game">
        <button className="start-btn" type="button">
          <h1 className="start-title">Начать игру</h1>
        </button>
      </Link>
      <QuizModal />
    </div>
  );
}

export default MainPage;
