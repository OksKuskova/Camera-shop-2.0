import { Link } from "react-router-dom";
import { getPaginationItems } from "./pagination.utils";
import { PaginationLabel } from "./pagination.const";

type PaginationProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps): JSX.Element {
  const items = getPaginationItems(totalPages, currentPage);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {items.map((item) => {
          const extraClassName = typeof item === 'number' ? currentPage === item ? 'pagination__link--active' : '' : 'pagination__link--text';
          const handleClick = () => onPageChange(typeof item === 'number' ? item : (item === PaginationLabel.prev ? currentPage - 1 : currentPage + 1));

          return (<li key={item} className="pagination__item">
            <Link className={`pagination__link ${extraClassName}`}
              to=''
              onClick={handleClick}
            >{item}</Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Pagination;
