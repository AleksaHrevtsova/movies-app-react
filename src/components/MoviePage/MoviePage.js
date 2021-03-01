import React, { Component } from "react";
import MovieCard from "./MovieCard";
import api from "../../services/api";
import s from "./MoviePage.module.css";
const { getMovieDetails } = api;

class MoviePage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieDetails(movieId).then((movie) => {
      return this.setState({ movie });
    });
  }

  handleBack = () => {};

  render() {
    const { movie } = this.state;
    const { handleBack } = this;
    const { state } = this.props.location;
    const { movieId } = this.props.match.params;
    return (
      <>
        <button type="button" onClick={handleBack} className={s.backBtn}>
          back
        </button>
        {movie && <MovieCard movie={movie} state={state} movieId={movieId} />}
      </>
    );
  }
}
export default MoviePage;
