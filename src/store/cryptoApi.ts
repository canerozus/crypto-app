import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetCryptocurrencies } from "./types";

const CryptoHeaders = {
  "X-RapidAPI-Host": import.meta.env.VITE_RAPID_BASE_HOST,
  "X-RapidAPI-Key": import.meta.env.VITE_RAPID_COIN_KEY,
};

const createRequest = (url: string) => ({ url, headers: CryptoHeaders });
export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query<GetCryptocurrencies, void>({
      query: () => createRequest(`/coins`),
    }),
  }),
});

export const { useGetCryptoByNameQuery } = CryptoApi;
