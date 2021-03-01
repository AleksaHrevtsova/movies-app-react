import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";
import api from "../../services/api";
const { getTrends } = api;

class HomePage extends Component {
  state = {
    trends: [],
  };
  componentDidMount() {
    getTrends().then((movies) => this.setState({ trends: [...movies] }));
  }

  render() {
    const { trends } = this.state;
    const { location } = this.props;

    return (
      <>
        <main>
          <h2 className={s.trendsTitle}>Trending today</h2>
          <ul className={s.trendsList}>
            {trends.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </main>
      </>
    );
  }
}

export default HomePage;
