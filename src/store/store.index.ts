import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./store.reducer";
import { api } from "./api/api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
