import { combineReducers } from "@reduxjs/toolkit";
import { SliceName } from "./slices/slices.const";
import modalSlice from "./slices/modal-slice";

export const rootReducer = combineReducers({
  [SliceName.Modal]: modalSlice.reducer,
})
