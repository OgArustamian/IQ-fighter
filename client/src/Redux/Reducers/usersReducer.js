import { SET_USER } from '../Types/types';

// eslint-disable-next-line default-param-last
const usersReducer = (state = { isFetch: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
