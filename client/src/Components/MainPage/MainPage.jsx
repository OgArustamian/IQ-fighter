import React from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizModal from '../QuizModal/QuizModal';

function MainPage() {
//   const { user } = useSelector((state) => state);
//   {user ? 'active' : ''}

  return (
    <div className="page-container">
      <Link to="/game/вставитьID">
        <button className="start-btn" type="button">
          <h1 className="start-title">Начать игру</h1>
        </button>
      </Link>
      <QuizModal />
    </div>
  );
}

export default MainPage;
