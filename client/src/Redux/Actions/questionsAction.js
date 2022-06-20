import { SHOW_QUESTION } from '../Types/types';

export const showQuestion = (question) => ({
  type: SHOW_QUESTION,
  paylooad: question,
});

export const fetchQuestion = (difficulty) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/questions`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ difficulty }),
  });

  const question = await response.json();

  dispatch(showQuestion(question));
};
