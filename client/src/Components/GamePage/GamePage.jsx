import React from 'react';
import FirstPlayer from '../Player/FirstPlayer';
import SecondPlayer from '../Player/SecondPlayer';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import Players from '../Player/Players';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';

  return (
    <div className="game-page-container">
      <Players />
    </div>
  );
}

export default GamePage;
