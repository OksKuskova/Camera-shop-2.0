import { CameraCategoryKey, CameraCategoryValue } from "../../../types/camera.types";
import FilterItemBase from "./filter-item-base";

type FilterItemRadioProps = {
	value: CameraCategoryKey,
	label: CameraCategoryValue
}

function FilterItemRadio({ value, label }: FilterItemRadioProps): JSX.Element {
	return (
		<FilterItemBase type='radio' name='category' label={label} value={value} />
	)
}

export default FilterItemRadio;

