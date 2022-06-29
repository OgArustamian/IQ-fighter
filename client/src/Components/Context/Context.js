/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useEffect, useRef, useState,
} from 'react';
import useSound from 'use-sound';
import { useDispatch, useSelector } from 'react-redux';
import soundDamage from '../../sounds/now-thats.mp3';
import soundGameWon from '../../sounds/and-his-name-is-john-cena-1.mp3';
import drawSoundAlert from '../../sounds/GareginVseHorosho.mp3';
import {
  changeTurn, getFirstName, getSecondName, setGame, setTurn, setLooser, setWiner, enemyLeft,
} from '../../Redux/Actions/playerAction';
import { showQuestion } from '../../Redux/Actions/questionAction';
import { showRating } from '../../Redux/Actions/ratingAction';
import { deleteRoom, setRoom, showSpinner } from '../../Redux/Actions/wsAction';
import {
  ATTACK, CREATE_ROOM, DRAW, ENEMY_LEFT, GAME_LOST, GAME_WON, JOIN_ROOM, LOSS, WIN,
  GETRATE,
} from '../../Redux/Types/types';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState({});
  const [modal, setModal] = useState(false);
  const [gameOverModal, setgameOverModal] = useState(false);
  const [fireball, setFireball] = useState(false);
  const [enemyFireball, setenemeyFireball] = useState(false);
  const [leftDamage, setleftDamage] = useState(false);
  const [rightDamage, setrightDamage] = useState(false);
  const [playerDamage, setplayerDamage] = useState(0);
  const [isDraw, setIsDraw] = useState(false);
  const [readyState, setReadyState] = useState({});
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);
  const [firstPlayerHp, setFirstPlayerHp] = useState(100);
  const [secondPlayerHp, setSecondPlayerHp] = useState(100);
  const player = useSelector((state) => state.player);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [sound, setSound] = useState(soundDamage);
  const [winSound, setWinSound] = useState(soundGameWon);
  const [drawSound, setDrawSound] = useState(drawSoundAlert);

  const [play] = useSound(sound, {
    playbackRate,
    volume: 5,
  });

  const [playWin] = useSound(winSound, {
    playbackRate,
    volume: 7,
  });

  const [playDraw] = useSound(drawSound, {
    playbackRate,
    volume: 7,
  });

  function checkPosition(hp, hpEnemy) {
    if (player.position === 'left') {
      setFirstPlayerHp(hp);
      setSecondPlayerHp(hpEnemy);
    }
    if (player.position === 'right') {
      setFirstPlayerHp(hpEnemy);
      setSecondPlayerHp(hp);
    }
  }

  ws.onopen = (e) => {
    console.log('ws open context front');
    setReadyState(ws.readyState);
  };

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);
    const {
      room, gameID, turnID, hp, hpEnemy, firstPlayer, secondPlayer, damage,
    } = params;

    console.log('ws onMessage DATA', JSON.parse(event.data));

    setplayerDamage(damage);

    switch (type) {
      case ATTACK:
        dispatch(showQuestion(params));
        setModal(!modal);
        break;

      case CREATE_ROOM:
        dispatch(setRoom(room));
        dispatch(setTurn());
        break;

      case JOIN_ROOM:
        dispatch(setRoom(room));
        dispatch(setGame(gameID, turnID));
        dispatch(showSpinner(type));
        checkPosition(hp, hp);
        dispatch(getFirstName(firstPlayer));
        dispatch(getSecondName(secondPlayer));
        break;

      case DRAW:
        console.log('DRAW------------------>', JSON.parse(event.data));
        setIsDraw(true);
        dispatch(changeTurn(turnID));
        setPlaybackRate(playbackRate);
        playDraw();
        break;

      case WIN:
        console.log('WIN------------------>', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);
        dispatch(changeTurn(turnID));
        setSound(soundDamage);

        if (player.position === 'left') {
          setFireball(true);
          setrightDamage(true);

          setTimeout(() => {
            setFireball(false);
            setrightDamage(false);
            setPlaybackRate(playbackRate);
            play();
          }, 1450);
        }

        if (player.position === 'right') {
          setenemeyFireball(true);
          setleftDamage(true);

          setTimeout(() => {
            setenemeyFireball(false);
            setleftDamage(false);
            setPlaybackRate(playbackRate);
            play();
          }, 1450);
        }

        break;

      case LOSS:
        console.log('LOSS------------------>', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);
        dispatch(changeTurn(turnID));
        setSound(soundDamage);

        if (player.position === 'right') {
          setFireball(true);
          setrightDamage(true);

          setTimeout(() => {
            setFireball(false);
            setrightDamage(false);
            setPlaybackRate(playbackRate);
            play();
          }, 1450);
        }

        if (player.position === 'left') {
          setenemeyFireball(true);
          setleftDamage(true);

          setTimeout(() => {
            setenemeyFireball(false);
            setleftDamage(false);
            setPlaybackRate(playbackRate);
            play();
          }, 1450);
        }
        break;

      case GAME_WON:
        console.log('game over, you WON!!!', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);

        if (player.position === 'left') {
          setFireball(true);
          setrightDamage(true);

          setTimeout(() => {
            setFireball(false);
            setrightDamage(false);
            setPlaybackRate(playbackRate);
            playWin();
          }, 1450);
        }

        if (player.position === 'right') {
          setenemeyFireball(true);
          setleftDamage(true);

          setTimeout(() => {
            setenemeyFireball(false);
            setleftDamage(false);
            setPlaybackRate(playbackRate);
            playWin();
          }, 1450);
        }

        dispatch(setWiner());
        dispatch(deleteRoom(ws));

        setTimeout(() => {
          setgameOverModal(true);
        }, 1500);

        break;

      case GAME_LOST:
        console.log('game over, you LOOOOOST!!!', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);

        if (player.position === 'left') {
          setenemeyFireball(true);
          setleftDamage(true);

          setTimeout(() => {
            setenemeyFireball(false);
            setleftDamage(false);
          }, 1450);
        }

        if (player.position === 'right') {
          setFireball(true);
          setrightDamage(true);

          setTimeout(() => {
            setFireball(false);
            setrightDamage(false);
          }, 1450);
        }

        dispatch(setLooser());

        setTimeout(() => {
          setgameOverModal(true);
        }, 1500);
        break;

      case ENEMY_LEFT:
        console.log('enemy left', JSON.parse(event.data));
        dispatch(enemyLeft());
        setgameOverModal(true);
        break;

      case GETRATE:
        console.log('Add rate', JSON.parse(event.data));
        dispatch(showRating(params));
        break;

      default:
        dispatch(setRoom(room));
        break;
    }
  };

  ws.onclose = (e) => {
    if (e.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае e.code 1006
      console.log('[close] Соединение прервано');
    }
  };

  ws.onerror = (error) => {
    console.log(`[error] ${error.message}`);
  };

  useEffect(() => {
    if (id) {
      setWs(new WebSocket(process.env.REACT_APP_URL_WS));
    }
  }, [id]);

  return (
    <WsContext.Provider value={{
      ws,
      modal,
      setModal,
      gameOverModal,
      setgameOverModal,
      fireball,
      enemyFireball,
      playerDamage,
      leftDamage,
      rightDamage,
      isDraw,
      setIsDraw,
      firstPlayerHp,
      secondPlayerHp,
      readyState,
    }}
    >
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
