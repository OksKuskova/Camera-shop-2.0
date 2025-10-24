import { ModalContent } from "../../../components/modal/modal.const";
import { Value } from "../../../types/utils.type";

export type ModalPropsMap = {
  [ModalContent.ADD_ITEM]: { id: number }
}

export type ModalContentType = Value<typeof ModalContent>;

export type CommonModalProps = {
  addFocusableRef: (el: HTMLElement | null) => void,
}

export type OpenModalPayload<T extends ModalContentType> = {
  modalContent: T;
  modalContentProps?: ModalPropsMap[T];
};
