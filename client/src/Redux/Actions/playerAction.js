import { SET_GAME, SET_TURN } from '../Types/types';

export const setTurn = (game) => ({
  type: SET_TURN,
  payload: game,
});

export const setGame = (game) => ({
  type: SET_GAME,
  payload: game,
});
