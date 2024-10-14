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
  const queryUrl = searchParams.get("query") ? searchParams.get("query") : "";
  const [searchQuery, setSearchQuery] = useState(queryUrl);

  const [movies, setMovies] = useState();

  useEffect(() => {
    async function resolveMovies() {
      const response = await api.searchMovies(searchQuery);
      setMovies(response);
    }
    if(searchQuery) { resolveMovies();}
  }, [searchQuery]);

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
      <MovieList movies={movies}/>
    </div>
  );
}
