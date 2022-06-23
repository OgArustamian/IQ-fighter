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
import GameNavbar from '../Navbar/GameNavBar';
import GameOverModal from '../GameOverModal/GameOverModal';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  const { modal, isDraw, setIsDraw } = useWsContext();
  const spinner = useSelector((state) => state.spinner);
  const player = useSelector((state) => state.player);
  console.log('PLAYER=====>>>>', player);
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

  const [firstPlayer, setFirstPlayer] = useState({ cursor: '', active: 'false', nameColor: 'nikNameDef' });
  const [secondPlayer, setSecondPlayer] = useState({ cursor: '', active: 'false', nameColor: 'nikNameDef' });

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
        nameColor: 'nikNameAttack',
      });
      setSecondPlayer({
        cursor: "url('../../img/stop-cursor.svg'), auto",
        active: false,
        nameColor: 'nikNameAttack',
      });
    }
  }

  useEffect(() => {
    checkTurn();
  }, [player.turn]);

  useEffect(() => {
    setTimeout(() => {
      setIsDraw(false);
    }, 3000);
  }, [isDraw]);

  return (
    <div className={styles.gameContainer}>
      <GameNavbar />
      {spinner !== JOIN_ROOM
        ? <Spinner />
        : (

          <div>
            <video className={styles.videoBackground} autoPlay loop muted src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/4TBVITQDP0AW1650382032717.mp4" />
            <div className={styles['game-page-container']}>
              <div className={styles['char-block']}>
                { player.position === 'left'
                  ? <h3 className={styles[firstPlayer.nameColor]}>{player.firstName}</h3>
                  : null}
                <Player url={femaleChar} model={femaleMageModel} position="left" cursor={firstPlayer} width={250} imgWidth={865} />
                <div className={styles.firstChar} />
                <HealthBar hp={firstPlayerHp} mt-3 />
              </div>

              <p className={isDraw ? styles['draw-message'] : styles.hidden}>АТАКА ПАРИРОВАНА</p>

              <div className={styles['char-block']}>
                { player.position === 'right'
                  ? <h3 className={styles[secondPlayer.nameColor]}>{player.secondName}</h3>
                  : null}
                <Player url={maleChar} model={maleMageModel} position="right" cursor={secondPlayer} width={600} imgWidth={820} />
                <HealthBar hp={secondPlayerHp} mt-3 />
              </div>
            </div>
          </div>
        )}
      {modal ? <QuizModal /> : null }
      <GameOverModal />
    </div>
  );
}

export default GamePage;
