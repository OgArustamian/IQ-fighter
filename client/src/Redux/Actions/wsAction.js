/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { SET_ROOM_WS } from '../Types/types';

export const setRoom = (value) => ({
  type: SET_ROOM_WS,
  payload: value,
});

export const messageFind = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'find', params: {  } }));
  ws.onmessage = function (event) {
    console.log('ws Action', event.data);
    const { type, params } = JSON.parse(event.data);
    const { room } = params;
    switch (type) {
      case 'joinedRoom' || 'createdRoom':
        dispatch(setRoom(room));
        break;
      default:
        dispatch(setRoom(room));
        break;
    }
  };
};
