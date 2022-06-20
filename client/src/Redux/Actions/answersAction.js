import { SET_ANSWER } from '../Types/types';

export const setAnswer = (value) => ({
  type: SET_ANSWER,
  payload: value,
});

export const sendAnswer = (ws, userId, answerId) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'game', subtype: 'answer', params: { userId, answerId } }));
  ws.onmessage = function (e) {
    console.log('ws action', e.data);
  };
};
