import { Link } from 'react-router-dom';
import { ClassName } from '../../constants/class-name';
import { Camera } from '../../types/camera.types';
import { getRoute } from '../../utils/utils.router';

import ProductImage from '../product-image/product-image';
import ProductPrice from '../product-price/product-price';
import ProductTitle from '../product-title/product-title';
import Rating from '../rating/rating';
import { useAppDispatch } from '../../store/hooks/store.index';
import { toggleOpenStatus } from '../../store/slices/modal-slice';

type ProductTypeProps = {
  product: Camera;
}

function ProductCard({ product }: ProductTypeProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { id, name, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = product;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <ProductImage className={ClassName.ProductCard} name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} />
      </div>
      <div className="product-card__info">
        <Rating className={ClassName.ProductCard} rating={rating} reviewCount={reviewCount} />
        <ProductTitle className={ClassName.ProductCard} name={name} />
        <ProductPrice className={ClassName.ProductCard} price={price} />
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={() => dispatch(toggleOpenStatus())}
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={getRoute(id)}>Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
