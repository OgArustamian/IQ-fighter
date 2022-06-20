import { SET_ANSWER } from '../Types/types';

const answersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER:
      return payload;
    default:
      return state;
  }
};

export default answersReducer;
