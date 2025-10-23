import { useRef } from "react";
import { ACTIVE_CLASS } from "../../constants/class-name";
import { useModal } from "../../store/hooks/useModal";
import { useAppDispatch } from "../../store/hooks/store.index";
import { closeModal } from "../../store/slices/modal-slice/modal-slice";
import { useModalOpen } from "../../hooks/use-modal-open";
import { ModalComponentsMap } from "./modal.const";

function Modal(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const modalContentRef = useRef<HTMLDivElement | null>(null);

  const { isOpen, modalContentType, modalContentProps } = useModal();

  useModalOpen(isOpen, modalContentRef, () => dispatch(closeModal()));

  if (!modalContentType || !modalContentProps) {
    return null;
  } //! Обрати внимание на типизацию, реши вопрос с возможным отсутсвием пропсов

  const ModalContent = ModalComponentsMap[modalContentType];

  return (
    <div className={`modal ${isOpen ? ACTIVE_CLASS : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" ref={modalContentRef}>
          <ModalContent {...modalContentProps} />
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => dispatch(closeModal())}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
