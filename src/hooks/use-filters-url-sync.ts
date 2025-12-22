import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/store.index";
import { getCategory, setCategory } from "../store/slices/filter-slice/filter-slice";
import { useEffect } from "react";
import { CameraCategory } from "../constants/camera.const";
import { CameraCategoryValue } from "../types/camera.types";

export function useFiltersUrlSync() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const currentCategory = useAppSelector(getCategory);

  // Redux -> URL
  useEffect(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (currentCategory !== null) {
        newParams.set('category', currentCategory);
      } else {
        newParams.delete('category');
      }

      return newParams;
    }, { replace: true })
  }, [currentCategory]);

  // URL -> Redux
  useEffect(() => {
    const categoryParam = searchParams.get('category');

    const validatedCategory = categoryParam && Object.values(CameraCategory).includes(categoryParam as CameraCategoryValue)
      ? categoryParam as CameraCategoryValue
      : null;

    if (validatedCategory !== currentCategory) {
      dispatch(setCategory(validatedCategory))
    }
  }, [searchParams, dispatch])
}
