/* eslint-disable no-param-reassign */
import { SET_ANSWER } from '../Types/types';

export const setAnswer = (value) => ({
  type: SET_ANSWER,
  payload: value,
});

export const sendAnswer = (ws, room, userID, answerID, turnID) => (dispatch) => {
  ws.send(JSON.stringify({
    type: 'game',
    subtype: 'answer',
    params: {
      room, userID, answerID, turnID,
    },
  }));
};
