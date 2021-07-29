import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage.jsx" /* webpackChunkName: 'home-page' */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx" /* webpackChunkName: 'movies-page' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.jsx" /* webpackChunkName: 'movie-detail-page' */
  )
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Skeleton />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
