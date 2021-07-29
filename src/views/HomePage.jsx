import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
import MovieList from "../components/MovieList/MovieList";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const response = await moviesAPI.fetchTrendingMovies();
      setMovies(response.results);
    }
    getMovies();
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: 30 }}>Trending today</h1>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

export default HomePage;
