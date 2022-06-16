import React from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';

function MainPage() {
//   const { user } = useSelector((state) => state);
//   {user ? 'active' : ''}

  return (
    <div className="page-container">
      <button className="start-btn" type="button">
        <h1 className="start-title">Начать игру</h1>
      </button>
    </div>
  );
}

export default MainPage;
