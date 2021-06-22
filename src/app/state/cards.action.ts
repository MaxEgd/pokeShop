import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const addCard = createAction(
  '[Card List] Add card to cart',
  props<{ card: Card }>()
);

export const removeCard = createAction(
  '[Card cart] Remove Card',
  props<{ card: Card }>()
);

export const retrievedCardList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ cards: Array<Card> }>()
);
