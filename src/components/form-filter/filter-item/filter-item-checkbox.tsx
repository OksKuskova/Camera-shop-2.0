import { CameraTypeKey, CameraLevelKey, CameraTypeValue, CameraLevelValue } from "../../../types/camera.types";
import FilterItemBase from "./filter-item-base";

export type FilterItemCheckboxProps = {
  name: CameraTypeKey | CameraLevelKey,
  label: CameraTypeValue | CameraLevelValue,
}

function FilterItemCheckbox({ name, label }: FilterItemCheckboxProps): JSX.Element {
  return (
    <FilterItemBase type='checkbox' label={label} name={name} />
  )
}

export default FilterItemCheckbox;
