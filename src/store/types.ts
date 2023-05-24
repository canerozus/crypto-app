export interface GetCryptocurrencies {
  data: { coins: Coin[]; stats: Stats };
}
interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: number;
  total24hVolume: number;
}
interface Coin {
  change:number;
  marketCap: number;
  iconUrl: string;
  rank: number;
  uuid: string;
  name: string;
  price: number;
}
