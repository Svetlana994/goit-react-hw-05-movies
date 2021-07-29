import { Link, NavList, NavItem } from "./Navigation.styled";

function Navigation() {
  return (
    <NavList>
      <NavItem>
        <Link to="/" exact>
          Home Page
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/movies">Movies</Link>
      </NavItem>
    </NavList>
  );
}

export default Navigation;
