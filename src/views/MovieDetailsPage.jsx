import { useState, useEffect } from "react";
import { useParams, Route, Switch } from "react-router-dom";
import { NavLink, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import Cast from "./Cast";
import Review from "./Review";
import MovieItem from "../components/MovieItem/MovieItem";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //console.log(movie);

  useEffect(() => {
    async function getMovie() {
      const movieById = await moviesAPI.fetchMovieById(movieId);
      //console.log(movieById);
      setMovie(movieById);
    }
    getMovie();
  }, [movieId]);

  const { url, path } = useRouteMatch();

  return (
    <>
      <div>{movie && <MovieItem movie={movie} />}</div>

      <NavLink to={`${url}/cast`}>Cast</NavLink>
      <NavLink to={`${url}/review`}>Review</NavLink>

      <Switch>
        <Route path={`${path}/cast`} exact>
          <Cast />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
      </Switch>
    </>
  );
}

export default MovieDetailsPage;
