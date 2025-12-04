import { Link } from "react-router-dom";
import { getPaginationItems } from "./pagination.utils";
import { PaginationItem } from "./pagination.type";
import { DEFAULT_START_PAGE_NUMBER, PaginationLabel } from "./pagination.const";

type PaginationProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps): JSX.Element {

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
              onPageChange(lastShowedItem + 1);
              return;
            }
            if (item === PaginationLabel.prev) {
              onPageChange(firstShowedItem - 1);
              return;
            }
            return onPageChange(item);
          }

          return (<li key={item} className="pagination__item">
            <Link className={`pagination__link ${extraClassName}`}
              to=''
              onClick={() => handleClick(item)}
            >{item}
            </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Pagination;
