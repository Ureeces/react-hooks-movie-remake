import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchList from "./SearchList";

import "./Search.css";

const Search = () => {
  const { searchValue, isFetching, movieResults, fetchMovieList } = useContext(
    SearchContext
  );

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => fetchMovieList(e.target.value)}
      />

      {searchValue !== "" && isFetching && (
        <SearchContext.Provider value={{ movieResults }}>
          <SearchList />
        </SearchContext.Provider>
      )}
    </div>
  );
};

export default Search;
