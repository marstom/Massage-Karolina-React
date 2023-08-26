import React, { ReactNode, useState } from "react";
import { NonStyledDropdownEl } from "./NonStyledLink";
import styled from "styled-components";
import { colors } from "../palette";
import { NonStyledLink } from "../atoms/NonStyledLink";
import "./DropdownMenu.css";

type Props = {
  children: ReactNode;
};

const Window = styled.div`
  width: 15%;
  margin-left: 25px;
  margin-top: 20px;
  position: fixed;
  display: flex;
  align-self: flex-start;
  align-items: center;
  color: ${colors.menuTextColor};

  background: ${colors.black};
  border-top: 1mm ${colors.green};
  border-style: solid;
  box-shadow: 0px 10px 30px 0px ${colors.primaryOpaque};
  border-radius: 2%;
  animation: fadeInOut 400ms ease-in-out;
  transform-origin: top center;
`;

export const DropdownEl = styled(NonStyledDropdownEl)`
  font-size: 150%;
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 50px 30px;
  color: ${colors.menuTextColor};
  //padding-bottom: 50px;

  // arrow down
  &::after {
    margin-left: 10px;
    margin-bottom: 3px;
    content: "";
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;
const List = styled.ul`
  li {
    list-style-type: none; /* Remove bullets */
    padding-bottom: 1em; /* Remove padding */
  }
`;

const Span = styled.span`
  align-self: center;
`;

export const DropdownMenu: React.FC<Props> = ({ children }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const visibleDropdown = () => {
    return (
      <Window>
        <List>
          <li>
            <NonStyledLink to={"/masaze"}>Lomi lomi</NonStyledLink>
          </li>
          <li>
            <NonStyledLink to={"/masaze"}>Tantra</NonStyledLink>
          </li>
          <li>
            <NonStyledLink to={"/masaze"}>Relaksacyjny</NonStyledLink>
          </li>
          <li>
            <NonStyledLink to={"/masaze"}>Access Bars</NonStyledLink>
          </li>
        </List>
      </Window>
    );
  };

  return (
    <Span
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      {<DropdownEl>{children}</DropdownEl>}
      {isDropdownVisible && visibleDropdown()}
      {/*{visibleDropdown()}*/}
    </Span>
  );
};
