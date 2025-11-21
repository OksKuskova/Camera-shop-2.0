import { useEffect, useState } from "react";
import { FilterPriceProps, PriceRange } from "../form-filter.type";
import { getPriceRange } from "../form-filter.utils";

function FilterPrice({ productsByCategoryTypeLevel }: FilterPriceProps): JSX.Element {
  const [priceRangeLimits, setPriceRangeLimits] = useState<PriceRange | null>(null);

  useEffect(() => {
    const range = getPriceRange(productsByCategoryTypeLevel);
    setPriceRangeLimits({ ...range })
  }, [productsByCategoryTypeLevel]);

  return (
    <div className="catalog-filter__price-range">
      <div className="custom-input">
        <label>
          <input type="number" name='price' placeholder={String(priceRangeLimits?.min)}></input>
        </label>
      </div>
      <div className="custom-input">
        <label>
          <input type="number" name='priceUp' placeholder={String(priceRangeLimits?.max)}></input>
        </label>
      </div>
    </div>
  )
}

export default FilterPrice;
