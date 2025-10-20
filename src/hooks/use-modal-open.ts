import { RefObject } from "react";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import useOutsideClick from "./use-outside-click";

export function useModalOpen<T extends HTMLElement>(isOpen: boolean, modalContentRef: RefObject<T>, onOutside: () => void) {

  useLockBodyScroll(isOpen);
  useOutsideClick(modalContentRef, onOutside, isOpen);

}
