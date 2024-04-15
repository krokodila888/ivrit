import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { currentDeckReducer } from './currentDeckReducer';

export const rootReducer = combineReducers({
  cardsReducer,
  currentDeckReducer,
});
