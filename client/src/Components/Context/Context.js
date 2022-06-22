/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, memo, useContext, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTurn, getFirstName, getSecondName, setGame, setTurn,
} from '../../Redux/Actions/playerAction';
import { showQuestion } from '../../Redux/Actions/questionAction';
import { setRoom, showSpinner } from '../../Redux/Actions/wsAction';
import {
  ATTACK, CREATE_ROOM, DRAW, JOIN_ROOM, LOSS, SET_ANSWER, WIN,
} from '../../Redux/Types/types';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState({});
  const [modal, setModal] = useState(false);
  const [readyState, setReadyState] = useState({});
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);
  const [firstPlayerHp, setFirstPlayerHp] = useState(100);
  const [secondPlayerHp, setSecondPlayerHp] = useState(100);
  const player = useSelector((state) => state.player);

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

  ws.onopen = function (e) {
    console.log('ws open context front');
    setReadyState(ws.readyState);
  };

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);
    console.log(params);
    const {
      room, gameID, turnID, hp, hpEnemy, firstPlayer, secondPlayer,
    } = params;

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
        dispatch(getFirstName(firstPlayer));
        dispatch(getSecondName(secondPlayer));
        break;

      case DRAW:
        console.log('DRAW------------------>', JSON.parse(event.data));
        alert('Ничья');
        dispatch(changeTurn(turnID));
        break;

      case WIN:
        console.log('WIN------------------>', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);
        dispatch(changeTurn(turnID));
        break;

      case LOSS:
        console.log('LOSS------------------>', JSON.parse(event.data));
        checkPosition(hp, hpEnemy);
        dispatch(changeTurn(turnID));
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
    console.log(`[error] ${error.message}`);
  };

  useEffect(() => {
    if (id) {
      setWs(new WebSocket('ws://localhost:3001'));
    }
  }, [id]);

  return (
    <WsContext.Provider value={{
      ws, modal, setModal, firstPlayerHp, secondPlayerHp, readyState,
    }}
    >
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
