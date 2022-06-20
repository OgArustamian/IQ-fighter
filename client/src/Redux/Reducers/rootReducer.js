import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import answersReducer from './answersReducer';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  answers: answersReducer,
  ws: wsReducer,
  questions: questionsReducer,
  player: playerReducer,
});

export default rootReducer;
