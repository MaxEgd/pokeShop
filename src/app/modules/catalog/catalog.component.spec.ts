import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Card } from 'src/app/models/card.model';
import { AppState } from 'src/app/state/app.state';
import { retrievedCardList } from 'src/app/state/cards.action';
import { addCard, removeCard } from 'src/app/state/cart.action';
import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let store: MockStore<AppState>;
  let card: Card = {
    id: 'pl1-1',
    name: 'Ampharos',
    hp: '130',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [181],
    tcgplayer: {
      prices: {
        holofoil: {
          low: 6.75,
          mid: 7.95,
          high: 10.99,
          market: 7.68,
          directLow: 7.74,
        },
        reverseHolofoil: {
          low: 2.85,
          mid: 14,
          high: 14.98,
          market: 2.16,
          directLow: null,
        },
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule],
      declarations: [CatalogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add_method_should_dispatch_add_action', () => {
    component.addCard(card);
    expect(store.dispatch).toHaveBeenCalledWith(addCard({ card }));
  });

  it('removeCard_method_should_dispatch_removeCard_action', () => {
    component.removeCard(card);
    expect(store.dispatch).toHaveBeenCalledWith(removeCard({ card }));
  });

  it('removeCard_method_should_dispatch_removeCard_action', () => {
    // WHEN
    component.executeRetrievedCardList([card]);

    // THEN
    expect(store.dispatch).toHaveBeenCalledWith(
      retrievedCardList({ cards: [card] })
    );
  });

  it('getPrice_method_should_return_price', () => {
    // WHEN
    const result = component.getPrice(card);

    // THEN
    expect(result).toEqual('7.95');
  });
});
