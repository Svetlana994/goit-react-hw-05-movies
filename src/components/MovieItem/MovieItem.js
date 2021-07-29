import PropTypes from "prop-types";
import defaultImg from "../../default-images/default-img.png";
import {
  Container,
  Title,
  TextRating,
  TextOverview,
  TitleOverview,
  TitleGenres,
} from "./MovieItem.styled";

function MovieItem({
  movie: { poster_path = defaultImg, title, vote_average, overview, genres },
}) {
  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={340}
        onError={(e) => (e.target.src = defaultImg)}
      />
      <div>
        <Title>{title}</Title>
        <TextRating>Rating</TextRating>
        <span>{Math.floor((vote_average / 10) * 100) + "%"}</span>
        <TitleOverview>Overview</TitleOverview>
        <TextOverview>{overview}</TextOverview>
        <TitleGenres>Genres</TitleGenres>
        <ul>
          {genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    name: PropTypes.string,
  }),
};

export default MovieItem;
