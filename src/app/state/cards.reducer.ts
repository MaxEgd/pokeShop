import { createReducer, on } from '@ngrx/store';
import { Card } from '../models/card.model';
import { retrievedCardList } from './cards.action';

export const initialState: ReadonlyArray<Card> = [];

export const cardsReducer = createReducer(
  initialState,
  on(retrievedCardList, (state, { cards }) => [...cards])
);
