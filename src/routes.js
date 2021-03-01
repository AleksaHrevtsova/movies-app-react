import { lazy } from "react";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const SearchMovies = lazy(() =>
  import("./components/SearchMovies/SearchMovies")
);
const MoviePage = lazy(() => import("./components/MoviePage/MoviePage"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Review = lazy(() => import("./components/Review/Review"));

const mainRoutes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: true,
    path: "/movies/",
    component: SearchMovies,
  },
  {
    exact: false,
    path: "/movies/:movieId",
    component: MoviePage,
  },
];

const additRoutes = {
  cast: {
    exact: true,
    path: "/movies/:movieId/cast",
    component: Cast,
  },
  review: {
    exact: true,
    path: "/movies/:movieId/reviews",
    component: Review,
  },
};

export default { mainRoutes, additRoutes };
