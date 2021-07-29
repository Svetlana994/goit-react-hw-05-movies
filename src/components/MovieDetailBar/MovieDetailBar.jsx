import { useRouteMatch, useLocation } from "react-router-dom";
import { Link, Span, Wrapper } from "./MovieDetailBar.styled";

function MovieDetailBar() {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <Wrapper>
      <Span>
        <Link
          to={{
            pathname: `${url}/cast`,
            search: location.search,
            state: { from: location },
          }}
        >
          Cast
        </Link>
      </Span>
      <Span>
        <Link
          to={{
            pathname: `${url}/review`,
            search: location.search,
            state: { from: location },
          }}
        >
          Review
        </Link>
      </Span>
    </Wrapper>
  );
}

export default MovieDetailBar;
