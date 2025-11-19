import { useMemo } from "react";
import { useAppSelector } from "../store/hooks/store.index";
import { getCategory, getLevels, getTypes } from "../store/slices/filter-slice/filter-slice";
import { Camera } from "../types/camera.types";

export function useFilter(products: Camera[]): Camera[] {
  const category = useAppSelector(getCategory);
  const types = useAppSelector(getTypes);
  const levels = useAppSelector(getLevels);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchType = types.length ? types.includes(product.type) : true;
    const matchLevel = levels.length ? levels.includes(product.level) : true;

    return matchCategory && matchType && matchLevel;
  }), [products, category, types, levels]);

  return filteredProducts;
}
