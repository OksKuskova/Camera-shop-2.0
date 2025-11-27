import { Camera } from "../../types/camera.types";

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
