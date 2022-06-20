import { SHOW_QUESTION } from '../Types/types';

export const showQuestion = (question) => ({
  type: SHOW_QUESTION,
  paylooad: question,
});

export const fetchQuestion = (difficulty) => async (dispatch) => {

};
