import { Camera } from "../../types/camera.types";

export type FilterPriceProps = {
  productsByCategoryTypeLevel: Camera[],
}

export type PriceRange = {
  min: number,
  max: number,
};
