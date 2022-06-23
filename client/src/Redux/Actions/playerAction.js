import {
  CHANGE_TURN, SET_GAME, SET_LOOSER, SET_TURN, SET_WINNER,
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

export const setWiner = () => ({
  type: SET_WINNER,
});

export const setLooser = () => ({
  type: SET_LOOSER,
});
