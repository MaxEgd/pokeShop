import { createReducer, on } from '@ngrx/store';
import { Card } from '../models/card.model';
import { Cart } from '../models/cart.model';
import { addCard, removeCard } from './cart.action';

export const initialState: ReadonlyArray<Cart> = [];

export const cartReducer = createReducer(
  initialState,
  on(addCard, (state, { card }) => {
    const stateCopy = [...state];
    const foundCartElementIndex = state.findIndex((c) => c.id === card.id);
    if (foundCartElementIndex > -1) {
      let existingCart: Cart = state[foundCartElementIndex];
      const newCart: Cart = {
        id: existingCart.id,
        name: existingCart.name,
        quantity: existingCart.quantity + 1,
        price: existingCart.price,
        rarity: existingCart.rarity,
      };

      stateCopy.splice(foundCartElementIndex, 1, newCart);
    } else {
      const newCart: Cart = {
        id: card.id,
        name: card.name,
        quantity: 1,
        price: getPrice(card),
        rarity: card.rarity,
      };
      stateCopy.push(newCart);
    }

    return [...stateCopy];
  }),
  on(removeCard, (state, { card }) => {
    const stateCopy = [...state];
    const foundCartElementIndex = stateCopy.findIndex((c) => c.id === card.id);
    let existingCart: Cart = state[foundCartElementIndex];
    if(existingCart.quantity <= 1) {
    stateCopy.splice(foundCartElementIndex, 1);
    } else {
      const newCart: Cart = {
        id: existingCart.id,
        name: existingCart.name,
        quantity: existingCart.quantity - 1,
        price: existingCart.price,
        rarity: existingCart.rarity,
      };
      stateCopy.splice(foundCartElementIndex, 1, newCart);

    }


console.log('remove', stateCopy);
    return [...stateCopy];
  })
);

/**
 * Retourne le prix d'une carte.
 * @param card la carte concernée
 * @returns number le premier prix trouvé
 */
function getPrice(card: Card): number {
  return Object.values(card.tcgplayer.prices)[0]['mid'];
}
