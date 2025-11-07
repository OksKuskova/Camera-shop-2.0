import { useGetCamerasQuery } from '../../store/api/api';
import { Camera } from '../../types/camera.types';
import { resolveCatalogData, sourceToFallbackProps } from '../../components/fallback-state/fallback-state.utils';

import FallbackState from '../../components/fallback-state/fallback-state';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FormSort from '../../components/form-sort/form-sort';
import { useCatalogSort } from '../../hooks/use-catalog-sort';


function Catalog(): JSX.Element {
  const { data, isLoading, isError, error, refetch } = useGetCamerasQuery();

  const result = resolveCatalogData(data, isError, error, refetch);

  const { sort, handleSortChange, sortedProducts } = useCatalogSort(result.type === 'success' ? result.products : []);

  if (isLoading) {
    return <Loader />
  }

  if (result.type === 'fallback') {
    return <FallbackState {...sourceToFallbackProps(result.source)} />
  }

  return (
    <div className="page-content">
      <Breadcrumbs />
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
              <FormSort sort={sort} onChange={handleSortChange} />
              <div className="cards catalog__cards">
                {
                  sortedProducts.map((product: Camera) => <ProductCard key={product.id} product={product} />)
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
