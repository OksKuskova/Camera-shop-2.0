import { createSlice } from "@reduxjs/toolkit"
import { SliceName } from "./slices.const";
import { State } from "../store.type";

type ModalState = {
  isOpen: boolean,
}

const initialState: ModalState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: SliceName.Modal,
  initialState,
  reducers: {
    toggleOpenStatus(state) {
      state.isOpen = !state.isOpen;
    }
  }
})

export const isModalOpen = (state: State) => state.modal.isOpen;

export const { toggleOpenStatus } = modalSlice.actions;

export default modalSlice;
