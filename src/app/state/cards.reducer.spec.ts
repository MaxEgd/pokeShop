import { Card } from '../models/card.model';
import { retrievedCardList } from './cards.action';
import * as fromReducer from './cards.reducer';

describe('retrievedBookList action', () => {
  it('should retrieve all books and update the state in an immutable way', () => {

    const  initialState  = fromReducer;
    const newState: Array<Card> = [
      {
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
      },
    ];
    const action = retrievedCardList({ cards: newState });
    // const state = fromReducer.cardsReducer(initialState, action);

    // expect(state).toEqual(newState);
    // expect(state).not.toBe(newState);
  });
});
