import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetNews } from "./types";

const newsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": import.meta.env.VITE_BING_COIN_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_BING_BASE_HOST,
};

const createRequest = (url: string) => ({ url, headers: newsHeaders });

export const NewsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<GetNews, [count: number]>({
      query: (count) =>
        createRequest(
          `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = NewsApi;
