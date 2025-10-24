import { ComponentType } from "react";
import { CommonModalProps, ModalContentType, ModalPropsMap } from "../../store/slices/modal-slice/modal-slice.type";
import AddItem from "./modal.add-item";

export const MODAL_TRANSITION_TIME = 600;

export const ModalContent = {
  ADD_ITEM: 'add-item',
} as const;

export const ModalComponentsMap: { [K in ModalContentType]: ComponentType<ModalPropsMap[K] & CommonModalProps> } = {
  [ModalContent.ADD_ITEM]: AddItem,
}
