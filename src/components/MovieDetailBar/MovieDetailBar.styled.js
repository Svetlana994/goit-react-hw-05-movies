import { NavLink } from "react-router-dom";
import styled from "@emotion/styled/macro";

export const Link = styled(NavLink)`
  font-size: 24px;
  margin-right: 20px;

  &:hover {
    color: #2196f3;
  }
`;

export const Span = styled.span`
  & .active {
    color: #2196f3;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;
