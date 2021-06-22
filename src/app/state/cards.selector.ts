import { createSelector } from '@ngrx/store';
import { Card } from '../models/card.model';
import { AppState } from './app.state';

export const selectCards = createSelector(
  (state: AppState) => state.cards,
  (cards: Array<Card>) => cards
);
