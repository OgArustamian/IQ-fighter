import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './GamePage.module.css';
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
import QuizModal from '../QuizModal/QuizModal';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  const { modal } = useWsContext();
  const spinner = useSelector((state) => state.spinner);
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const {
    ws, firstPlayerHp, secondPlayerHp, readyState,
  } = useWsContext();

  useEffect(() => {
    if (ws.readyState === 1) {
      dispatch(messageFind(ws));
      console.log(ws);
    }
  }, [readyState]);

  const [firstPlayer, setFirstPlayer] = useState({ cursor: '', active: 'false' });
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
          <div className={styles['game-page-container']}>
            {modal ? <QuizModal /> : null }
            <div className={styles['char-block']}>
              <Player url={femaleChar} model={femaleMageModel} position="left" cursor={firstPlayer} width={250} imgWidth={865} />
              <HealthBar p={firstPlayerHp} mt-3 />
            </div>
            <div className={styles['char-block']}>
              <Player url={maleChar} model={maleMageModel} position="right" cursor={secondPlayer} width={600} imgWidth={820} />
              <HealthBar p={secondPlayerHp} mt-3 />
            </div>
          </div>
        )}
    </div>
  );
}

export default GamePage;
