import { useNavigate } from "react-router-dom";
import { SearchProduct } from "./form-search.type"
import { getRoute } from "../../utils/utils.router";
import { KeyboardEvent } from "react";

type FormSearchResultsProps = {
  searchResults: SearchProduct[];
  setRef: (index: number) => (el: HTMLLIElement | null) => HTMLLIElement | null;
  onMouseEnter: (index: number) => void;
}

function FormSearchResults({ searchResults, setRef, onMouseEnter }: FormSearchResultsProps): JSX.Element {
  const navigate = useNavigate();

  const handleMouseEnter = (index: number) => onMouseEnter(index);

  const handleItemKeyDown = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      navigate(getRoute(id))
    }
  };

  return (
    <ul className="form-search__select-list">
      {searchResults.map(({ id, name }, index) => (
        <li
          className="form-search__select-item"
          tabIndex={0}
          key={id}
          ref={setRef(index)}
          onClick={() => navigate(getRoute(id))}
          onKeyDown={(evt) => handleItemKeyDown(evt, id)}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {name}
        </li>
      ))}
    </ul>

  )
}

export default FormSearchResults;
