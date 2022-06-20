import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  ws: wsReducer,
  questions: questionsReducer,
});

export default rootReducer;
