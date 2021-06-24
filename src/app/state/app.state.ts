import { Card } from '../models/card.model';
import { Cart } from '../models/cart.model';

export interface AppState {
  cards: ReadonlyArray<Card>;
  cart: ReadonlyArray<Cart>;
}
