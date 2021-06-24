import { Card } from './card.model';

export interface CardsResponse {
  // TODO: mapper autres props si besoin (pour le count et la pagination)
  data: Card[];
}
