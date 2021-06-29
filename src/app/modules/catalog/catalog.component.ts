import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/card.model';
import { CardsResponse } from 'src/app/models/cardsReponse.model';
import { addCard, removeCard, retrievedCart } from 'src/app/state/cart.action';
import { selectCart } from 'src/app/state/cart.selector';
import { retrievedCardList } from './../../state/cards.action';
import { selectCards, selectCardsResponse } from './../../state/cards.selector';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  config: any;
// cartes: Card[] = [];
  constructor(public store: Store, private cardsService: CardsService) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
    };
    // this.store.pipe(select(selectCardsResponse)).subscribe(res => {
    //   if(res != undefined){
    //     this.cartes = new Array<Card>(res.totalCount);

    //     res.data.forEach(c => this.cartes.push(c));
    //     this.count = res;
    //   }
    // });
  }

  cards$ = this.store.pipe(select(selectCards));
// count;




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
    this.cardsService.getCards().subscribe((cardsResponse) => {
      console.log('cardsResponse', cardsResponse);
      this.executeRetrievedCardList(cardsResponse);

    });
  }

  getFilteredCard(): void {
    // S'il n'y avait que peu de cartes j'aurais simplement pu tout récupérer et appliquer un filtre sur les cartes du store (cards.filter(c => c.rarity === 'Holo Rare')).
    // Ici il vaut mieux refaire un appel avec le critère de recherche correspondant.
    this.cardsService.getFilteredCards().subscribe((cardsResponse) => {
      this.executeRetrievedCardList(cardsResponse);
    });
  }

  executeRetrievedCardList(cardsResponse: CardsResponse): void {
    this.store.dispatch(retrievedCardList({ cardsResponse }));
    console.log(this.store);
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
    this.store.dispatch(addCard({ card }));
  }

  removeCard(card: Card): void {
    this.store.dispatch(removeCard({ card }));
  }

  pageChange($event): void {
    this.config.currentPage = $event;
  }
}
