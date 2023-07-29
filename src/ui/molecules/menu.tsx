import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";

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

export const Menu = () => {
  return (
    <MenuBar>
      <Item to={"/"}>O mnie</Item>
      <Item to={"/masaze"}>Masaże</Item>
      <Item to={"/blog"}>Blog</Item>
      <Item to={"/kontakt"}>Kontakt</Item>
    </MenuBar>
  );
};
