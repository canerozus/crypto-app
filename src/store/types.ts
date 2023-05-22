export interface GetCryptocurrencies {
  data: { coins: Coin[]; stats: Stats };
}
interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}
interface Coin {
  uuid: string;
  name: string;
  price: number;
}
