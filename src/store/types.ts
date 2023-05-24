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
