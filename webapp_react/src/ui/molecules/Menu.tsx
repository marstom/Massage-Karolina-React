import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { Item, NonStyledLink } from "../atoms/NonStyledLink";
import { DropdownMenu } from "../atoms/DropdownMenu";
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
  //max-height: 3vh;
  //overflow: visible;
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
      {/*<Item to={"/masaze"}>Masaże</Item>*/}
      <DropdownMenu>Masaże</DropdownMenu>
      <Item to={"/blog"}>Blog</Item>
      <Item to={"/kontakt"}>Kontakt</Item>
      <Item to={"/test-page-with-funny-cats/1"}>FC</Item>
    </MenuBar>
  );
};
