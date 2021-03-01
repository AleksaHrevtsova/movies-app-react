import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Cast } from "../Cast";
import { Review } from "../Review";
import s from "./MoviePage.module.css";

const MovieCard = ({ movie, state, movieId }) => {
  const {
    title,
    poster_path,
    homepage,
    overview,
    genres,
    release_date,
    popularity,
  } = movie;

  let posterPath;
  if (movie) {
    posterPath
      ? (posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`)
      : (posterPath = `https://via.placeholder.com/500x750.png?text=NO+POSTER`);
  }
  return (
    <div>
      {movie && (
        <>
          <div className={s.cardWrapper}>
            <div className={s.movieCard}>
              <div className={s.imgWrapper}>
                <img src={posterPath} alt={title} />
              </div>
              <div className={s.movieInfo}>
                <p>release date: {release_date}</p>
                <ul className={s.genres}>
                  {genres.map((g) => (
                    <li>{g.name}</li>
                  ))}
                </ul>
                <p className={s.overview}>
                  {overview || `Ooooppps! Noone overwies yet...`}
                </p>
                <p>{popularity}</p>
              </div>
            </div>

            <div>
              <a href={homepage}>
                <h3 className={s.movieTitleLink}>{title}</h3>
              </a>
              <ul className={s.additional}>
                <li>
                  <Link
                    to={{
                      pathname: `/movies/${movieId}/cast`,
                      state: {
                        from: state && state.from ? state.from : "",
                      },
                    }}
                  >
                    cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `/movies/${movieId}/reviews`,
                      state: {
                        from: state && state.from ? state.from : "",
                      },
                    }}
                  >
                    reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path="/movies/:movieId/cast" component={Cast} />
              <Route exact path="/movies/:movieId/reviews" component={Review} />
            </Switch>
          </div>
        </>
      )}
    </div>
  );
};
export default MovieCard;
