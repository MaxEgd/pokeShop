import { createAction, props } from '@ngrx/store';
import { CardsResponse } from '../models/cardsReponse.model';

export const retrievedCardList = createAction(
  '[Card List/API] Retrieve cards',
  props<{ cardsResponse: CardsResponse }>()
);
