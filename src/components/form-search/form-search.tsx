import './form-search.style.css';

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Camera } from "../../types/camera.types";
import { getCamerasByName } from "../../mocks/cameras";
import { MIN_SEARCH_QUERY_LENGTH } from "./form-search.const";
import { useNavigate } from 'react-router-dom';
import { getRoute } from '../../utils/utils.router';
import useArrayRefs from '../../hooks/use-array-refs';

function FormSearch(): JSX.Element {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Camera[]>([]); // ! Думаю можно убрать state, используя useMemo, если не понадобится API
  const [focusedElementIndex, setFocusedElementIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [itemRefs, setItemRef] = useArrayRefs<HTMLLIElement>();

  console.log(focusedElementIndex);

  useEffect(() => {
    if (focusedElementIndex >= 0) {
      itemRefs.current[focusedElementIndex]?.focus()
    }
  }, [focusedElementIndex]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    setSearchQuery(query);

    if (query.length >= MIN_SEARCH_QUERY_LENGTH) {
      const filteredCameras = getCamerasByName(query);
      setSearchResults(filteredCameras);
    } else {
      setSearchResults([]);
    }
  }

  const handleInputKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    const key = evt.key;

    if (key === 'ArrowDown' && searchResults.length) {
      evt.preventDefault();
      setFocusedElementIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
    }
  }

  const handleItemKeyDown = (evt: KeyboardEvent<HTMLLIElement>, id: number, index: number) => {
    const key = evt.key;

    if (key === 'ArrowDown') {
      evt.preventDefault();
      setFocusedElementIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
    }

    if (key === 'ArrowUp') {
      evt.preventDefault();
      setFocusedElementIndex((prev) => Math.max(prev - 1, 0));
    }

    if (key === 'Tab' && !evt.shiftKey) {
      evt.preventDefault();
      if (index < searchResults.length - 1) {
        setFocusedElementIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
      } else {
        buttonRef.current?.focus();
        setFocusedElementIndex(-1);
      }
    }

    if (key === 'Tab' && evt.shiftKey) {
      evt.preventDefault();
      if (focusedElementIndex === 0) {
        inputRef.current?.focus();
        setFocusedElementIndex(-1);
      } else {
        setFocusedElementIndex((prev) => Math.max(prev - 1, 0));
      }
    }

    if (key === 'Enter') {
      evt.preventDefault();
      navigate(getRoute(id))
    }
  }

  const handleMouseEnter = (index: number) => {
    setFocusedElementIndex(index);
  }

  const handleFormReset = () => {
    setSearchQuery('');
    setSearchResults([]);
    setFocusedElementIndex(-1);
  }

  return (
    <div className={`form-search ${searchQuery.length ? 'list-opened' : ''}`}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchQuery}
            onChange={(evt) => handleInputChange(evt)}
            onKeyDown={(evt) => handleInputKeyDown(evt)}
          >
          </input>
        </label>

        {searchResults.length > 0 && (
          <ul className="form-search__select-list">
            {searchResults.map((product, index) => (
              <li
                className="form-search__select-item"
                tabIndex={0}
                key={product.id}
                ref={setItemRef(index)}
                onClick={() => navigate(getRoute(product.id))}
                onKeyDown={(evt) => handleItemKeyDown(evt, product.id, index)}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </form>

      <button
        className="form-search__reset"
        type="button"
        ref={buttonRef}
        onClick={handleFormReset}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>

    </div>
  )
}

export default FormSearch;
