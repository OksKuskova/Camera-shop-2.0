import { useState } from "react";
import { CARDS_PER_PAGE, DEFAULT_START_PAGE_NUMBER } from "../components/pagination/pagination.const";
import { Camera } from "../types/camera.types";

export function usePagination(products: Camera[]) {
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_START_PAGE_NUMBER);

  const totalPages = Math.ceil(products.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const cards = products.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  return { currentPage, totalPages, cards, handlePageChange }
}
