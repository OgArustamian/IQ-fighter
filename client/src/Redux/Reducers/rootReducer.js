import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';
import ratingReducer from './ratingReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  ws: wsReducer,
  questions: questionsReducer,
  rating: ratingReducer,
});

export default rootReducer;
