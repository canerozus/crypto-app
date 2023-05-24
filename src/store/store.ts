import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "./cryptoApi";
import { NewsApi } from "./cryptoNewsApi";

const store = configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(CryptoApi.middleware, NewsApi.middleware),
});
export default store;
