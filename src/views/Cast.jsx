import { NavLink, useRouteMatch } from "react-router-dom";

function Cast() {
  const { url } = useRouteMatch();

  return <NavLink to={`${url}/cast`}>Cast</NavLink>;
}

export default Cast;
