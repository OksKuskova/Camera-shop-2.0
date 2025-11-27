import { CameraCategory } from "../../constants/camera.const";
import { Camera, CameraCategoryValue, CameraTypeValue } from "../../types/camera.types";
import { CAMEL_TO_KEBAB, VIDEOCAMERA_DISABLED_TYPES } from "./form-filter.const";
import { UserPrice, PriceRange } from "./form-filter.type";

export const toKebabCase = (data: string) => data.replace(CAMEL_TO_KEBAB.regex, CAMEL_TO_KEBAB.replace).toLowerCase();

export const isTypeDisabled = (type: CameraTypeValue, currentCategory: CameraCategoryValue | null) => (
  currentCategory === CameraCategory.Videocamera ? VIDEOCAMERA_DISABLED_TYPES.includes(type) : false
)

export const getPriceRange = (products: Camera[]) => {
  if (products.length === 0) {
    return { min: null, max: null };
  }

  let min = Infinity;
  let max = -Infinity;

  for (const product of products) {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  }

  return { min, max };
};

export const applyPriceRange = (userInput: UserPrice, priceLimits: PriceRange) => {
  const inputMin = userInput.min === '' ? null : Number(userInput.min);
  const inputMax = userInput.max === '' ? null : Number(userInput.max);

  const correctMinPrice = (() => {
    if (inputMin === null) return null;
    if (priceLimits.min === null) return inputMin;

    return Math.max(priceLimits.min, inputMin);
  })();

  const correctMaxPrice = (() => {
    if (inputMax === null) return null;
    if (inputMin !== null && inputMax < inputMin) return correctMinPrice;
    if (priceLimits.max === null) return inputMax;

    return Math.min(priceLimits.max, inputMax);
  })();

  return { correctMinPrice, correctMaxPrice };
}
