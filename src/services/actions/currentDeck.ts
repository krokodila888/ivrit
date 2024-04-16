import {
  SET_DECK,
  CLEAR_CURRENT_DECK,
  SET_WORD,
  CLEAR_CURRENT_WORD,
} from '../../utils/constants';
import { TWord, TTopic, TNumWord } from '../../utils/types';

export interface ISetCurrentDeck {
  readonly type: typeof SET_DECK;
  readonly item: any;
}

export interface IRemoveCurrentDeck {
  readonly type: typeof CLEAR_CURRENT_DECK;
}

export interface ISetCurrentWord {
  readonly type: typeof SET_WORD;
  readonly item: string;
}

export interface IRemoveCurrentWord {
  readonly type: typeof CLEAR_CURRENT_WORD;
}

export type TCurrentDeckActions =
  | ISetCurrentDeck
  | IRemoveCurrentDeck
  | ISetCurrentWord
  | IRemoveCurrentWord

export function setCurrentDeck(data: TTopic) {
  return {
    type: SET_DECK,
    item: data,
  };
}

export function removeCurrentDeck() {
  return {
    type: CLEAR_CURRENT_DECK,
  };
}

export function setCurrentWord(data: TWord) {
  return {
    type: SET_WORD,
    item: data,
  };
}

export function removeCurrentWord() {
  return {
    type: CLEAR_CURRENT_WORD,
  };
}
