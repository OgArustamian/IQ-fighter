import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import questionReducer from './questionReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  ws: wsReducer,
  question: questionReducer,
  player: playerReducer,
});

export default rootReducer;
