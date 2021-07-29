import { useState, useEffect } from "react";
import {
  useParams,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import { RiArrowGoBackFill } from "react-icons/ri";
import Cast from "../components/Cast/Cast";
import Review from "../components/Review/Review";
import MovieItem from "../components/MovieItem/MovieItem";
import MovieDetailBar from "../components/MovieDetailBar/MovieDetailBar";

function MovieDetailsPage() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const movieById = await moviesAPI.fetchMovieById(movieId);
      setMovie(movieById);
    }
    getMovie();
  }, [movieId]);

  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  function goBack() {
    if (location.search) {
      history.push(`/movies${location.state.from.search}`);
      return;
    }
    history.push("/");
  }

  return (
    <>
      <button type="button" onClick={goBack} style={{ marginBottom: 20 }}>
        <RiArrowGoBackFill size={20} />
      </button>
      <div>{movie && <MovieItem movie={movie} />}</div>

      <MovieDetailBar />

      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/review`}>
          <Review movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}

export default MovieDetailsPage;
