import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function MovieList({
  fetchMovieFunction,
  header,
  listenableField,
}) {
  const location = useLocation();
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function resolveMovies() {
      const response = await fetchMovieFunction();
      setMovies(response);
    }
    resolveMovies();
  }, [listenableField]);

  return (
    <div>
      {header && <h1>{header}</h1>} 
      {movies && <ul> {movies.results.map((movie) => getMovieRender(movie, location))}</ul>}
      {!movies && "Nothing found"}
    </div>
  );
}

function getMovieRender(movie, location) {
  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={location}>
        {movie.title}
      </Link>
    </li>
  );
}

MovieList.propTypes = {
  fetchMovieFunction: PropTypes.func,
  header: PropTypes.string,
  listenableField: PropTypes.any,
};
