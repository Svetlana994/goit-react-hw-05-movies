import React from "react";

function MovieItem({
  movie: { poster_path, title, popularity, overview, genres },
}) {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <h3>Popularity</h3>
      <p>{popularity}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieItem;
