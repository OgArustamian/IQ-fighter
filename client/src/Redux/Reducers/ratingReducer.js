import { SHOW_RAITNG } from '../Types/types';

// eslint-disable-next-line default-param-last
const ratingReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_RAITNG:
      return payload;
    default:
      return state;
  }
};

export default ratingReducer;
