import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import usersReducer from './usersReducer';
import reservationsReducer from './reservationsReducer';

export default combineReducers({
  usersReducer,
  eventsReducer,
  reservationsReducer,
});