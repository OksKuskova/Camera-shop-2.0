import { PriceRangeKey } from "../../../components/form-filter/form-filter.type";

export type PricePayload = {
  key: PriceRangeKey,
  value: number | null,
}
