import { useState } from "react";

import * as api from "../../components/API";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [today, setToday] = useState(() => {
    return getToday();
  });

  return (
    <MovieList
      fetchMovieFunction={api.fetchTendingMovies}
      header={'Trending today'}
      listenableField={today}
    />
  );
}

function getToday() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
