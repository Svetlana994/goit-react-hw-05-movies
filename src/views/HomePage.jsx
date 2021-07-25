import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import MovieList from "../components/MovieList/MovieList";

function HomePage() {
  //const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const movies = await moviesAPI.fetchMovies();
      setMovies(movies);
    }
    getMovies();
  }, []);

  return movies && <MovieList movies={movies} />;
}

export default HomePage;
