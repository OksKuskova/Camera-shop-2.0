import { RefObject } from "react";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import useOutsideClick from "./use-outside-click";
import { useEscKeydown } from "./use-esc-keydown";

export function useModalOpen<T extends HTMLElement>(isOpen: boolean, modalContentRef: RefObject<T>, handleModalClose: () => void) {

  useLockBodyScroll(isOpen);
  useOutsideClick(modalContentRef, handleModalClose, isOpen);
  useEscKeydown(handleModalClose, isOpen);

}
