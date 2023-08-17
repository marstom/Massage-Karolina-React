import React, { ReactNode, useState } from "react";
import { NonStyledDropdownEl } from "./NonStyledLink";
import styled from "styled-components";
import { colors } from "../palette";
import { NonStyledLink } from "../atoms/NonStyledLink";

type Props = {
  children: ReactNode;
};

const Window = styled.div`
  width: 12%;
  position: absolute;
  display: flex;
  align-self: flex-start;
  align-items: center;
  color: ${colors.menuTextColor};

  background: ${colors.black};
  box-shadow: 0px 10px 30px 0px ${colors.primaryOpaque};
`;

export const DropdownEl = styled(NonStyledDropdownEl)`
  font-size: 150%;
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 0px 30px;
  color: ${colors.menuTextColor};
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
    </Span>
  );
};
