import { combineReducers } from 'redux';
import ritualsReducer from './rituals_reducer';

export default combineReducers({
  rituals: ritualsReducer
})
