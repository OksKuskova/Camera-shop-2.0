import { closeModal, getModalContent, getModalContrntProps, isModalOpen } from "../slices/modal-slice/modal-slice";
import { useAppDispatch, useAppSelector } from "./store.index";

export function useModal() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(isModalOpen);
  const modalContentType = useAppSelector(getModalContent);
  const modalContentProps = useAppSelector(getModalContrntProps);

  const onModalClose = () => dispatch(closeModal());

  return {
    isOpen,
    modalContentType,
    modalContentProps,
    handleModalClose: onModalClose,
  }
}
