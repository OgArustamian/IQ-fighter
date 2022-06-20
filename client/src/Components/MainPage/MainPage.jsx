import React, { useEffect } from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HealthBar from '../HealthBar/HealthBar';

function MainPage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = "url('https://img2.goodfon.ru/original/1920x1080/4/a8/muzhchina-zhenschina-mag-magiya-boy.jpg')";

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
      <HealthBar />
    </div>
  );
}

export default MainPage;
