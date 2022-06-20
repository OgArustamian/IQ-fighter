import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import questionReducer from './questionReducer';
import answersReducer from './answersReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  answers: answersReducer,
  ws: wsReducer,
  question: questionReducer,
  player: playerReducer,
});

export default rootReducer;
