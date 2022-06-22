import { SET_GAME, SET_TURN, CHANGE_TURN } from '../Types/types';

const initState = {
  turn: false,
  position: 'right',
};

const playerReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TURN:
      return {
        ...state,
        turn: !state.turn,
        position: 'left',
      };

    case SET_GAME:
      return {
        ...state,
        gameID: payload.gameID,
        turnID: payload.turnID,
      };

    case CHANGE_TURN:
      return {
        ...state,
        turn: !state.turn,
        turnID: payload.turnID,
      };

    default:
      return state;
  }
};

export default playerReducer;
