import { ClassName } from "../../constants/class-name";
import { Camera } from "../../types/camera.types"
import ProductPrice from "../product-price/product-price";

type BasketItemDescriptionProps = Pick<Camera, 'name' | 'vendorCode' | 'level' | 'type' | 'category'> & Partial<Pick<Camera, 'price'>>

function BasketItemDescription({ name, vendorCode, level, type, category, price }: BasketItemDescriptionProps): JSX.Element {
  return (
    <div className="basket-item__description">
      <p className="basket-item__title">{name}</p>
      <ul className="basket-item__list">
        <li className="basket-item__list-item">
          <span className="basket-item__article">Артикул:</span>
          <span className="basket-item__number">{vendorCode}</span>
        </li>
        <li className="basket-item__list-item">{`${type} ${category}`}</li>
        <li className="basket-item__list-item">{`${level} уровень`}</li>
      </ul>
      {price && <ProductPrice className={ClassName.BasketItem} price={price} />}
    </div>
  )
}

export default BasketItemDescription;
