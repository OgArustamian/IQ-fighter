import { SHOW_QUESTION } from '../Types/types';

const initState = { answeredQuestions: [] };

const questionsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_QUESTION:
      return payload;

    default:
      return state;
  }
};

export default questionsReducer;
