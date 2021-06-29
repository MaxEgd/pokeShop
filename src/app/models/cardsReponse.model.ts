import { Card } from './card.model';

export interface CardsResponse {
  data: Array<Card>;
  count: number;
  page: number;
  pageSize: number;
  totalCount: number;
}
