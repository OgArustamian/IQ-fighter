import { SET_ROOM_WS } from '../Types/types';

// eslint-disable-next-line default-param-last
const wsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ROOM_WS:
      return payload;
    default:
      return state;
  }
};

export default wsReducer;
