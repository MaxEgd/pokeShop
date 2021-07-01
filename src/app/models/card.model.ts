export interface Card {
  id: string;
  name: string;
  rarity: string;
  hp: string;
  nationalPokedexNumbers: number[];
  tcgplayer: Tcgplayer;
}

export interface Tcgplayer {
  prices: { [key: string]: { [key: string]: number } };
}
