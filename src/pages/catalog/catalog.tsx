import { useGetCamerasQuery } from '../../store/api/api';
import { Camera } from '../../types/camera.types';
import { resolveCatalogData, sourceToFallbackProps } from '../../components/fallback-state/fallback-state.utils';
import { useCatalogSort } from '../../hooks/use-catalog-sort';

import FallbackState from '../../components/fallback-state/fallback-state';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FormSort from '../../components/form-sort/form-sort';
import FormFilter from '../../components/form-filter/form-filter';
import { useFilterByCategoryTypeLevel } from '../../hooks/use-filter';

function Catalog(): JSX.Element {
  const { data, isLoading, isError, error, refetch } = useGetCamerasQuery();

  const result = resolveCatalogData(data, isError, error, refetch);

  const productsByCategoryTypeLevel = useFilterByCategoryTypeLevel(result.type === 'success' ? result.products : [])

  const { sort, handleSortChange, sortedProducts } = useCatalogSort(productsByCategoryTypeLevel);

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
              <FormFilter productsByCategoryTypeLevel={productsByCategoryTypeLevel} />
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
