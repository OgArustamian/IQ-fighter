import axios from 'axios';
import { SET_USER } from '../Types/types';

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/auth/signUp', value)
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => console.log(err));
};

export const checkUser = () => (dispatch) => {
  axios.post('/auth/check')
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => dispatch(setUser({})));
};

export const userLogOut = () => (dispatch) => {
  axios('/auth/signOut')
    .then((res) => dispatch(setUser({})));
};

export const userSignIn = (value) => (dispatch) => {
  axios.post('/auth/signIn', value)
    .then((res) => dispatch(setUser(res.data)));
};
