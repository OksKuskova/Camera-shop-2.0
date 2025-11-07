import { Camera } from "../../types/camera.types"
import { SORT_ORDER_DEFAULT } from "./form-sort.const"
import { Sort } from "./form-sort.type"

export const sortProducts = (data: Camera[], sort: Sort) => {
  const { type, order } = sort;

  return data.toSorted((leftProduct, rightProduct) => (
    order === SORT_ORDER_DEFAULT
      ? leftProduct[type] - rightProduct[type]
      : rightProduct[type] - leftProduct[type]
  ))
};
