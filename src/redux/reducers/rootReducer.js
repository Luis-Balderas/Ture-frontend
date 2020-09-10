import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  usersReducer,
  eventsReducer,
  reservationsReducer,
});
