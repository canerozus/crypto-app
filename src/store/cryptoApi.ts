import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetCryptocurrencies } from "./types";

const CryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "78bad7417amsh7e901fb2e65687ep1cd148jsn462540f04f26",
};

const createRequest = (url: string) => ({ url, headers: CryptoHeaders });
export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query<Array<GetCryptocurrencies>, void>({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptoByNameQuery } = CryptoApi;
