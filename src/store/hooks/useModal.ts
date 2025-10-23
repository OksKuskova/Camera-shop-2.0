import { getModalContent, getModalContrntProps, isModalOpen } from "../slices/modal-slice/modal-slice";
import { useAppSelector } from "./store.index";

export function useModal() {
  const isOpen = useAppSelector(isModalOpen);
  const modalContentType = useAppSelector(getModalContent);
  const modalContentProps = useAppSelector(getModalContrntProps);

  return {
    isOpen,
    modalContentType,
    modalContentProps,
  }
}
