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
  console.log('render game page ----> !!!');
  const body = document.querySelector('body');
  const users = useSelector((state) => state.users);
  console.log('usersssssssssss', users);
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

  console.log('=======>>>>>>>>>>>>>>>>>>>>', ws);

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
            <div className={styles['char-block']}>
              { player.position === 'left'
                ? <h3 style={{ color: 'white' }}>{users.username}</h3>
                : <h3 style={{ color: 'white' }}>LOH</h3>}
              <Player url={femaleChar} model={femaleMageModel} position="left" cursor={firstPlayer} width={250} imgWidth={865} />
              <div className={styles.firstChar} />
              <HealthBar p={firstPlayerHp} mt-3 />
            </div>
            <div className={styles['char-block']}>
              { player.position === 'right'
                ? <h3 style={{ color: 'white' }}>{users.username}</h3>
                : <h3 style={{ color: 'white' }}>LOH</h3>}
              <Player url={maleChar} model={maleMageModel} position="right" cursor={secondPlayer} width={600} imgWidth={820} />
              <HealthBar p={secondPlayerHp} mt-3 />
            </div>
          </div>
        )}
      {modal ? <QuizModal /> : null }
    </div>
  );
}

export default GamePage;
