import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CARDS_PER_PAGE, DEFAULT_START_PAGE_NUMBER } from "../../../components/pagination/pagination.const";
import { SliceName } from "../slices.const";
import { State } from "../../store.type";

type PaginationState = {
  currentPage: number,
  totalPages: number | null,
};

const initialState: PaginationState = {
  currentPage: DEFAULT_START_PAGE_NUMBER,
  totalPages: null,
};

const paginationSlice = createSlice({
  name: SliceName.Pagination,
  initialState,
  reducers: {
    setCurrentPage: (state: PaginationState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state: PaginationState, action: PayloadAction<number>) => {
      state.totalPages = Math.ceil(action.payload / CARDS_PER_PAGE);
    },
  }
})

export const getCurrentPage = (state: State) => state.pagination.currentPage;
export const getTotalPages = (state: State) => state.pagination.totalPages;

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;

export default paginationSlice;
