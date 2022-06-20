import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  player: playerReducer,
});

export default rootReducer;
