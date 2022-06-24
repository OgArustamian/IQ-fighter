/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import {
  ATTACK, CLEAR_QUESTIONS, GAME, SHOW_QUESTION,
} from '../Types/types';

export const showQuestion = (question) => ({
  type: SHOW_QUESTION,
  payload: question,
});

export const clearAnsweredQuestions = () => ({
  type: CLEAR_QUESTIONS,
});

export const fetchQuestion = (difficulty, ws, answeredQuestions, room, turnID) => (dispatch) => {
  ws.send(JSON.stringify({
    type: GAME,
    subtype: ATTACK,
    params: {
      difficulty,
      answeredQuestions,
      room,
      turnID,
    },
  }));
};
