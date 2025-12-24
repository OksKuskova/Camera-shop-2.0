import { combineReducers } from "@reduxjs/toolkit";
import { SliceName } from "./slices/slices.const";
import { api } from "./api/api";

import modalSlice from "./slices/modal-slice/modal-slice";
import filterSlice from "./slices/filter-slice/filter-slice";
import paginationSlice from "./slices/pagination-slice/pagination.slice";

export const rootReducer = combineReducers({
  [SliceName.Modal]: modalSlice.reducer,
  [api.reducerPath]: api.reducer,
  [SliceName.Filter]: filterSlice.reducer,
  [SliceName.Pagination]: paginationSlice.reducer,
})
