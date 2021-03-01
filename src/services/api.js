import axios from "axios";

const key = `ec02f803a2c19321a23f2cc38614b1dd`;
const baseUrl = `https://api.themoviedb.org/3/`;
let params = "";

class Requests {
  getTrends = () => {
    params = `trending/movie/day?api_key=${key}`;
    return axios
      .get(baseUrl + params)
      .then((r) => r.data)
      .then((d) => d.results);
  };
  getMovieDetails = (id) => {
    params = `movie/${id}?api_key=${key}&language=en-US`;
    return axios
      .get(baseUrl + params)
      .then((r) => r.data)
      .then((d) => d);
  };
  getMovieBySearch = (q) => {
    params = `search/movie?api_key=${key}&language=en-US&query=${q}&page=1&include_adult=false`;
    return axios
      .get(baseUrl + params)
      .then((r) => r.data)
      .then((d) => d.results);
  };
  getActors = (id) => {
    params = `movie/${id}/credits?api_key=${key}&language=en-US`;
    return axios
      .get(baseUrl + params)
      .then((r) => r.data)
      .then((d) => d.results);
  };
  getReviews = (id) => {
    params = `movie/${id}/reviews?api_key=${key}&language=en-US`;
    return axios
      .get(baseUrl + params)
      .then((r) => r.data)
      .then((d) => d.results);
  };
}

export default new Requests();
