import { CHANGE_TURN, SET_GAME, SET_TURN } from '../Types/types';

export const setTurn = (gameID, turnID) => ({
  type: SET_TURN,
  payload: { gameID, turnID },
});

export const setGame = (gameID, turnID) => ({
  type: SET_GAME,
  payload: { gameID, turnID },
});

export const changeTurn = () => ({
  type: CHANGE_TURN,
});
