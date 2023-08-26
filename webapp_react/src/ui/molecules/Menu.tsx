import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { Item } from "../atoms/NonStyledLink";
import { DropdownMenu } from "../atoms/DropdownMenu";

const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  background: ${otherColors.secondaryOpaque};
  color: ${colors.menuTextColor};
  padding-top: 55px;
  padding-bottom: 10px;
  position: fixed;
  width: 100%;
  z-index: 100;
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
      <DropdownMenu
        links={[
          { to: "/masaze", text: "Lomi-lomi" },
          { to: "/tantra", text: "Tantra" },
        ]}
      >
        Sesje dotyku
      </DropdownMenu>
      <DropdownMenu
        links={[
          { to: "/ustawienia", text: "Ustawienia systemowe" },
          { to: "/access-bars", text: "Access Bars" },
        ]}
      >
        Sesje uwalniające
      </DropdownMenu>
      <Item to={"/blog"}>Blog</Item>
      <Item to={"/kontakt"}>Kontakt</Item>
      <Item to={"/test-page-with-funny-cats/1"}>FC</Item>
    </MenuBar>
  );
};
