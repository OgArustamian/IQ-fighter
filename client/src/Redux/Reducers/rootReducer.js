import { combineReducers } from 'redux';
import answersReducer from './answersReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  answers: answersReducer,
});

export default rootReducer;
