import { combineReducers } from 'redux';
//import { cardsReducer } from './cardsReducer.ts';
import { currentDeckReducer } from './currentDeckReducer';

export const rootReducer = combineReducers({
  //cardsReducer,
  currentDeckReducer,
});
