import css from "./MoviesPage.module.css";
import * as api from "../../components/API";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [extractedQuery, setExtractedQuery] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  let queryUrl = searchParams.get("query");
  queryUrl = queryUrl ? queryUrl : "";
  const [searchQuery, setSearchQuery] = useState(queryUrl);

  useEffect(() => {
    if (!extractedQuery && document.getElementById("searchQueryField")) {
      document.getElementById("searchQueryField").value = queryUrl;
      setExtractedQuery(true);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const queryValue = event.target[0].value;
    setSearchQuery(queryValue);
    navigate(`${location.pathname}?query=${queryValue}`, { replace: false });
  };

  return (
    <div>
      <form className={css.search_form} onSubmit={onSubmit}>
        <input id="searchQueryField" placeholder="Search for the movie..." />
        <button type="submit">Search</button>
      </form>
      <MovieList
        fetchMovieFunction={() => searchQuery && api.searchMovies(searchQuery)}
        header={null}
        listenableField={searchQuery}
      />
    </div>
  );
}
