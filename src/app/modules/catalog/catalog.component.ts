import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Card } from 'src/app/models/card.model';
import { addCard, removeCard } from 'src/app/state/cart.action';
import { retrievedCardList } from './../../state/cards.action';
import { selectCards } from './../../state/cards.selector';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  constructor(public store: Store, private cardsService: CardsService) {}

  // TODO: comme ça ou @Input() ?
  cards$ = this.store.pipe(select(selectCards));

  /**
   * Actualise la liste des cartes en fonction de l'état de la checkbox (true ou false)
   * @param $event event de la checkbox
   */
  refreshCards($event): void {
    if ($event.target.checked) {
      this.getFilteredCard();
    } else {
      this.getCards();
    }
  }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cardsService.getCards().subscribe((cards) => {
      this.executeRetrievedCardList(cards);
    });
  }

  getFilteredCard(): void {
    // S'il n'y avait que peu de cartes j'aurais simplement pu appliquer un filtre sur les cartes du store (cards.filter(c => c.rarity === 'Holo Rare')).
    // Ici il vaut mieux refaire un appel avec le critère de recherche correspondant.
    this.cardsService.getFilteredCards().subscribe((cards) => {
      this.executeRetrievedCardList(cards);
    });
  }

  executeRetrievedCardList(cards: Card[]): void {
    this.store.dispatch(retrievedCardList({ cards }));
  }

  /**
   * Retourne le prix d'une carte.
   * @param card la carte concernée
   * @returns le premier prix trouvé
   */
  getPrice(card: Card): string {
    // Retourne le premier prix médian trouvé. Pour la démo je ne m'attarde pas sur le prix en
    // fonction du type de la carte (normal, holofoil, holofoil reverse, low/mid/high/market etc)
    return Object.values(card.tcgplayer.prices)[0]['mid'].toString() || ' - ';
  }

  addCard(card: Card): void {
    this.store.dispatch(addCard({card}));

  }

  removeCard(card: Card): void {
    this.store.dispatch(removeCard({card}));
  }
}
