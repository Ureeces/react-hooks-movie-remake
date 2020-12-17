import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

import "./Search.css";

const Search = () => {
  const { searchValue, fetchMovieList } = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => fetchMovieList(e.target.value)}
      />
    </div>
  );
};

export default Search;
