import { useAppDispatch } from "../../store/hooks/store.index";
import { resetFilters } from "../../store/slices/filter-slice/filter-slice";
import FilterBlock from "./filter/filter-block";
import FilterCategory from "./filter/filter-category";
import FilterLevels from "./filter/filter-levels";
import FilterPrice from "./filter/filter-price";
import FilterTypes from "./filter/filter-types";
import { FilterTitle } from "./form-filter.const";
import { FilterPriceProps } from "./form-filter.type";

type FormFilterProps = FilterPriceProps;

function FormFilter({ productsByCategoryTypeLevel }: FormFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { Category, Type, Level, Price } = FilterTitle;

  const handleButtonClick = () => dispatch(resetFilters());

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <FilterBlock title={Price}>
          <FilterPrice productsByCategoryTypeLevel={productsByCategoryTypeLevel} />
        </FilterBlock>

        <FilterBlock title={Category}>
          <FilterCategory />
        </FilterBlock>

        <FilterBlock title={Type}>
          <FilterTypes />
        </FilterBlock>

        <FilterBlock title={Level}>
          <FilterLevels />
        </FilterBlock>

        <button
          className="btn catalog-filter__reset-btn" type="button" onClick={handleButtonClick}>Сбросить фильтры
        </button>
      </form>
    </div >
  )
}

export default FormFilter;
