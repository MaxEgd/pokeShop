import { createReducer, on } from '@ngrx/store';
import { CardsResponse } from '../models/cardsReponse.model';
import { retrievedCardList } from "./cards.action";

export let initialState: CardsResponse;

export const cardsReducer = createReducer(
  initialState,
  on(retrievedCardList, (state, { cardsResponse }) =>  {return cardsResponse})
);
