import { SHOW_QUESTION } from '../Types/types';

const questionsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_QUESTION:
      return payload;

    default:
      return state;
  }
};

export default questionsReducer;
