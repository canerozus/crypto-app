import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "./cryptoApi";

const store = configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware),
});
export default store;
