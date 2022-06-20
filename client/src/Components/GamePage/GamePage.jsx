/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import Player from '../Player/Player';
import { femaleMageModel, maleMageModel } from '../Player/playersModels';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';

  return (
    <div className="game-page-container">
      <Player url={femaleChar} player={femaleMageModel} width={250} imgWidth={865} />
      <Player url={maleChar} player={maleMageModel} width={600} imgWidth={820} />
    </div>
  );
}

export default GamePage;
