

import { useParams } from "react-router-dom";
import { ClassName } from "../../constants/class-name";
import { useGetCameraByIdQuery } from "../../store/api/api";
import { sourceToFallbackProps } from "../../components/fallback-state/fallback-state.utils";
import { AppError } from "../../types/app-error.type";
import { FallbackSource } from "../../components/fallback-state/fallback-state.type";

import ProductImage from "../../components/product-image/product-image";
import Rating from "../../components/rating/rating";
import ProductPrice from "../../components/product-price/product-price";
import Tabs from "../../components/tabs/tabs";
import ReviewBlock from "../../components/review/review-block";
import ProductSimilar from "../../components/product-similar/product-similar";
import FallbackState from "../../components/fallback-state/fallback-state";
import Loader from "../../components/loader/loader";

function Product(): JSX.Element {
  const { id } = useParams();
  const { data: currentProduct, isLoading, isError, error, refetch } = useGetCameraByIdQuery(Number(id));

  const fallbackSource: FallbackSource | null = isError
    ? { type: 'error', error: error as AppError, refetch }
    : (!currentProduct)
      ? { type: 'empty', refetch }
      : null;

  if (isLoading) {
    return <Loader />
  }

  if (fallbackSource) {
    return <FallbackState {...sourceToFallbackProps(fallbackSource)} />
  }

  const { name, rating, reviewCount, price, vendorCode, type, category, level, description, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = currentProduct!;

  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">Главная
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="catalog.html">Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </a>
            </li>
            <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Ретрокамера «Das Auge IV»</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product-img">
              <ProductImage className={ClassName.Product} name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} />
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{name}</h1>
              <Rating className={ClassName.Product} rating={rating} reviewCount={reviewCount} />
              <ProductPrice className={ClassName.Product} price={price} />
              <button className="btn btn--purple" type="button">
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>Добавить в корзину
              </button>
              <Tabs vendorCode={vendorCode} type={type} category={category} level={level} description={description} />
            </div>
          </div>
        </section>
      </div>
      <div className="page-content__section">
        <ProductSimilar />
      </div>
      <div className="page-content__section">
        <ReviewBlock cameraId={Number(id)} />
      </div>
    </div>
  );
}

export default Product;

