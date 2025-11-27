import { ChangeEvent, useEffect, useState } from "react";
import { FilterPriceProps, PriceRange, UserPrice } from "../form-filter.type";
import { applyPriceRange, getPriceRange } from "../form-filter.utils";
import { useAppDispatch } from "../../../store/hooks/store.index";
import { setPrice } from "../../../store/slices/filter-slice/filter-slice";
import { DIGITS_ONLY_REGEX, PRICE_FIELDS } from "../form-filter.const";

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

  useEffect(() => {
    const range = getPriceRange(productsByCategoryTypeLevel);
    setPriceLimits(range);

    setUserInput((prev) => ({
      min: prev.min && range.min !== null && Number(prev.min) < range.min ? String(range.min) : prev.min,
      max: prev.max && range.max !== null && Number(prev.max) > range.max ? String(range.max) : prev.max,
    }));
  }, [productsByCategoryTypeLevel]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (value === '' || DIGITS_ONLY_REGEX.test(value))
      setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = () => {
    const { correctMinPrice, correctMaxPrice } = applyPriceRange(userInput, priceLimits);

    dispatch(setPrice({ min: correctMinPrice, max: correctMaxPrice }));

    setUserInput({
      min: correctMinPrice === null ? '' : String(correctMinPrice),
      max: correctMaxPrice === null ? '' : String(correctMaxPrice)
    });
  }

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
            />
          </label>
        </div>
      ))}
    </div>
  )
}

export default FilterPrice;
