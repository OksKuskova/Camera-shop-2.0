import { CameraLevel } from "../../../constants/camera.const";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/store.index";
import { getLevels, setLevels } from "../../../store/slices/filter-slice/filter-slice";
import { CameraLevelValue } from "../../../types/camera.types";
import FilterItemBase from "../filter-item/filter-item-base";

function FilterLevels(): JSX.Element {
	const dispatch = useAppDispatch();

	const currentLevels = useAppSelector(getLevels);

	const handleInputChange = (level: CameraLevelValue) => {
		dispatch(setLevels(level));
	};

	return (
		<>
			{Object.entries(CameraLevel).map(([key, level]) => (
				<FilterItemBase key={key} type='checkbox' name={key} label={level} checked={currentLevels.includes(level)} onChange={() => handleInputChange(level)} />
			))}
		</>
	)
}

export default FilterLevels;
