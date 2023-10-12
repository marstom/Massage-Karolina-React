import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { Item } from "../atoms/NonStyledLink";
import { DropdownMenu } from "../atoms/DropdownMenu";
import { useSessionsQuery } from "../../graphql/queries/sessions";
import Spinner from "../atoms/spinner/Spinner";
import Error from "../atoms/Error";

const MenuBar = styled.div`
  align-content: center;
  justify-content: center;
  color: ${colors.menuTextColor};
  padding-top: 55px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.div`
  position: absolute;
  top: 1.2vh;
  font-size: 35px;
  font-family: "ScriptBc";
`;

type SessionsTypes = {
  releaseSessions: { id: string; text: string }[];
  massageSessions: { id: string; text: string }[];
};

export const Menu: React.FC<{}> = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleWheel = (e: any) => {
    console.log("WHelel, ", e);
    if (e.deltaY > 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  const handleScroll = (e: any) => {
    console.log(e);
    const currentScrollPos = window.scrollY;
    // console.log(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
    // console.log(visible);
  };
  useEffect(() => {
    // window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { loading, error, data } = useSessionsQuery();
  if (loading) return <Spinner />;
  if (error) return <Error />;

  return (
    <MenuBar
      className={`flex flex-col lg:flex-row gap-4 items-center
      transition duration-700 ease-in-out
     lg:gap-0 bg-secondaryOpaque lg:bg-secondaryOpaque
     fixed max-lg:fixed
     ${visible ? "" : "max-lg:translate-y-[-28rem]"}
      `}
    >
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
