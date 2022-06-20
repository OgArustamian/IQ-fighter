import axios from 'axios';
import { SHOW_RAITNG } from '../Types/types';

export const showRating = (value) => ({
  type: SHOW_RAITNG,
  payload: value,
});

export const getRatingInfo = () => (dispatch) => {
  axios.post('/rating/getInfo')
    .then((response) => dispatch(showRating(response.data)))
    .catch((err) => dispatch(showRating({})));
};
