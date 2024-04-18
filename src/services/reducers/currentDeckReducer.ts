import {
  SET_DECK,
  CLEAR_CURRENT_DECK,
  SET_WORD,
  CLEAR_CURRENT_WORD,
} from '../../utils/constants';
import { TTopic, TWord } from '../../utils/types';
import type { TCurrentDeckActions } from '../actions/currentDeck';

type TCurrentDeckState = {
  currentDeck: TTopic | null;
  currentWord: TWord | null;
};

const initialState: TCurrentDeckState = {
  currentDeck: null,
  currentWord: null,
};

export const currentDeckReducer = (
  state = initialState,
  action: TCurrentDeckActions
) => {
  switch (action.type) {
    case SET_DECK:
      return {
        ...state,
        currentDeck: action.item,
        currentWord: null,
      };
    case SET_WORD:
      return {
        ...state,
        currentWord: action.item,
      };
    case CLEAR_CURRENT_WORD:
      return {
        ...state,
        currentWord: null,
      };
    case CLEAR_CURRENT_DECK:
      return initialState;
    default: {
      return state;
    }
  }
};
