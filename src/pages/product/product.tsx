import { useParams } from "react-router-dom";
import { getCameraById } from "../../mocks/cameras";
import { ClassName } from "../../constants/class-name";

import ProductImage from "../../components/product-image/product-image";
import NotFound from "../not-found/not-found";
import Rating from "../../components/rating/rating";
import ProductPrice from "../../components/product-price/product-price";
import Tabs from "../../components/tabs/tabs";
import ReviewBlock from "../../components/review/review-block";

function Product(): JSX.Element {
  const { id } = useParams();
  const currentProduct = getCameraById(Number(id));

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
        <section className="product-similar">
          <div className="container">
            <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
            <div className="product-similar__slider">
              <div className="product-similar__slider-list">
                <div className="product-card is-active">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet="img/content/fast-shot.webp, img/content/fast-shot@2x.webp 2x" />
                      <img src="img/content/fast-shot.jpg" srcSet="img/content/fast-shot@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <p className="visually-hidden">Рейтинг: 4</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                    </div>
                    <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
                <div className="product-card is-active">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                      <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <p className="visually-hidden">Рейтинг: 3</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                    </div>
                    <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
                <div className="product-card is-active">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet="img/content/instaprinter.webp, img/content/instaprinter@2x.webp 2x" />
                      <img src="img/content/instaprinter.jpg" srcSet="img/content/instaprinter@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <p className="visually-hidden">Рейтинг: 5</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                    </div>
                    <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                      <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <p className="visually-hidden">Рейтинг: 4</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                    </div>
                    <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                      <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <svg width="17" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                      <p className="visually-hidden">Рейтинг: 3</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                    </div>
                    <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
              </div>
              <button className="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" disabled>
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
              <button className="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд">
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="page-content__section">
        <ReviewBlock cameraId={Number(id)} />
      </div>
    </div>
  );
}

export default Product;

