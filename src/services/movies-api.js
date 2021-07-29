import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "7d672c3d97d95c08eb5f36a2838c8cdf";

async function fetchWithErrorHandling(url = "") {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesByQuery(query) {
  return fetchWithErrorHandling(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function fetchMovieReview(movieId) {
  return fetchWithErrorHandling(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
