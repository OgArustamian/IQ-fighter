import axios from 'axios';
import { SHOW_RAITNG } from '../Types/types';

export const showRating = (value) => ({
  type: SHOW_RAITNG,
  payload: value,
});

export const getRatingInfo = (ws, id) => (dispatch) => {
  ws.send(JSON.stringify({ type: 'getRate', params: { id } }));
};
