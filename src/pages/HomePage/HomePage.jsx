import { useEffect, useState } from "react";
import * as api from "../../components/API";

export default function HomePage() {
  const [today, setToday] = useState(() => {
    return getToday();
  });
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    async function resolveMovies() {
      const response = await api.tendingMovies();
      setTrendingMovies(response);
    }

    console.log(today);

    resolveMovies();
  }, [today]);

  return (
    <ul>
      {trendingMovies && trendingMovies.results.map((movie) => getMovieRender(movie))}
    </ul>
  );
}

function getMovieRender(movie) {
  return (
    <li key={movie.id}>
      <a href={`/movie/${movie.id}`}>{movie.title}</a>
    </li>
  );
}

function getToday() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
