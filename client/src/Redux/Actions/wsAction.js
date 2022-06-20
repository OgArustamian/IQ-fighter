/* eslint-disable no-param-reassign */
import { CREATE_ROOM, JOIN_ROOM, SET_ROOM_WS } from '../Types/types';
import { setTurn, setGame } from './playerAction';

export const setRoom = (value) => ({
  type: SET_ROOM_WS,
  payload: value,
});

export const messageFind = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'find', params: { } }));
};
