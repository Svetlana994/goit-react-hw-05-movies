import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const NavItem = styled.li`
  & .active {
    color: #2196f3;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;
