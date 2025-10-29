import { useGetCamerasQuery } from '../../store/api/api';
import { Camera } from '../../types/camera.types';

import FallbackState from '../../components/fallback-state/fallback-state';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import { errorToFallbackProps } from '../../components/fallback-state/fallback-state.utils';
import { AppError } from '../../types/app-error.type';

function Catalog(): JSX.Element {

  const { data: products, isLoading, isError, error, refetch } = useGetCamerasQuery();

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <FallbackState {...errorToFallbackProps(error as AppError, refetch)} />
  }

  if (!products || products.length === 0) {
    return <FallbackState />
  }

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
            <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <div className="catalog__aside">
              <img src="img/banner.png" />
              {/* <div className="catalog-filter">
                  <form action="#">
                    <h2 className="visually-hidden">Фильтр</h2>
                    <fieldset className="catalog-filter__block">
                      <legend className="title title&#45;&#45;h5">Цена, ₽</legend>
                      <div className="catalog-filter__price-range">
                        <div className="custom-input">
                          <label>
                            <input type="number" name="price" placeholder="от"></input>
                          </label>
                        </div>
                        <div className="custom-input">
                          <label>
                            <input type="number" name="priceUp" placeholder="до"></input>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="catalog-filter__block">
                      <legend className="title title&#45;&#45;h5">Категория</legend>
                      <div className="custom-radio catalog-filter__item">
                        <label>
                          <input type="radio" name="category" value="photocamera"><span className="custom-radio__icon"></span><span className="custom-radio__label">Фотокамера</span></input>
                        </label>
                      </div>
                      <div className="custom-radio catalog-filter__item">
                        <label>
                          <input type="radio" name="category" value="videocamera"><span className="custom-radio__icon"></span><span className="custom-radio__label">Видеокамера</span></input>
                        </label>
                      </div>
                    </fieldset>
                    <fieldset className="catalog-filter__block">
                      <legend className="title title&#45;&#45;h5">Тип камеры</legend>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="digital"><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Цифровая</span></input>
                        </label>
                      </div>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="film" disabled><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Плёночная</span></input>
                        </label>
                      </div>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="snapshot"><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Моментальная</span></input>
                        </label>
                      </div>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="collection" disabled><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Коллекционная</span></input>
                        </label>
                      </div>
                    </fieldset>
                    <fieldset className="catalog-filter__block">
                      <legend className="title title&#45;&#45;h5">Уровень</legend>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="zero"><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Нулевой</span></input>
                        </label>
                      </div>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="non-professional"><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Любительский</span></input>
                        </label>
                      </div>
                      <div className="custom-checkbox catalog-filter__item">
                        <label>
                          <input type="checkbox" name="professional"><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Профессиональный</span></input>
                        </label>
                      </div>
                    </fieldset>
                    <button className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
                    </button>
                  </form>
                </div> */}
            </div>
            <div className="catalog__content">
              {/* <div className="catalog-sort">
                  <form action="#">
                    <div className="catalog-sort__inner">
                      <p className="title title&#45;&#45;h5">Сортировать:</p>
                      <div className="catalog-sort__type">
                        <div className="catalog-sort__btn-text">
                          <input type="radio" id="sortPrice" name="sort"></input>
                          <label htmlFor="sortPrice">по цене</label>
                        </div>
                        <div className="catalog-sort__btn-text">
                          <input type="radio" id="sortPopular" name="sort"></input>
                          <label htmlFor="sortPopular">по популярности</label>
                        </div>
                      </div>
                      <div className="catalog-sort__order">
                        <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;up">
                          <input type="radio" id="up" name="sort-icon" aria-label="По возрастанию"></input>
                          <label htmlFor="up">
                            <svg width="16" height="14" aria-hidden="true">
                              <use xlinkHref="#icon-sort"></use>
                            </svg>
                          </label>
                        </div>
                        <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;down">
                          <input type="radio" id="down" name="sort-icon" aria-label="По убыванию"></input>
                          <label htmlFor="down">
                            <svg width="16" height="14" aria-hidden="true">
                              <use xlinkHref="#icon-sort"></use>
                            </svg>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              <div className="cards catalog__cards">
                {
                  products.map((product: Camera) => <ProductCard key={product.id} product={product} />)
                }
              </div>
              {/* <div className="pagination">
                  <ul className="pagination__list">
                    <li className="pagination__item"><a className="pagination__link pagination__link&#45;&#45;active" href="1">1</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="2">2</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="3">3</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link pagination__link&#45;&#45;text" href="2">Далее</a>
                    </li>
                  </ul>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
