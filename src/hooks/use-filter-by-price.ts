
import { useMemo } from "react";
import { useAppSelector } from "../store/hooks/store.index";
import { getUsersPriceRange } from "../store/slices/filter-slice/filter-slice";
import { Camera } from "../types/camera.types";

export function useFilterByPrice(availableProducts: Camera[]) {
  const { min, max } = useAppSelector(getUsersPriceRange);

  const filteredProducts = useMemo(() => availableProducts.filter(({ price }) => {
    const isMinOk = min === null || price >= min;
    const isMaxOk = max === null || price <= max;

    return isMinOk && isMaxOk;
  }), [availableProducts, min, max]);

  return filteredProducts;
}
