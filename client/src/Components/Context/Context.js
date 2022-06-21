/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTurn, setGame, setTurn } from '../../Redux/Actions/playerAction';
import { showQuestion } from '../../Redux/Actions/questionAction';
import { setRoom, showSpinner } from '../../Redux/Actions/wsAction';
import {
  ATTACK, CREATE_ROOM, JOIN_ROOM, SET_ANSWER,
} from '../../Redux/Types/types';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);
  const [firstPlayerHp, setFirstPlayerHp] = useState(null);
  const [secondPlayerHp, setSecondPlayerHp] = useState(null);
  const { player } = useSelector((state) => state);
  const [hero, setHero] = useState(false);
  const [enemy, setEnemy] = useState(true);

  ws.onopen = function (e) {
    console.log('ws open context front');
  };

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);
    const {
      room, gameID, turnID, hp, hpEnemy,
    } = params;

    switch (type) {
      case ATTACK:
        dispatch(showQuestion(params));
        setModal(!modal);
        break;

      case CREATE_ROOM:
        dispatch(setRoom(room));
        dispatch(setTurn(gameID, turnID));
        setHero(true);
        setEnemy(false);
        break;

      case JOIN_ROOM:
        dispatch(setRoom(room));
        dispatch(setGame(gameID, turnID));
        dispatch(showSpinner(type));
        setFirstPlayerHp(hp);
        setSecondPlayerHp(hp);
        break;

      case 'draw':
        console.log('DRAW------------------>', JSON.parse(event.data));
        dispatch(changeTurn());
        break;

      case 'win':
        console.log('WIN------------------>', JSON.parse(event.data));
        if (!hero) {
          setFirstPlayerHp(hpEnemy);
          setSecondPlayerHp(hp);
        } else {
          setFirstPlayerHp(hp);
          setSecondPlayerHp(hpEnemy);
        }

        console.log('hero->', hero, firstPlayerHp, 'enemy->', enemy, secondPlayerHp);
        dispatch(changeTurn());
        break;

      case 'loss':
        console.log('LOSS------------------>', JSON.parse(event.data));
        if (!hero) {
          setFirstPlayerHp(hpEnemy);
          setSecondPlayerHp(hp);
        } else {
          setFirstPlayerHp(hp);
          setSecondPlayerHp(hpEnemy);
        }

        console.log('hero->', hero, firstPlayerHp, 'enemy->', enemy, secondPlayerHp);
        dispatch(changeTurn());
        break;

      default:
        dispatch(setRoom(room));
        break;
    }
  };

  ws.onclose = function (e) {
    if (e.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае e.code 1006
      console.log('[close] Соединение прервано');
    }
  };

  ws.onerror = function (error) {
    alert(`[error] ${error.message}`);
  };

  useEffect(() => {
    setWs(new WebSocket('ws://localhost:3001'));
  }, [id]);

  return (
    <WsContext.Provider value={{
      ws, modal, setModal, hero, enemy, firstPlayerHp, secondPlayerHp,
    }}
    >
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
