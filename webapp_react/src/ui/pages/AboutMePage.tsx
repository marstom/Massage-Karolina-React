import React from "react";
import styled from "styled-components";
import leavesImg from "assets/leaves-small.jpg";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";

export const AboutMeContent = styled.div`
  padding-top: 120px;
`;

export const LeavesImage = styled.div`
  padding-top: 150px;
  background-image: linear-gradient(
      to bottom,
      rgba(68, 65, 65, 0.3),
      rgba(61, 60, 60, 0.3)
    ),
    url(${leavesImg});
  height: 100vh;
  background-size: cover;
  position: relative;
  margin-top: -130px;
  width: 100%;
  top: 0px;
  bottom: 0px;
  z-index: -1;

  color: ${colors.lightBg};

  // fonty
  //font-family: "Handwritten";
  font-family: "RalewayLight";
  //font-family: "Handwritten";
  font-size: 120%;
  justify-content: center;
  text-align: center;
`;

const Centered = styled.div`
  text-align: center;
`;
const Paragraph = styled.div<{
  $centered?: boolean;
  $font?: "Handwritten" | "RalewayLight";
}>`
  font-size: 120%;
  margin: 3vh 5vh 5vh 5vh;
  line-height: 130%;
  text-align: ${(props) => (props.$centered ? "center" : "justify")};
  font-family: ${(props) => (props.$font ? props.$font : "")};
`;

const BoxSection = styled.div`
  background: ${colors.primary};
  color: ${colors.textColor};
  justify-content: center;
  text-align: center;
  padding: 2em;
`;

const HandwrittenHeader = styled.h1`
  font-family: "Handwritten";
`;

type Props = {
  children?: React.ReactNode;
};
export const AboutMePage: React.FC<Props> = (props) => {
  return (
    <Content>
      <LeavesImage>
        <h1>Karolina</h1>
        <h2>Sztuka Dotyku</h2>
        <p>
          <i>Lomi Lomi</i>
        </p>
        <p>
          <i>Tantra</i>
        </p>
        <p>
          <i>Access Bars</i>
        </p>
      </LeavesImage>
      <BoxSection></BoxSection>
      <Centered>
        <HandwrittenHeader>Witaj</HandwrittenHeader>
        <Paragraph $centered $font={"RalewayLight"}>
          Mam na imię Karolina
        </Paragraph>
        <Paragraph>
          Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Paragraph>
      </Centered>
    </Content>
  );
};
