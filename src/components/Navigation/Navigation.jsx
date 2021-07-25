import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home Page
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </div>
  );
}

export default Navigation;
