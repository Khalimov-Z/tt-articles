import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetWord, startSearch } from "../../redux/ducks/articles";

function SearchArticles() {
  const loadWord = useSelector((state) => state.loadWord);

  const dispatch = useDispatch();

  const toStartSearching = () => {
    dispatch(startSearch(loadWord));
  };
  const handleWord = (e) => {
    dispatch(SetWord(e.target.value));
  };

  return (
    <div className="search-articles">
      <div className="search-articles__input">
        <input
          type="text"
          className="input"
          value={loadWord}
          onChange={handleWord}
        />
      </div>
      <div className="search-articles__button">
        <button type="submit" className="btn" onClick={toStartSearching}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchArticles;
