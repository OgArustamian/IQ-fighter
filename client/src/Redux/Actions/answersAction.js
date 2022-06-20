import axios from 'axios';
import { SET_ANSWER } from '../Types/types';

export const setAnswer = (value) => ({
  type: SET_ANSWER,
  payload: value,
});

export const saveAnswer = (value) => (dispatch) => {
  axios.post('/', value)
    .catch((err) => console.log(err));
};
