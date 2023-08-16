import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { NonStyledLink } from "../atoms/NonStyledLink";
// import font from "assets/fonts/script-bc.woff"

const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  background: ${otherColors.secondaryOpaque};
  color: ${colors.textColor};
  padding-top: 55px;
  padding-bottom: 10px;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Item = styled(NonStyledLink)`
  font-size: 150%;
  //background: #15342b;
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 0px 30px;
`;

const Logo = styled.div`
  position: fixed;
  top: 1.2vh;
  font-size: 35px;
  font-family: "ScriptBc";
`;

export const Menu = () => {
  return (
    <MenuBar>
      <Logo>Karolina Banaszewska</Logo>
      <Item to={"/"}>O mnie</Item>
      <Item to={"/masaze"}>Masaże</Item>
      <Item to={"/blog"}>Blog</Item>
      <Item to={"/kontakt"}>Kontakt</Item>
      <Item to={"/test-page-with-funny-cats/1"}>FC</Item>
    </MenuBar>
  );
};
