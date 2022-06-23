import {
  SET_GAME, SET_TURN, CHANGE_TURN, SET_WINNER, SET_LOOSER,
} from '../Types/types';

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

    case SET_WINNER:
      return {
        ...state,
        turn: false,
        isWinner: true,
      };

    case SET_LOOSER:
      return {
        ...state,
        turn: false,
        isWinner: false,
      };

    default:
      return state;
  }
};

export default playerReducer;
