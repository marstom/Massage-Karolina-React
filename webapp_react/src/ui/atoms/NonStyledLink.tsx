import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../palette";

export const NonStyledLink = styled(Link)`
  color: ${colors.textColor};
  &:hover {
    color: ${colors.lightBlue};
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  text-decoration: none;
`;
