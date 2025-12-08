import { useEffect, useState } from "react";
import { CARDS_PER_PAGE, DEFAULT_START_PAGE_NUMBER } from "../components/pagination/pagination.const";
import { Camera } from "../types/camera.types";
import { useSearchParams } from "react-router-dom";

export function usePagination(products: Camera[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_START_PAGE_NUMBER)

  const totalPages = Math.ceil(products.length / CARDS_PER_PAGE);

  const updateUrl = (page: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (page === DEFAULT_START_PAGE_NUMBER) {
      newParams.delete('page');
    } else {
      newParams.set('page', String(page));
    }
    setSearchParams(newParams, { replace: true });
  };

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get('page'));

    if (!pageFromUrl) {
      setCurrentPage(DEFAULT_START_PAGE_NUMBER);
    }

    if (pageFromUrl < 1 || !Number.isFinite(pageFromUrl)) {
      setCurrentPage(DEFAULT_START_PAGE_NUMBER);
    } else {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (totalPages === 0) return;

    let validPage = currentPage;

    if (currentPage < 1) {
      validPage = DEFAULT_START_PAGE_NUMBER;
    } else if (currentPage > totalPages) {
      validPage = totalPages;
    }

    if (validPage !== currentPage) {
      setCurrentPage(validPage);
      updateUrl(validPage);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const cards = products.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(page);
  };

  return { currentPage, totalPages, cards, handlePageChange }
}
