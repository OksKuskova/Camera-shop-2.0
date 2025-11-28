import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";
import { FilterPriceProps, PriceRange, UserPrice } from "../form-filter.type";
import { adjustPriceRange, getPriceRange } from "../form-filter.utils";
import { useAppDispatch } from "../../../store/hooks/store.index";
import { setPrice } from "../../../store/slices/filter-slice/filter-slice";
import { DIGITS_ONLY_REGEX, PRICE_FIELDS } from "../form-filter.const";
import { useDebounce } from "../../../hooks/use-debounse";
import { Keys } from "../../../constants/keyboard-keys.const";

function FilterPrice({ productsByCategoryTypeLevel }: FilterPriceProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [priceLimits, setPriceLimits] = useState<PriceRange>({
    min: null,
    max: null,
  });
  const [userInput, setUserInput] = useState<UserPrice>({
    min: '',
    max: '',
  })

  const debounsedUserInput = useDebounce(userInput, 1500);

  useEffect(() => {
    const range = getPriceRange(productsByCategoryTypeLevel);
    setPriceLimits(range);
  }, [productsByCategoryTypeLevel]);

  useEffect(() => {
    const { min, max } = adjustPriceRange(debounsedUserInput, priceLimits);
    dispatch(setPrice({ min, max }));
  }, [debounsedUserInput, priceLimits]);

  const applyAndSyncPriceRange = () => {
    const { min, max } = adjustPriceRange(userInput, priceLimits);

    dispatch(setPrice({ min, max }));

    setUserInput({
      min: min === null ? '' : String(min),
      max: max === null ? '' : String(max),
    });
  }

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (value === '' || DIGITS_ONLY_REGEX.test(value))
      setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = () => {
    applyAndSyncPriceRange();
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === Keys.ENTER) {
      evt.preventDefault();
      applyAndSyncPriceRange();
    }
  };

  return (
    <div className="catalog-filter__price-range">
      {Object.values(PRICE_FIELDS).map(({ name, placeholder }) => (
        <div className="custom-input" key={name}>
          <label>
            <input
              type="number"
              name={name}
              value={userInput[name]}
              placeholder={priceLimits[name] !== null ? String(priceLimits[name]) : placeholder}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
      ))}
    </div>
  )
}

export default FilterPrice;
