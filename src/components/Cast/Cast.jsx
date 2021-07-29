import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as moviesAPI from "../../services/movies-api";
import { Wrapper } from "./Cast.styled";
import defaultImg from "../../default-images/def-avatar.png";

function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function GetCast() {
      const response = await moviesAPI.fetchMovieCast(movieId);
      setCast(response.cast);
    }
    GetCast();
  }, [movieId]);

  return (
    cast && (
      <Wrapper>
        {cast.map(({ name, profile_path, character, id }) => (
          <div key={id}>
            <div style={{ height: 360 }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width={240}
                height={"100%"}
                onError={(e) => (e.target.src = defaultImg)}
              />
            </div>

            <h2>{name}</h2>
            <p>Character</p>
            <p>{character}</p>
          </div>
        ))}
      </Wrapper>
    )
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
