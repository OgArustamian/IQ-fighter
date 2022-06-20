/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
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
