function ModalError(): JSX.Element {
  return (
    <div className="modal__error">
      <p className="title title--h4">Товар не найден</p>
      <p className="modal__text">
        К сожалению, этот товар больше недоступен или был удалён.
      </p>
    </div>
  )
}
export default ModalError;
