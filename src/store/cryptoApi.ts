import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetCryptocurrencies, GetCryptoId } from "./types";

const CryptoHeaders = {
  "X-RapidAPI-Host": import.meta.env.VITE_RAPID_BASE_HOST,
  "X-RapidAPI-Key": import.meta.env.VITE_RAPID_COIN_KEY,
};

const createRequest = (url: string) => ({ url, headers: CryptoHeaders });
export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query<GetCryptocurrencies, [count:number]>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoById: builder.query<any, [coinId: string]>({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptoByNameQuery, useGetCryptoByIdQuery } = CryptoApi;
