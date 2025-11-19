import { useAppDispatch } from "../../store/hooks/store.index";
import { resetFilters } from "../../store/slices/filter-slice/filter-slice";
import FilterBlock from "./filter/filter-block";
import FilterCategory from "./filter/filter-category";
import FilterLevels from "./filter/filter-levels";
import FilterTypes from "./filter/filter-types";
import { FilterTitle } from "./form-filter.const";

function FormFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const { Category, Type, Level } = FilterTitle;

  const handleButtonClick = () => dispatch(resetFilters());

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от"></input>
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder="до"></input>
              </label>
            </div>
          </div>
        </fieldset>

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
