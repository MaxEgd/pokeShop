import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';
import { Cart } from '../models/cart.model';

export const addCard = createAction(
  '[Card List] Add card to cart',
  props<{ card: Card }>()
);

export const removeCard = createAction(
  '[Card cart] Remove Card',
  props<{ card: Card }>()
);

export const retrievedCart = createAction(
  '[Card List] Retrieve cart content Success',
  props<{ cart: Array<Cart> }>()
);
