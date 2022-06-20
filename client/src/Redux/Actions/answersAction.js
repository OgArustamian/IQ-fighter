/* eslint-disable no-param-reassign */
import { SET_ANSWER } from '../Types/types';

export const setAnswer = (value) => ({
  type: SET_ANSWER,
  payload: value,
});

export const sendAnswer = (ws, userId, answerId, room) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'game', subtype: 'answer', params: { room, userId, answerId } }));
};
