/* eslint-disable no-param-reassign */
import { SET_ROOM_WS } from '../Types/types';

export const setRoom = (value) => ({
  type: SET_ROOM_WS,
  payload: value,
});

export const messageFind = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'find', params: { } }));
};
