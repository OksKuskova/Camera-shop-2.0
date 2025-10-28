import { combineReducers } from "@reduxjs/toolkit";
import { SliceName } from "./slices/slices.const";
import modalSlice from "./slices/modal-slice/modal-slice";
import { api } from "./api/api";

export const rootReducer = combineReducers({
  [SliceName.Modal]: modalSlice.reducer,
  [api.reducerPath]: api.reducer,
})
