import { Value } from "../../types/utils.type";
import { PaginationLabel } from "./pagination.const"

type PaginationLabelValue = Value<typeof PaginationLabel>;

export type PaginationItem = (number | PaginationLabelValue);
