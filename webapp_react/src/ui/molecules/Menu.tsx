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
  //flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  // background: ${otherColors.secondaryOpaque};
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
    <MenuBar className="flex flex-col lg:flex-row gap-4 items-center lg:gap-0 bg-secondaryOpaque lg:bg-secondaryOpaque">
      <Logo>Karolina Banaszewska</Logo>
      <Item className="" to={"/"}>
        O mnie
      </Item>
      {data && (
        <span className="mt-auto mb-auto">
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
        </span>
      )}
      {data && (
        <span className="mt-auto mb-auto ">
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
        </span>
      )}
      <Item className="" to={"/blog"}>
        Blog
      </Item>
      <Item className="" to={"/kontakt"}>
        Kontakt
      </Item>
    </MenuBar>
  );
};
