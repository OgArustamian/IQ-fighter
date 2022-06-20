import { SET_GAME, SET_TURN } from '../Types/types';

const initState = {
  turn: false,
};

const playerReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TURN:
      return {
        ...state,
        turn: !state.turn,
        game: payload,
      };

    case SET_GAME:
      return {
        ...state,
        game: payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
