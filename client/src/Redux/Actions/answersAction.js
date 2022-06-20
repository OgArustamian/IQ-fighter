import { SET_ANSWER } from '../Types/types';

export const setAnswer = (value) => ({
  type: SET_ANSWER,
  payload: value,
});

export const sendAnswer = (ws) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'game', subtype: 'answer', params: { user_id, answer_id } }));
  ws.onmessage = function (e) {
    console.log('ws action', e.data);
  };
};
