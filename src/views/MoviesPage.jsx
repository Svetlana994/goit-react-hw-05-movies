import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as moviesAPI from "../services/movies-api";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

function MoviesPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("query");

  const [formValue, setFormValue] = useState(searchParams);
  const [movies, setMovies] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (formValue) {
      async function getMovies() {
        const response = await moviesAPI.fetchMoviesByQuery(formValue);

        if (response.results.length === 0) {
          toast.error("Enter a valid search query");
          return;
        }
        setMovies(response.results);
      }
      getMovies();
    }
  }, [formValue]);

  const handleSubmit = (formValue) => {
    setFormValue(formValue);

    history.push({
      ...location,
      search: `query=${formValue}`,
    });
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {movies && <MovieList movies={movies} search={formValue} />}
    </>
  );
}

export default MoviesPage;
