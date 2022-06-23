import {
  SET_GAME, SET_TURN, CHANGE_TURN, GET_FIRST_NAME, GET_SECOND_NAME,
  SET_WINNER, SET_LOOSER,
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

    case GET_FIRST_NAME:
      return {
        ...state,
        firstName: payload.firstName,
      };

    case GET_SECOND_NAME:
      return {
        ...state,
        secondName: payload.secondName,
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
