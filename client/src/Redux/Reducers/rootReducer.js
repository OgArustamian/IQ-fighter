import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  ws: wsReducer,
  questions: questionsReducer,
  player: playerReducer,
});

export default rootReducer;
