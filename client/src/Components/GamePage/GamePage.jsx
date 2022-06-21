import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import { useWsContext } from '../Context/Context';
import { messageFind } from '../../Redux/Actions/wsAction';
/* eslint-disable max-len */
import Player from '../Player/Player';
import { femaleMageModel, maleMageModel } from '../Player/playersModels';
import Spinner from '../Spinner/Spinner';
import { JOIN_ROOM } from '../../Redux/Types/types';
import HealthBar from '../HealthBar/HealthBar';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';

  const { spinner } = useSelector((state) => state);
  const dispatch = useDispatch();

  const room = useSelector((state) => state.ws);
  const { player } = useSelector((state) => state);
  const {
    ws, firstPlayerHp, secondPlayerHp, hero,
  } = useWsContext();

  useEffect(() => {
    dispatch(messageFind(ws));
  }, []);

  const [firsPlayer, setFirstPlayer] = useState({ cursor: '', active: 'false' });
  const [secondPlayer, setSecondPlayer] = useState({ cursor: '', active: 'false' });

  function checkTurn() {
    if (player.position === 'left' && player.turn) {
      setFirstPlayer({
        cursor: "url('../../img/cursor-default.png'), auto",
        active: false,
      });
      setSecondPlayer({
        cursor: "url('../../img/sword-attack-icon.png'), auto",
        active: true,
      });
    } else if (player.position === 'right' && player.turn) {
      setFirstPlayer({
        cursor: "url('../../img/sword-attack-icon.png'), auto",
        active: true,
      });
      setSecondPlayer({
        cursor: "url('../../img/cursor-default.png'), auto",
        active: false,
      });
    } else if (player.turn === false) {
      setFirstPlayer({
        cursor: "url('../../img/stop-cursor.svg'), auto",
        active: false,
      });
      setSecondPlayer({
        cursor: "url('../../img/stop-cursor.svg'), auto",
        active: false,
      });
    }
  }

  useEffect(() => {
    checkTurn();
  }, [player.turn]);

  return (
    <div>
      {spinner !== JOIN_ROOM
        ? <Spinner />
        : (
          <div className="game-page-container">
            <Player url={femaleChar} model={femaleMageModel} position="left" cursor={firsPlayer} width={250} imgWidth={865} />
            {/* <HealthBar p={firstPlayerHp} mt-3 /> */}
            <Player url={maleChar} model={maleMageModel} position="right" cursor={secondPlayer} width={600} imgWidth={820} />
            {/* <HealthBar p={secondPlayerHp} mt-3 /> */}
          </div>
        )}
    </div>
  );
}

export default GamePage;
