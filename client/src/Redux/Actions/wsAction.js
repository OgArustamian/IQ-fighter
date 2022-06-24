/* eslint-disable no-param-reassign */
import { DELETE_ROOM, SET_ROOM_WS, SHOW_SPINNER_WS } from '../Types/types';

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

export const deleteRoom = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: DELETE_ROOM, params: { } }));
};
