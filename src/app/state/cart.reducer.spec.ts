import { Card } from '../models/card.model';
import { Cart } from '../models/cart.model';
import { addCard, removeCard, removeCartItem } from './cart.action';
import * as fromReducer from './cart.reducer';

describe('addCard action', () => {
  it('should_add_card_to_cart', () => {
    // GIVEN
    const { initialState } = fromReducer;
    const card: Card = mockCard();
    const newState: Array<Cart> = [mockCart()];

    // WHEN
    const action = addCard({ card: card });
    const state = fromReducer.cartReducer(initialState, action);

    // THEN
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  xit('should_change_quantity_of_cart_item_to_1', () => {
    // GIVEN
    const cardMock: Card = mockCard();
    const { initialState } = fromReducer;
    const newState: Array<Cart> = [
      {
        id: 'pl1-1',
        name: 'Ampharos',
        quantity: 1,
        rarity: 'Rare Holo',
        price: 7.95,
      },
    ];

    // WHEN
    const actionAddCard = addCard({ card: cardMock });
    let state = fromReducer.cartReducer(initialState, actionAddCard);
    state = fromReducer.cartReducer(initialState, actionAddCard);

    const actionRemoveCard = removeCard({ card: mockCard() });
    const result = fromReducer.cartReducer(state, actionRemoveCard);

    // THEN
    expect(result).toEqual(newState);
    expect(result).not.toBe(newState);
  });

  it('should_remove_cart_item_from_cart', () => {
    // GIVEN
    const cardMock: Card = mockCard();
    const { initialState } = fromReducer;
    const newState: Array<Cart> = [];

    const actionAddCard = addCard({ card: cardMock });
    const state = fromReducer.cartReducer(initialState, actionAddCard);

    // WHEN
    const actionRemoveCard = removeCartItem({ cart: mockCart() });
    const result = fromReducer.cartReducer(state, actionRemoveCard);

    // THEN
    expect(result).toEqual(newState);
    expect(result).not.toBe(newState);
  });
});

function mockCard(): Card {
  return {
    id: 'pl1-1',
    name: 'Ampharos',
    hp: '130',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [181],
    tcgplayer: {
      prices: {
        holofoil: {
          mid: 7.95,
        },
        reverseHolofoil: {
          mid: 14,
        },
      },
    },
  };
}

function mockCart(): Cart {
  return {
    id: 'pl1-1',
    name: 'Ampharos',
    quantity: 1,
    rarity: 'Rare Holo',
    price: 7.95,
  };
}
