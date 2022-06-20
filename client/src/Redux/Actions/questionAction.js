/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { ATTACK, GAME, SHOW_QUESTION } from '../Types/types';

export const showQuestion = (question) => ({
  type: SHOW_QUESTION,
  payload: question,
});

export const fetchQuestion = (difficulty, ws, answeredQuestions, room, game) => (dispatch) => {
  ws.send(JSON.stringify({
    type: GAME,
    subtype: ATTACK,
    params: {
      difficulty,
      answeredQuestions,
      room,
      game,
    },
  }));

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);

    if (type === ATTACK) {
      dispatch(showQuestion(params));
    } else {
      alert('Упс, ошибочка вышла');
    }
  };
};
