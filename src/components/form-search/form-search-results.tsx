import { useNavigate } from "react-router-dom";
import { SearchProduct } from "./form-search.type"
import { getRoute } from "../../utils/utils.router";
import { KeyboardEvent } from "react";
import { Keys } from "../../constants/keyboard-keys.const";

type FormSearchResultsProps = {
  searchResults: SearchProduct[];
  setRef: (index: number) => (el: HTMLLIElement | null) => HTMLLIElement | null;
  onMouseEnter: (index: number) => void;
  onSelect: () => void;
}

function FormSearchResults({ searchResults, setRef, onMouseEnter, onSelect }: FormSearchResultsProps): JSX.Element {
  const navigate = useNavigate();

  const { ENTER } = Keys;

  const handleMouseEnter = (index: number) => onMouseEnter(index);

  const handleItemSelect = (id: number) => {
    onSelect();
    navigate(getRoute(id))
  }

  const handleItemKeyDown = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === ENTER) {
      evt.preventDefault();
      handleItemSelect(id);
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
          onClick={() => handleItemSelect(id)}
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
