import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./Search.css";

const SearchList = () => {
  const { movieResults } = useContext(SearchContext);

  const showMovieList = () => {
    return movieResults.map((item, i) => {
      return (
        <li key={i}>
          <img src={item.Poster} alt="some good movie" />
          <Link
            to={{
              pathname: `${item.imdbID}`,
              search: `?title=${item.Title}`,
            }}
          >
            {item.Title}
          </Link>
        </li>
      );
    });
  };

  return <ul className="results">{showMovieList()}</ul>;
};

export default SearchList;
