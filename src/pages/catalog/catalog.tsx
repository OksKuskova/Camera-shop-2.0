import { useGetCamerasQuery } from '../../store/api/api';
import { Camera } from '../../types/camera.types';
import { resolveCatalogData, sourceToFallbackProps } from '../../components/fallback-state/fallback-state.utils';
import { useCatalogSort } from '../../hooks/use-catalog-sort';
import { useFilterByCategoryTypeLevel } from '../../hooks/use-filter-by-category-type-level';
import { useFilterByPrice } from '../../hooks/use-filter-by-price';
import { usePagination } from '../../hooks/use-pagination';

import FallbackState from '../../components/fallback-state/fallback-state';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FormSort from '../../components/form-sort/form-sort';
import FormFilter from '../../components/form-filter/form-filter';
import Pagination from '../../components/pagination/pagination';
import { useFiltersUrlSync } from '../../hooks/use-filters-url-sync';

function Catalog(): JSX.Element {
  useFiltersUrlSync();

  const { data, isLoading, isError, error, refetch } = useGetCamerasQuery();

  const result = resolveCatalogData(data, isError, error, refetch);

  const productsByCategoryTypeLevel = useFilterByCategoryTypeLevel(result.type === 'success' ? result.products : [])
  const filteredProducts = useFilterByPrice(productsByCategoryTypeLevel);

  const { sort, handleSortChange, sortedProducts } = useCatalogSort(filteredProducts);

  const { shouldShowPagination, displayedCards } = usePagination(sortedProducts);

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
                  displayedCards.map((product: Camera) => <ProductCard key={product.id} product={product} />)
                }
              </div>
              {shouldShowPagination && <Pagination />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
