
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/store.index";
import { getUsersPriceRange } from "../store/slices/filter-slice/filter-slice";
import { Camera } from "../types/camera.types";
import { setTotalPages } from "../store/slices/pagination-slice/pagination.slice";

export function useFilterByPrice(availableProducts: Camera[]) {
  const dispatch = useAppDispatch();

  const { min, max } = useAppSelector(getUsersPriceRange);

  const filteredProducts = useMemo(() => availableProducts.filter(({ price }) => {
    const isMinOk = min === null || price >= min;
    const isMaxOk = max === null || price <= max;

    return isMinOk && isMaxOk;
  }), [availableProducts, min, max]);

  if (filteredProducts.length > 0) {
    dispatch(setTotalPages(filteredProducts.length));
  }

  return filteredProducts;
}
