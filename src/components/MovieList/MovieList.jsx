import { Link, useRouteMatch } from "react-router-dom";

function MovieList({ movies }) {
  const { url } = useRouteMatch();

  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${url}movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
