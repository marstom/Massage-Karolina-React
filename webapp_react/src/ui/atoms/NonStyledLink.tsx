import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../palette";

export const NonStyledLink = styled(Link)`
  color: ${colors.menuTextColor};
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

export const Item = styled(NonStyledLink)`
  font-size: 150%;
  //background: #15342b;
  margin: 10px;
  color: ${colors.menuTextColor}
  padding-block: 15px;
  padding: 0px 30px 0px 30px;
`;

export const NonStyledDropdownEl = styled.a`
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
