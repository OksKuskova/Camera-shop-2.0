import { useGetCamerasQuery } from '../../store/api/api';
import { Camera } from '../../types/camera.types';
import { resolveCatalogData, sourceToFallbackProps } from '../../components/fallback-state/fallback-state.utils';
import { useCatalogSort } from '../../hooks/use-catalog-sort';
import { useFilterByCategoryTypeLevel } from '../../hooks/use-filter-by-category-type-level';
import { useFilterByPrice } from '../../hooks/use-filter-by-price';

import FallbackState from '../../components/fallback-state/fallback-state';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FormSort from '../../components/form-sort/form-sort';
import FormFilter from '../../components/form-filter/form-filter';
import Pagination from '../../components/pagination/pagination';
import { useState } from 'react';
import { CARDS_PER_PAGE, DEFAULT_START_PAGE_NUMBER } from '../../components/pagination/pagination.const';

function Catalog(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_START_PAGE_NUMBER);

  const { data, isLoading, isError, error, refetch } = useGetCamerasQuery();

  const result = resolveCatalogData(data, isError, error, refetch);

  const productsByCategoryTypeLevel = useFilterByCategoryTypeLevel(result.type === 'success' ? result.products : [])
  const filteredProducts = useFilterByPrice(productsByCategoryTypeLevel);

  const { sort, handleSortChange, sortedProducts } = useCatalogSort(filteredProducts);

  if (isLoading) {
    return <Loader />
  }

  if (result.type === 'fallback') {
    return <FallbackState {...sourceToFallbackProps(result.source)} />
  }

  const totalPages = Math.ceil(sortedProducts.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const cards = sortedProducts.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
                  cards.map((product: Camera) => <ProductCard key={product.id} product={product} />)
                }
              </div>
              {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
