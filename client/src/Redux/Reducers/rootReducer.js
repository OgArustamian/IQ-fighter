import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import wsReducer from './wsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  ws: wsReducer,
});

export default rootReducer;
