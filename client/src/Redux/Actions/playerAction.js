import {
  CHANGE_TURN, SET_GAME, SET_TURN, GET_FIRST_NAME, GET_SECOND_NAME,
} from '../Types/types';

export const setTurn = () => ({
  type: SET_TURN,
});

export const setGame = (gameID, turnID) => ({
  type: SET_GAME,
  payload: { gameID, turnID },
});

export const changeTurn = (turnID) => ({
  type: CHANGE_TURN,
  payload: { turnID },
});

export const getFirstName = (firstName) => ({
  type: GET_FIRST_NAME,
  payload: { firstName },
});

export const getSecondName = (secondName) => ({
  type: GET_SECOND_NAME,
  payload: { secondName },
});
