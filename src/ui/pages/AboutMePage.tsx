import React from "react";
import styled from "styled-components";
import leavesImg from "assets/leaves-small.jpg";
import { Content } from "ui/atoms/Content";

export const AboutMeContent = styled.div`
  padding-top: 120px;
`;

export const LeavesImage = styled.div`
  padding-top: 110px;
  background-image: linear-gradient(
      to bottom,
      rgba(68, 65, 65, 0.3),
      rgba(61, 60, 60, 0.3)
    ),
    url(${leavesImg});
  height: 100vh;
  background-size: cover;
  position: relative;
  margin-top: -120px;
  width: 100%;
  top: 0px;
  bottom: 0px;
  z-index: -1;

  --mask: radial-gradient(
        239.24px at 50% calc(100% - 328.6px),
        #000 99%,
        #0000 101%
      )
      calc(50% - 248px) 0/496px 100%,
    radial-gradient(239.24px at 50% calc(100% + 204.6px), #0000 99%, #000 101%)
      50% calc(100% - 124px) / 496px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);

  // fonty
  font-size: 120%;
  justify-content: center;
  text-align: center;

`;


const Centered = styled.div`
  text-align: center;
`
const Paragraph = styled.div<{ $centered?: boolean; }>`
font-size: 120%;
margin: 3vh 5vh 5vh 5vh;
line-height: 130%;
text-align: ${props => props.$centered ? "center" : "justify"};;
/* text-align: justify; */
/* text-align: center; */
`

type Props = {
  children?: React.ReactNode;
};
export const AboutMePage: React.FC<Props> = (props) => {
  return (
      <Content>
        <LeavesImage>
          <h1>Karolina</h1>
          <h2>Sztuka Dotyku</h2>
          <p><i>Lomi Lomi</i></p>
          <p><i>Tantra</i></p>
          <p><i>Access Bars</i></p>
          </LeavesImage>
          <Centered>
            <h1>Witaj</h1>
            <Paragraph $centered>Mam na imię Karolina</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
          </Centered>

      </Content>
  );
};
