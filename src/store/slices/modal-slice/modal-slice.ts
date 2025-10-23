import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"
import { SliceName } from "../slices.const";
import { State } from "../../store.type";
import { ModalContentType, ModalPropsMap, OpenModalPayload } from "./modal-slice.type";

type ModalState = {
  isOpen: boolean,
  modalContent: ModalContentType | null,
  modalContentProps: ModalPropsMap[ModalContentType] | null,
}

const initialState: ModalState = {
  isOpen: false,
  modalContent: null,
  modalContentProps: null,
}

const modalSlice = createSlice({
  name: SliceName.Modal,
  initialState,
  reducers: {
    openModal: <T extends ModalContentType>(state: Draft<ModalState>, action: PayloadAction<OpenModalPayload<T>>) => {
      state.isOpen = true;
      state.modalContent = action.payload.modalContent;
      state.modalContentProps = action.payload.modalContentProps || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalContent = null,
        state.modalContentProps = null,
    }
  }
})

export const isModalOpen = (state: State) => state.modal.isOpen;
export const getModalContent = (state: State) => state.modal.modalContent;
export const getModalContrntProps = (state: State) => state.modal.modalContentProps;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
