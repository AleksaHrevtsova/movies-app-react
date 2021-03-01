import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "./SearchMovies.module.css";
import api from "../../services/api";

class SearchMovies extends Component {
  state = {
    query: "",
    page: 1,
    movies: [],
  };
  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    api.getMovieBySearch(query).then((movies) => {
      console.log(movies);
      return this.setState({
        movies: [...movies],
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.query.value);
    this.setState({
      query: e.target.elements.query.value,
    });
  };
  handleChange = () => {};

  render() {
    const { handleSubmit, handleChange } = this;
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <>
        <form className={s.form} onSubmit={handleSubmit}>
          <label htmlFor="searchMovie"></label>
          <input
            placeholder="enter your request please"
            onChange={handleChange}
            required
            type="text"
            name="query"
            id="searchMovie"
          />
          <button type="submit">search</button>
        </form>
        <h2 className={s.moviesTitle}>Movies by searching</h2>
        <ul className={s.moviesList}>
          {movies.map((movie) => (
            <li>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default SearchMovies;
