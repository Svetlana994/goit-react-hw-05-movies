import { NavLink, useRouteMatch } from "react-router-dom";

function Review() {
  const { url } = useRouteMatch();

  return <NavLink to={`${url}/review`}>Cast</NavLink>;
}

export default Review;
