import { createSelector } from '@ngrx/store';
import { CardsResponse } from '../models/cardsReponse.model';
import { AppState } from './app.state';

export const selectCards = createSelector(
  (state: AppState) => state.cardsResponse,
  (cardsResponse: CardsResponse) => {
    cardsResponse?.data}
);

export const selectCardsResponse = createSelector(
  (state: AppState) => state.cardsResponse,
  (cardsResponse: CardsResponse) => {
    return cardsResponse}
);


