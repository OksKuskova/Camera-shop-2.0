import { CameraType } from "../../../constants/camera.const";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/store.index";
import { getCategory, getTypes, setTypes } from "../../../store/slices/filter-slice/filter-slice";
import { CameraTypeValue } from "../../../types/camera.types";
import { isTypeDisabled } from "../form-filter.utils";
import FilterItemBase from "../filter-item/filter-item-base";

function FilterTypes(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentTypes = useAppSelector(getTypes);
  const currentCategory = useAppSelector(getCategory);

  const handleInputChange = (type: CameraTypeValue) => {
    dispatch(setTypes(type));
  };

  return (
    <>
      {Object.entries(CameraType).map(([key, type]) => (
        <FilterItemBase key={key} type='checkbox' label={type} name={key} checked={currentTypes.includes(type)} disabled={isTypeDisabled(type, currentCategory)} onToggle={() => handleInputChange(type)} />
      ))}
    </>
  )
}

export default FilterTypes
