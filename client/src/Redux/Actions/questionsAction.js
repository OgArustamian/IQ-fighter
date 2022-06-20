/* eslint-disable no-param-reassign */
import { ATTACK, GAME, SHOW_QUESTION } from '../Types/types';

export const showQuestion = (question) => ({
  type: SHOW_QUESTION,
  paylooad: question,
});

export const fetchQuestion = (difficulty, ws, answeredQuestions, room) => (dispatch) => {
  ws.send(JSON.stringify({
    type: GAME,
    subtype: ATTACK,
    params: {
      difficulty,
      answeredQuestions,
      room,
    },
  }));

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);
    const question = params;

    if (type === ATTACK) {
      dispatch(showQuestion(question));
    } else {
      alert('Упс, ошибочка вышла');
    }
  };
};
