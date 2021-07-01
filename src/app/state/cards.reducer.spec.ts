import { Card } from '../models/card.model';
import { retrievedCardList } from './cards.action';
import * as fromReducer from './cards.reducer';

describe('retrievedCardList action', () => {
  it('should_retrieve_all_cards_and_update_the_state_in_an_immutable_way', () => {
    const { initialState } = fromReducer;
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

    const cardList = [
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
    const action = retrievedCardList({ cards: cardList });
    const state = fromReducer.cardsReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
