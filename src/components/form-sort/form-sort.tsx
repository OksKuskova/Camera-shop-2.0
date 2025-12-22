import { ChangeEvent } from "react";
import { SORT_LABELS, SORT_NAMES, SortOrder, SortType } from "./form-sort.const";
import { Sort } from "./form-sort.type";

type FormSortProps = {
  sort: Sort;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function FormSort({ onChange, sort }: FormSortProps): JSX.Element {
  const { type, order } = sort;

  const handleSortChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  }

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            {Object.values(SortType).map((value) => (
              <div className="catalog-sort__btn-text" key={value}>
                <input type="radio" id={value} name={SORT_NAMES.Type} onChange={handleSortChange} checked={type === value}></input>
                <label htmlFor={value}>{SORT_LABELS[value]}</label>
              </div>
            ))}
          </div>
          <div className="catalog-sort__order">
            {Object.values(SortOrder).map((value) => (
              <div className={`catalog-sort__btn catalog-sort__btn--${value}`} key={value}>
                <input type="radio" id={value} name={SORT_NAMES.Order} aria-label={SORT_LABELS[value]} onChange={handleSortChange} checked={order === value}></input>
                <label htmlFor={value}>
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-sort"></use>
                  </svg>
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
};

export default FormSort;
