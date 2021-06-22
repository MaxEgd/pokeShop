export interface Card {
  id: string;
  name: string;
  rarity: string;
  tcgplayer: Tcgplayer;
}

export interface Tcgplayer {
  prices: Array<PriceCard>;
}

export interface PriceCard {
  [key: string]: number;
}
