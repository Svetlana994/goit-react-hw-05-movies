import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
import MovieList from "../components/MovieList/MovieList";

function MoviesPage() {
  const [formValue, setFormValue] = useState("");
  const [movies, setMovies] = useState(null);
  console.log(movies);

  useEffect(() => {
    if (formValue) {
      async function getMovies() {
        const q = await moviesAPI.fetchMoviesByQuery(formValue);
        // if (q === []) {
        //   return;
        // }
        setMovies(q);
      }
      getMovies();
    }
  }, [formValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = e.target.elements.input.value;
    if (formValue.trim() === "") {
      return;
    }
    setFormValue(formValue);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

export default MoviesPage;
