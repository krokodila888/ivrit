import { ADD_CARD, REMOVE_CARD, EDIT_CARD } from '../../utils/constants';
import { TWord, TTopic, TNumWord } from '../../utils/types';

export interface IAaddCard {
  readonly type: typeof ADD_CARD;
  readonly item: string;
}

export interface IRremoveCard {
  readonly type: typeof REMOVE_CARD;
  readonly item: string;
}

export interface IEeditCard {
  readonly type: typeof EDIT_CARD;
  readonly item: string;
}

export type TCardActions =
  | IAaddCard
  | IRremoveCard
  | IEeditCard

export function addCard(data: any) {
  return {
    type: ADD_CARD,
    item: data,
  };
}

export function removeCard(data: any) {
  return {
    type: REMOVE_CARD,
    removedItem: data,
  };
}

export function editCard(data: any) {
  return {
    type: EDIT_CARD,
    editedItem: data,
  };
}
