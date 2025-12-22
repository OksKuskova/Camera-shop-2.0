import { ChangeEvent, useEffect, useMemo } from "react";
import { SORT_TYPE_DEFAULT, SORT_ORDER_DEFAULT, SORT_NAMES, SortType, SortOrder } from "../components/form-sort/form-sort.const";
import { Sort, SortOrderValue, SortTypeValue } from "../components/form-sort/form-sort.type";
import { sortProducts } from "../components/form-sort/form-sort.utils";
import { Camera } from "../types/camera.types";
import { useSearchParams } from "react-router-dom";

export function useCatalogSort(products: Camera[]) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { Type, Order } = SORT_NAMES;

  const sortTypeParam = searchParams.get(Type);
  const currentSortType = sortTypeParam && Object.values(SortType).includes(sortTypeParam as SortTypeValue)
    ? sortTypeParam as SortTypeValue
    : SORT_TYPE_DEFAULT;

  const sortOrderParam = searchParams.get(Order);
  const currentSortOrder = sortOrderParam && Object.values(SortOrder).includes(sortOrderParam as SortOrderValue)
    ? sortOrderParam as SortOrderValue
    : SORT_ORDER_DEFAULT;

  const sort: Sort = { type: currentSortType, order: currentSortOrder };

  const updateUrl = (type?: string, order?: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (type !== undefined) {
        if (type === SORT_TYPE_DEFAULT) {
          newParams.delete(Type);
        } else {
          newParams.set(Type, type);
        }
      }

      if (order !== undefined) {
        if (order === SORT_ORDER_DEFAULT) {
          newParams.delete(Order);
        } else {
          newParams.set(Order, order);
        }
      }

      return newParams;
    }, { replace: true })
  };

  useEffect(() => {
    let needClean = false;

    if (sortTypeParam && !Object.values(SortType).includes(sortTypeParam as SortTypeValue)) {
      needClean = true;
    }

    if (sortOrderParam && !Object.values(SortOrder).includes(sortOrderParam as SortOrderValue)) {
      needClean = true;
    }

    if (needClean) {
      updateUrl(currentSortType, currentSortType);
    }
  }, [searchParams]);

  const handleSortChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;

    if (name === Type) {
      updateUrl(id);
    } else {
      updateUrl(undefined, id);
    }
  };

  const sortedProducts = useMemo(() => {
    if (products.length === 0) {
      return [];
    }
    return sortProducts(products, sort);
  }, [products, sort]);

  return { sort, handleSortChange, sortedProducts };
}
