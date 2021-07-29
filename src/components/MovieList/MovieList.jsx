import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import slugify from "slugify";
import { List, Wrapper, Img, ImgWrapper } from "./MovieList.styled";
import defaultImg from "../../default-images/default-img.png";

function MovieList({ movies, search }) {
  const searchParams = search ? `query=${search}` : "";
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, name, poster_path }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `movies/${slugify(`${title || name} ${id}`, {
                  lower: true,
                })}`,
                state: { from: location },
                search: searchParams,
              }}
            >
              <ImgWrapper>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width={250}
                  onError={(e) => (e.target.src = defaultImg)}
                />
              </ImgWrapper>

              <Wrapper>
                <h2>{title || name}</h2>
              </Wrapper>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
