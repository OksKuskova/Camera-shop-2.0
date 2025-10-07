import './form-search.style.css';

import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { getCamerasByName } from "../../mocks/cameras";
import { INDEX_DEFAULT, MIN_SEARCH_QUERY_LENGTH } from "./form-search.const";
import useArrayRefs from '../../hooks/use-array-refs';
import { Keys } from '../../constants/keyboard-keys.const';
import FormSearchResults from './form-search-results';
import useFocusWithin from '../../hooks/use-focus-within';
import useOutsideClick from '../../hooks/use-outside-click';

function FormSearch(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedElementIndex, setFocusedElementIndex] = useState<number>(INDEX_DEFAULT);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [itemRefs, setItemRef] = useArrayRefs<HTMLLIElement>();
  const { isFocused, setIsFocused, refContainer } = useFocusWithin<HTMLDivElement>();

  useOutsideClick(refContainer, () => setIsFocused(false));

  const { ARROW_DOWN, ARROW_UP, TAB, ENTER } = Keys;

  const searchResults = useMemo(
    () => searchQuery.length >= MIN_SEARCH_QUERY_LENGTH ? getCamerasByName(searchQuery) : []
    , [searchQuery]
  );

  useEffect(() => {
    if (focusedElementIndex === -1) {
      inputRef.current?.focus();
    } else if (focusedElementIndex === searchResults.length) {
      buttonRef.current?.focus();
    } else {
      itemRefs.current[focusedElementIndex]?.focus();
    }
  }, [focusedElementIndex, searchResults.length]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    setSearchQuery(query);
  }

  const handleItemOnSelect = () => {
    setIsFocused(false);
  }

  const handleTab = (isShiftKey: boolean) => {
    isShiftKey
      ? setFocusedElementIndex((prev) => Math.max(prev - 1, INDEX_DEFAULT))
      : setFocusedElementIndex((prev) => Math.min(prev + 1, searchResults.length));
  }

  const handleKeyDown = (evt: KeyboardEvent<HTMLFormElement>) => {
    const key = evt.key;

    if (searchResults.length) {
      if (key === ARROW_DOWN) {
        evt.preventDefault();
        setFocusedElementIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
      }

      if (key === ARROW_UP) {
        evt.preventDefault();
        setFocusedElementIndex((prev) => Math.max(prev - 1, 0));
      }

      if (key === TAB) {
        evt.preventDefault();
        handleTab(evt.shiftKey)
      }

      if (key === ENTER) {
        evt.preventDefault();
      }
    }
  }

  const handleMouseEnter = (index: number) => {
    setFocusedElementIndex(index);
  }

  const handleFormReset = () => {
    setSearchQuery('');
    setFocusedElementIndex(INDEX_DEFAULT);
  }

  const handleButtonKeyDown = (evt: KeyboardEvent<HTMLButtonElement>) => {
    if (evt.key === 'Tab' && evt.shiftKey && searchResults.length) {
      evt.preventDefault();
      setFocusedElementIndex(searchResults.length - 1);
    }
  }

  return (
    <div
      className={`form-search ${searchQuery.length ? 'list-opened' : ''}`}
      ref={refContainer}
    >
      <form onKeyDown={(evt) => handleKeyDown(evt)}>
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
            ref={inputRef}
            onChange={(evt) => handleInputChange(evt)}
          >
          </input>
        </label>

        {searchResults.length && isFocused
          ? <FormSearchResults searchResults={searchResults} setRef={setItemRef} onMouseEnter={handleMouseEnter} onSelect={handleItemOnSelect} />
          : ''
        }
      </form>

      <button
        className="form-search__reset"
        type="button"
        ref={buttonRef}
        onClick={handleFormReset}
        onKeyDown={handleButtonKeyDown}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>

    </div>
  )
}

export default FormSearch;
