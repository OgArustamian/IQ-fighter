import axios from 'axios';
import { SET_USER } from '../Types/types';

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/user/signup', value)
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => console.log(err));
};

export const checkUser = () => (dispatch) => {
  axios.post('/user/check')
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => console.log(err));
};
