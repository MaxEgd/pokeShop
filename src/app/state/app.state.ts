import { CardsResponse } from '../models/cardsReponse.model';
import { Cart } from '../models/cart.model';

export interface AppState {
  cardsResponse: CardsResponse;
  cart: ReadonlyArray<Cart>;
}
