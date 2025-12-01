import { PaginationLabel, VISIBLE_PAGINATION_ITEMS } from "./pagination.const";
import { PaginationItem } from "./pagination.type";

export const getPaginationItems = (totalPages: number, currentPage: number): PaginationItem[] => {
  const items: PaginationItem[] = [];

  if (totalPages <= VISIBLE_PAGINATION_ITEMS) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }
  }
  else if (currentPage <= VISIBLE_PAGINATION_ITEMS) {
    items.push(1, 2, 3, PaginationLabel.next);
  }
  else if (currentPage >= totalPages - 2) {
    items.push(PaginationLabel.prev, totalPages - 2, totalPages - 1, totalPages);
  }
  else {
    items.push(PaginationLabel.prev, currentPage - 1, currentPage, currentPage + 1, PaginationLabel.next);
  }
  return items;
};
