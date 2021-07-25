import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import defaultImg from "../default-images/default-avatar.jpeg";

function Cast() {
  const [cast, setCast] = useState(null);
  console.log(cast);

  const { movieId } = useParams();
  //console.log(movieId);

  useEffect(() => {
    async function GetCast() {
      const response = await moviesAPI.fetchMovieCast(movieId);
      setCast(response);
    }
    GetCast();
  }, [movieId]);

  return (
    cast && (
      <div>
        {cast.map(({ name, profile_path, character, id }) => (
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width={300}
              onError={(e) => (e.target.src = defaultImg)}
            />
            <h2>{name}</h2>
            <p>Character</p>
            <p>{character}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default Cast;
