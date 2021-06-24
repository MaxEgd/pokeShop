import { createSelector } from '@ngrx/store';
import { Cart } from '../models/cart.model';
import { AppState } from './app.state';

export const selectCart = createSelector(
  (state: AppState) => state.cart,
  (cart: Array<Cart>) => cart
);
