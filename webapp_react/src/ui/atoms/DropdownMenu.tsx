import React, { ReactNode, useState } from "react";
import { NonStyledDropdownEl } from "./NonStyledLink";
import styled from "styled-components";
import { colors } from "../palette";
import { NonStyledLink } from "../atoms/NonStyledLink";
import "./DropdownMenu.css";

const Window = styled.div`
  width: 15%;
  margin-left: 25px;
  //margin-top: 20px;
  position: fixed;
  //display: flex;
  //align-self: flex-start;
  //align-items: center;
  color: ${colors.menuTextColor};

  background: ${colors.black};
  border-top: 1mm ${colors.green};
  //border-bottom: 0mm;
  //border-left: 0mm;
  //border-right: 0mm;
  border-style: solid;
  box-shadow: 0px 10px 30px 0px ${colors.primaryOpaque};
  border-radius: 5px;
  animation: fadeInOut 400ms ease-in-out;
  transform-origin: top center;
`;

export const DropdownEl = styled(NonStyledDropdownEl)`
  font-size: 150%;
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 50px 30px;
  color: ${colors.menuTextColor};

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

type LinkType = {
  to: string;
  text: string;
};
type Props = {
  children: ReactNode;
  links: LinkType[];
};

export const DropdownMenu: React.FC<Props> = ({ children, links }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const visibleDropdown = () => {
    return (
      <Window className="lg:m-5 max-lg:min-w-[50%]  z-10">
        <List className="pl-4 pt-3">
          {links.map((link) => (
            <li key={link.to}>
              <NonStyledLink to={`${link.to}`}>{link.text}</NonStyledLink>
            </li>
          ))}
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
