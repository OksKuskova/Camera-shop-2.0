import { useEffect, useState } from "react";
import { CARDS_PER_PAGE, DEFAULT_START_PAGE_NUMBER } from "../components/pagination/pagination.const";
import { Camera } from "../types/camera.types";
import { useSearchParams } from "react-router-dom";

export function usePagination(products: Camera[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_START_PAGE_NUMBER);

  const totalPages = Math.ceil(products.length / CARDS_PER_PAGE) || 1;

  const updateUrl = (page: number) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (page === DEFAULT_START_PAGE_NUMBER) {
        newParams.delete('page');
      } else {
        newParams.set('page', String(page));
      }

      return newParams;
    }, { replace: true })
  };

  useEffect(() => {
    const pageParam = searchParams.get('page');
    const pageFromUrl = pageParam ? Number(pageParam) : DEFAULT_START_PAGE_NUMBER;

    if (!Number.isInteger(pageFromUrl) || pageFromUrl < 1) {
      setCurrentPage(DEFAULT_START_PAGE_NUMBER);
      updateUrl(DEFAULT_START_PAGE_NUMBER);
    } else {
      setCurrentPage(pageFromUrl);
      updateUrl(pageFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (products.length === 0) return;

    const validatedPage = currentPage > totalPages ? totalPages : currentPage;

    if (validatedPage !== currentPage) {
      setCurrentPage(validatedPage);
      updateUrl(validatedPage);
    }

  }, [totalPages]);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const cards = products.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(page);
  };

  return { currentPage, totalPages, cards, handlePageChange }
}
