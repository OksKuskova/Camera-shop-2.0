import { Camera } from "../../types/camera.types";
import { PRICE_FIELDS } from "./form-filter.const";

export type FilterPriceProps = {
  productsByCategoryTypeLevel: Camera[],
}

export type PriceRange = {
  min: number | null,
  max: number | null,
};

export type UserPrice = {
  min: string,
  max: string,
}

export type PriceRangeKey = keyof typeof PRICE_FIELDS;
