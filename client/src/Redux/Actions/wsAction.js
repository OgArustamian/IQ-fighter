/* eslint-disable no-param-reassign */
import { SET_ROOM_WS, SHOW_SPINNER_WS } from '../Types/types';

export const setRoom = (value) => ({
  type: SET_ROOM_WS,
  payload: value,
});

export const showSpinner = (value) => ({
  type: SHOW_SPINNER_WS,
  payload: value,
});

export const messageFind = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'find', params: { } }));
};

export const leaveRoom = (ws, gameID) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'leave', params: { gameID } }));
};
