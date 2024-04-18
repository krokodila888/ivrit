import { combineReducers } from 'redux';
import { currentDeckReducer } from './currentDeckReducer';

export const rootReducer = combineReducers({
  currentDeckReducer,
});
