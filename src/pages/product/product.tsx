

import { useParams } from "react-router-dom";
import { getCameraById } from "../../mocks/cameras";
import { ClassName } from "../../constants/class-name";

import ProductImage from "../../components/product-image/product-image";
import NotFound from "../not-found/not-found";
import Rating from "../../components/rating/rating";
import ProductPrice from "../../components/product-price/product-price";
import Tabs from "../../components/tabs/tabs";
import ReviewBlock from "../../components/review/review-block";
import { getProductSimilar } from "../../mocks/product-similar";
import SliderSwiper from "../../components/slider-swiper/slider-swiper";
import { Navigation } from "swiper/modules";
import { Camera } from "../../types/camera.types";
import ProductCard from "../../components/product-card/product-card";
import ProductSimilar from "../../components/product-similar/product-similar";

function Product(): JSX.Element {
  const { id } = useParams();
  const currentProduct = getCameraById(Number(id));
  const productSimilar = getProductSimilar();

  if (!currentProduct) {
    return <NotFound />
  }

  const { name, rating, reviewCount, price, vendorCode, type, category, level, description, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = currentProduct;

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
        {/* <section className="product-similar">
          <div className="container">
            <h2 className="title title--h3">Похожие товары</h2>
            <div className="product-similar__slider">
              <SliderSwiper<Camera>
                modules={[Navigation]}
                sliderParams={{
                  slidesPerView: 3,
                  spaceBetween: 32,
                  navigation: {
                    prevEl: '.slider-controls.slider-controls--prev',
                    nextEl: '.slider-controls.slider-controls--next',
                  }
                }}

                slides={productSimilar}
                renderSlide={(item: Camera) => <ProductCard product={item} />}
              />

              <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд">
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
              <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" onClick={() => console.log('Клик')}>
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </section> */}
      </div>
      <div className="page-content__section">
        <ReviewBlock cameraId={Number(id)} />
      </div>
    </div>
  );
}

export default Product;

