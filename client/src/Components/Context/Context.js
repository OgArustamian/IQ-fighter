/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { setGame, setTurn } from '../../Redux/Actions/playerAction';
import { showQuestion } from '../../Redux/Actions/questionAction';
import { setRoom } from '../../Redux/Actions/wsAction';
import {
  ATTACK, CREATE_ROOM, JOIN_ROOM, SET_ANSWER,
} from '../../Redux/Types/types';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);
    const { room, game } = params;

    switch (type) {
      case ATTACK:
        dispatch(showQuestion(params));
        setModal(!modal);
        break;
      case CREATE_ROOM:
        dispatch(setRoom(room));
        dispatch(setTurn(game));
        break;

      case JOIN_ROOM:
        dispatch(setRoom(room));
        dispatch(setGame(game));
        break;

      default:
        dispatch(setRoom(room));
        break;
    }
  };

  return (
    <WsContext.Provider value={{ ws, modal, setModal }}>
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
