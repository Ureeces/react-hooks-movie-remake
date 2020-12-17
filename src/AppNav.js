import React, { useState } from "react";
import Search from "./components/Search/Search";
import { SearchContext } from "./context/SearchContext";

import "./App.css";

const AppNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const fetchMovieList = async (inputValue) => {
    setSearchValue(inputValue);

    if (!searchValue) {
      setIsFetching(false);
      return;
    }

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`
      );

      const data = await response.json();

      console.log(data);
    } catch (e) {}
  };

  return (
    <div className="App">
      <h1>Search for a Movie</h1>
      <SearchContext.Provider
        value={{ searchValue, movieResults, isFetching, fetchMovieList }}
      >
        <Search />
      </SearchContext.Provider>
    </div>
  );
};

export default AppNav;
