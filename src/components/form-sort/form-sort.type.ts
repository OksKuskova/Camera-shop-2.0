import { Value } from "../../types/utils.type";
import { SortOrder, SortType } from "./form-sort.const";

export type SortTypeValue = Value<typeof SortType>;
export type SortOrderValue = Value<typeof SortOrder>;

export type Sort = {
  type: SortTypeValue,
  order: SortOrderValue,
}
