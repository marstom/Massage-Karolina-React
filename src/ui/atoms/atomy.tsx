import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { Link } from "react-router-dom";

export const Sekcja = styled.div`
  background: antiquewhite;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  background: ${otherColors.secondaryOpaque};
  color: ${colors.textColor};
  padding-top: 50px;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Item = styled(Link)`
  font-size: 150%;
  //background: #15342b;
  color: ${colors.textColor};
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 0px 30px;
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
