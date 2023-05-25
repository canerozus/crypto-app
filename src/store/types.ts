export interface GetCryptocurrencies {
  data: { coins: Coin[]; stats: Stats };
}
export interface GetCryptoId {
  data: { coin: CoinId };
}
interface CoinId {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  numberOfMarkets: number;
  numberOfExchanges: number;
  marketCap: number;
  allTimeHigh: AllTimeHigh;
  price: number;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
}
interface AllTimeHigh{
  price: number
  timeStamp: number;

}
interface Supply {
  confirmed: boolean;
  supplyAt: number;
  max: string;
  total: number;
  circulating:number;
}
interface Link {
  name: string;
  type: string;
  url: string;
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
  change: number;
  marketCap: number;
  iconUrl: string;
  rank: number;
  uuid: string;
  name: string;
  price: number;
}

export interface GetNews {
  _type: string;
  webSearchUrl: string;
  value: Value[];
}
interface Value {
  _type: string;
  name: string;
  url: string;
  description: string;
  datePublished: string;
  image: Image;
  provider: Provider[];
}
interface Provider {
  name: string;
  image: Image;
}

interface Image {
  _type: string;
  thumbnail: Thumbnail;
}

interface Thumbnail {
  contentUrl: string;
}
