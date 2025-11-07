import { ChangeEvent, useMemo, useState } from "react";
import { SORT_TYPE_DEFAULT, SORT_ORDER_DEFAULT } from "../components/form-sort/form-sort.const";
import { Sort } from "../components/form-sort/form-sort.type";
import { sortProducts } from "../components/form-sort/form-sort.utils";
import { Camera } from "../types/camera.types";

export function useCatalogSort(products: Camera[]) {
  const [sort, setSort] = useState<Sort>({
    type: SORT_TYPE_DEFAULT,
    order: SORT_ORDER_DEFAULT,
  })

  const handleSortChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = evt.target;
    setSort({ ...sort, [name]: id });
  }

  const sortedProducts = useMemo(() => {
    if (products.length === 0) {
      return [];
    }
    return sortProducts(products, sort);
  }, [products, sort]);

  return { sort, handleSortChange, sortedProducts };
}
