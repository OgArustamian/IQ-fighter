import { CLEAR_QUESTIONS, SHOW_QUESTION } from '../Types/types';

const initState = { answeredQuestions: [] };

const questionReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_QUESTION:
      return {
        ...payload,
        answeredQuestions: [...state.answeredQuestions, payload.questionID],
      };
    case CLEAR_QUESTIONS:
      return {
        answeredQuestions: [],
      };

    default:
      return state;
  }
};

export default questionReducer;
