import {
  CHANGE_TURN, SET_GAME, SET_TURN, GET_FIRST_NAME, GET_SECOND_NAME,
  SET_LOOSER, SET_WINNER, ENEMY_LEFT, LEAVE_GAME,
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

export const setWiner = () => ({
  type: SET_WINNER,
});

export const setLooser = () => ({
  type: SET_LOOSER,
});

export const enemyLeft = () => ({
  type: ENEMY_LEFT,
});

export const leaveGame = () => ({
  type: LEAVE_GAME,
});
