import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { TCurrentDeckActions } from './actions/currentDeck';
import { rootReducer } from './reducers/rootReducer';

export type TAppActions = 
  | TCurrentDeckActions;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunk
  ))
);
