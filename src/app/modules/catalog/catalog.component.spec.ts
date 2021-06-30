import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore, MockStore, getMockStore } from '@ngrx/store/testing';
import { Card } from 'src/app/models/card.model';
import { AppState } from 'src/app/state/app.state';
import { retrievedCardList } from 'src/app/state/cards.action';
import { initialState } from 'src/app/state/cards.reducer';
import { selectCards } from 'src/app/state/cards.selector';
import { addCard, removeCard } from 'src/app/state/cart.action';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CatalogComponent } from './catalog.component';

fdescribe('CatalogComponent', () => {
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

  it('add method should dispatch add action', () => {
    component.addCard(card);
    expect(store.dispatch).toHaveBeenCalledWith(addCard({ card }));
  });

  it('removeCard method should dispatch removeCard action', () => {
    component.removeCard(card);
    expect(store.dispatch).toHaveBeenCalledWith(removeCard({ card }));
  });

  it('removeCard method should dispatch removeCard action', () => {
    // WHEN
    component.executeRetrievedCardList([card]);

    // THEN
    expect(store.dispatch).toHaveBeenCalledWith(
      retrievedCardList({ cards: [card] })
    );
  });

  it('getPrice method should return price', () => {
    // WHEN
    const result = component.getPrice(card);

    // THEN
    expect(result).toEqual('7.95');
  });
});
