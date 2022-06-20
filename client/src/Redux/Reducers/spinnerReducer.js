import { SHOW_SPINNER_WS } from '../Types/types';

const spinnerReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_SPINNER_WS:
      return payload;
    default:
      return state;
  }
};

export default spinnerReducer;
