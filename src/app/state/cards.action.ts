import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const retrievedCardList = createAction(
  '[Card List/API] Retrieve cards',
  props<{ cards: Array<Card> }>()
);
