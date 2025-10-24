import { getCameraById } from "../../mocks/cameras";
import { Camera } from "../../types/camera.types";
import { ClassName } from "../../constants/class-name";

import ModalError from "./modal.error";
import ProductImage from "../product-image/product-image";
import BasketItemDescription from "../basket-item/basket-item-description";
import { CommonModalProps } from "../../store/slices/modal-slice/modal-slice.type";

type AddItemProps = Pick<Camera, 'id'> & CommonModalProps;

function AddItem({ id, addFocusableRef }: AddItemProps): JSX.Element {
  const currentProduct = getCameraById(id);

  if (!currentProduct) {
    return <ModalError />;
  }

  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, vendorCode, level, type, category, price } = currentProduct;

  return (
    <>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <ProductImage className={ClassName.BasketItem} name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} />
        </div>
        <BasketItemDescription name={name} vendorCode={vendorCode} level={level} type={type} category={category} price={price} />
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={addFocusableRef}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>Добавить в корзину
        </button>
      </div>
    </>
  )
}

export default AddItem;
