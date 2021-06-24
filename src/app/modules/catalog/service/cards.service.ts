import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from 'src/app/models/card.model';
import { CardsResponse } from 'src/app/models/cardsReponse.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  // TODO: variables à exporter dans un fichier de constantes.
  private token = 'ec312660-2109-4c34-932f-64c2ebeff500';
  private getCardsUrl = 'https://api.pokemontcg.io/v2/cards';
  private getCardsUrlHoloRare = 'https://api.pokemontcg.io/v2/cards?q=!rarity:"rare holo"';

  /**
   * Retourne une liste de cartes pokémon depuis l'API.
   * @returns le tableau de cartes
   */
  getCards(): Observable<Card[]> {
    // TODO: header à externaliser car utilisé dans toutes les requêtes http. (inutile ici car l'on utilise 1 seul service pour l'exercice)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': this.token
    });

    return this.http.get<CardsResponse>(this.getCardsUrl, { headers }).pipe(
      map((response) => {
        console.log('getCards: ', response);
        return response.data as Card[];
      })
    );
  }

  /**
   * Retourne une liste filtrée de cartes pokémon depuis l'API.
   * @returns le tableau de cartes
   */
   getFilteredCards(): Observable<Card[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': this.token
    });

    return this.http.get<CardsResponse>(this.getCardsUrlHoloRare, { headers }).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

}
