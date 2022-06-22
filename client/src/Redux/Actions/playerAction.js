import { CHANGE_TURN, SET_GAME, SET_TURN } from '../Types/types';

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
