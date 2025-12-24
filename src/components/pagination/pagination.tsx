import './pagination.style.css';
import { getPaginationItems } from "./pagination.utils";
import { PaginationItem } from "./pagination.type";
import { DEFAULT_START_PAGE_NUMBER, PaginationLabel } from "./pagination.const";
import { getCurrentPage, getTotalPages, setCurrentPage } from '../../store/slices/pagination-slice/pagination.slice';
import { useAppDispatch, useAppSelector, } from '../../store/hooks/store.index';

function Pagination(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  if (!totalPages) return null;

  const items = getPaginationItems(totalPages, currentPage);

  const numericItems = items.filter((item) => typeof item === 'number');

  const firstShowedItem = numericItems.length ? numericItems[0] : DEFAULT_START_PAGE_NUMBER;
  const lastShowedItem = numericItems.length ? numericItems[numericItems.length - 1] : DEFAULT_START_PAGE_NUMBER;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {items.map((item) => {
          const extraClassName = typeof item === 'number' ? currentPage === item ? 'pagination__link--active' : '' : 'pagination__link--text';
          const handleClick = (item: PaginationItem) => {
            if (item === PaginationLabel.next) {
              dispatch(setCurrentPage(lastShowedItem + 1));
              return;
            }
            if (item === PaginationLabel.prev) {
              dispatch(setCurrentPage(firstShowedItem - 1));
              return;
            }
            return dispatch(setCurrentPage(item));
          }

          return (<li key={item} className="pagination__item">
            <button
              className={`pagination__link ${extraClassName}`}
              type="button"
              onClick={() => handleClick(item)}
            >{item}
            </button>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Pagination;
