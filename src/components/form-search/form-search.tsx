import './form-search.style.css';

import { ChangeEvent, useState } from "react";
import { Camera } from "../../types/camera.types";
import { getCamerasByName } from "../../mocks/cameras";
import { Link } from "react-router-dom";
import { getRoute } from "../../utils/utils.router";
import { MIN_SEARCH_QUERY_LENGTH } from "./form-search.const";

function FormSearch(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Camera[]>([]); // ! Думаю можно убрать state, используя useMemo, если не понадобится API

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

  const handleFormReset = () => {
    setSearchQuery('');
    setSearchResults([]);
  }

  return (
    <div className={`form-search ${searchQuery.length ? 'list-opened' : ''}`}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" value={searchQuery} onChange={(evt) => handleInputChange(evt)}></input>
        </label>

        {searchResults.length > 0 && (
          <ul className="form-search__select-list">
            {searchResults.map((product, index) => (
              <li className="form-search__select-item" tabIndex={index} key={product.id} >
                <Link tabIndex={-1} to={getRoute(product.id)}>{product.name}</Link>
              </li>))}
          </ul>
        )}
      </form>

      <button className="form-search__reset" type="button" onClick={handleFormReset}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>

    </div>
  )
}

export default FormSearch;
