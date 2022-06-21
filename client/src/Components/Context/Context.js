/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGame, setTurn } from '../../Redux/Actions/playerAction';
import { showQuestion } from '../../Redux/Actions/questionAction';
import { setRoom, showSpinner } from '../../Redux/Actions/wsAction';
import { ATTACK, CREATE_ROOM, JOIN_ROOM } from '../../Redux/Types/types';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);

  ws.onopen = function(e) {

  }

  ws.onmessage = (event) => {
    console.log(event.data);
    const { type, params } = JSON.parse(event.data);
    const { room, gameID, turnID } = params;

    switch (type) {
      case ATTACK:
        dispatch(showQuestion(params));
        setModal(!modal);
        break;

      case CREATE_ROOM:
        dispatch(setRoom(room));
        break;

      case JOIN_ROOM:
        dispatch(setRoom(room));
        dispatch(setTurn(gameID, turnID));
        dispatch(showSpinner(type));
        break;

      default:
        dispatch(setRoom(room));
        break;
    }
  };
  useEffect(() => {
    setWs(new WebSocket('ws://localhost:3001'));
  }, [id]);

  return (
    <WsContext.Provider value={{ ws, modal, setModal }}>
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
