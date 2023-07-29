import React from "react";
import { Item, MenuBar } from "../atoms/atomy";

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
