import { CameraCategory } from "../../constants/camera.const";
import { Camera, CameraCategoryValue, CameraTypeValue } from "../../types/camera.types";
import { CAMEL_TO_KEBAB, VIDEOCAMERA_DISABLED_TYPES } from "./form-filter.const";

export const toKebabCase = (data: string) => data.replace(CAMEL_TO_KEBAB.regex, CAMEL_TO_KEBAB.replace).toLowerCase();

export const isTypeDisabled = (type: CameraTypeValue, currentCategory: CameraCategoryValue | null) => (
  currentCategory === CameraCategory.Videocamera ? VIDEOCAMERA_DISABLED_TYPES.includes(type) : false
)

export const getPriceRange = (products: Camera[]) => {
  let min = Infinity;
  let max = -Infinity;

  for (const product of products) {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  }

  return { min, max };
}
