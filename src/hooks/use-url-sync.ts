import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/store.index";
import { getCategory, setCategory } from "../store/slices/filter-slice/filter-slice";
import { useEffect } from "react";
import { CameraCategory } from "../constants/camera.const";
import { CameraCategoryValue } from "../types/camera.types";
import { getCurrentPage, getTotalPages, setCurrentPage } from "../store/slices/pagination-slice/pagination.slice";
import { DEFAULT_START_PAGE_NUMBER } from "../components/pagination/pagination.const";

export function useUrlSync() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const currentCategory = useAppSelector(getCategory);
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  // Redux -> URL
  useEffect(() => {
    console.log('Работает useEffect Redux -> URL');
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      //Pagination

      if (currentPage === DEFAULT_START_PAGE_NUMBER) {
        newParams.delete('page');
      } else {
        newParams.set('page', String(currentPage));
      }

      //Category
      if (currentCategory !== null) {
        newParams.set('category', currentCategory);
      } else {
        newParams.delete('category');
      }

      return newParams;
    }, { replace: true })
  }, [currentPage, currentCategory]);

  // URL -> Redux
  useEffect(() => {
    console.log('Работает useEffect от searchParams URL -> Redux');

    //Pagination
    const pageParam = Number(searchParams.get('page'));

    const validatedPage = pageParam && Number.isInteger(pageParam) && pageParam > 1
      ? pageParam
      : DEFAULT_START_PAGE_NUMBER;

    if (validatedPage !== currentPage) {
      dispatch(setCurrentPage(validatedPage))
    }

    // Category
    const categoryParam = searchParams.get('category');

    const validatedCategory = categoryParam && Object.values(CameraCategory).includes(categoryParam as CameraCategoryValue)
      ? categoryParam as CameraCategoryValue
      : null;

    if (validatedCategory !== currentCategory) {
      dispatch(setCategory(validatedCategory))
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (totalPages === null) return;

    const validatedPage = currentPage > totalPages ? totalPages : currentPage;

    if (validatedPage !== currentPage) {
      dispatch(setCurrentPage(validatedPage));
    }
  }, [totalPages, currentPage, dispatch]);
}
