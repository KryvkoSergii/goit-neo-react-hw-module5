import * as api from "../../components/API";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import Icons from "../../assets/icon.svg";

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function resolveMovieCast(movieId) {
      const response = await api.fetchMovieCast(movieId);
      setMovieCast(response);
    }

    resolveMovieCast(movieId);
  }, [movieId]);

  return (
    movieCast && (
      <ul className={css.movie_cast}>
        {movieCast.cast.map((cast) => singleActor(cast))}
      </ul>
    )
  );
}

function singleActor(actor) {
  return (
    <li key={actor.id} className={css.movie_actor}>
      {actor.profile_path ? (
        <img src={api.getImgSrc(actor.profile_path)} />
      ) : (
        <svg>
          <use xlinkHref={`${Icons}#no-photo`}></use>
        </svg>
      )}
      <a>{actor.name}</a>
      <a>Character: {actor.character}</a>
    </li>
  );
}
