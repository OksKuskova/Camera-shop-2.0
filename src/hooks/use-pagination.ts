import { useMemo } from "react";
import { CARDS_PER_PAGE } from "../components/pagination/pagination.const";
import { Camera } from "../types/camera.types";
import { useAppSelector } from "../store/hooks/store.index";
import { getCurrentPage, getTotalPages } from "../store/slices/pagination-slice/pagination.slice";

export function usePagination(products: Camera[]) {
  const totalPages = useAppSelector(getTotalPages);
  const currentPage = useAppSelector(getCurrentPage);

  const startIndex = useMemo(() => (currentPage - 1) * CARDS_PER_PAGE, [currentPage]);

  const displayedCards = useMemo(() => {
    return products.slice(startIndex, startIndex + CARDS_PER_PAGE);
  }, [products, startIndex]);

  const shouldShowPagination = totalPages && totalPages > 1;

  return { shouldShowPagination, displayedCards }
}
