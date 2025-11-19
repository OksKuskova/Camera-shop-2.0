import { CameraCategory } from "../../../constants/camera.const";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/store.index";
import { getCategory, resetUnavailableTypes, setCategory } from "../../../store/slices/filter-slice/filter-slice";
import { CameraCategoryValue } from "../../../types/camera.types";
import FilterItemBase from "../filter-item/filter-item-base";

function FilterCategory(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentCategory = useAppSelector(getCategory);

  const handleInputChange = (category: CameraCategoryValue) => {
    dispatch(setCategory(category));

    if (currentCategory === CameraCategory.Videocamera) {
      dispatch(resetUnavailableTypes());
    }
  }

  return (
    <>
      {Object.entries(CameraCategory).map(([key, category]) => (
        <FilterItemBase key={key} type='radio' name='category' label={category} value={key} checked={currentCategory === category} onChange={() => handleInputChange(category)} />))}
    </>
  )
}

export default FilterCategory;
