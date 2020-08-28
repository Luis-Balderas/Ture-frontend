import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  usersReducer,
  eventsReducer,
});
