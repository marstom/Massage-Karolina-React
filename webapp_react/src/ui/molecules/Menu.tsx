import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { Item } from "../atoms/NonStyledLink";
import { DropdownMenu } from "../atoms/DropdownMenu";
import { useSessionsQuery } from "../../graphql/queries/sessions";
import Spinner from "../atoms/spinner/Spinner";
import Error from "../atoms/Error";

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

type SessionsTypes = {
  releaseSessions: { id: string; text: string }[];
  massageSessions: { id: string; text: string }[];
};

export const Menu: React.FC<{}> = () => {
  const { loading, error, data } = useSessionsQuery();
  if (loading) return <Spinner />;
  if (error) return <Error />;
  return (
    <MenuBar>
      <Logo>Karolina Banaszewska</Logo>
      <Item to={"/"}>O mnie</Item>
      {data && (
        <DropdownMenu
          links={data.sessions.data
            .filter((session) => session.attributes.type === "dotyk")
            .map((session) => ({
              to: `/sesje/masaze/${session.id}`,
              text: session.attributes.menuEntryText,
            }))}
        >
          Sesje dotyku
        </DropdownMenu>
      )}
      {data && (
        <DropdownMenu
          links={data.sessions.data
            .filter((session) => session.attributes.type === "uwalnianie")
            .map((session) => ({
              to: `/sesje/uwalnianie/${session.id}`,
              text: session.attributes.menuEntryText,
            }))}
        >
          Sesje uwalniające
        </DropdownMenu>
      )}
      <Item to={"/blog"}>Blog</Item>
      <Item to={"/kontakt"}>Kontakt</Item>
    </MenuBar>
  );
};
