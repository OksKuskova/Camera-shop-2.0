import { useRef } from "react";
import { ACTIVE_CLASS } from "../../constants/class-name";
import { useModal } from "../../store/hooks/useModal";
import { useModalOpen } from "../../hooks/use-modal-open";
import { ModalComponentsMap } from "./modal.const";

function Modal(): JSX.Element | null {
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  const { isOpen, modalContentType, modalContentProps, handleModalClose } = useModal();

  const addFocusableRef = useModalOpen(isOpen, modalContentRef, handleModalClose);

  if (!modalContentType || !modalContentProps) {
    return null;
  } //! Обрати внимание на типизацию, реши вопрос с возможным отсутсвием пропсов

  const ModalContent = ModalComponentsMap[modalContentType];

  return (
    <div className={`modal ${isOpen ? ACTIVE_CLASS : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" ref={modalContentRef}>
          <ModalContent {...modalContentProps} addFocusableRef={addFocusableRef} />
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleModalClose}
            ref={addFocusableRef}>
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
