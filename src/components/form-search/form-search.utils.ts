import { Camera } from "../../types/camera.types"
import { SearchProduct } from "./form-search.type"

export const getProductsByName = (products: Camera[], query: string): SearchProduct[] => {
  const normalizedQuery = query.toLowerCase();

  return products
    .filter(({ name }) => name.toLowerCase().includes(normalizedQuery))
    .map(({ id, name }) => ({ id, name }));
};
