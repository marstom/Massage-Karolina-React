import React from "react";
import styled from "styled-components";
import leavesImg from "assets/leaves-small.jpg";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";
import { useAboutMeQuery } from "../../graphql/queries/aboutMe";
import parse from "html-react-parser";
import Spinner from "../atoms/spinner/Spinner";

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
  height: 80vh;
  min-height: 900px;
  background-size: cover;
  position: relative;
  margin-top: -130px;
  width: 100%;
  top: 0px;
  bottom: 0px;
  z-index: 1;

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
  const { loading, error, data } = useAboutMeQuery();
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
        <p>
          <iframe
            width="760"
            height="428"
            src="https://www.youtube.com/embed/xm0zT8Sim3c?si=2wuxdCRRhf0RidcK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>
      </LeavesImage>
      <BoxSection></BoxSection>

      <Centered>
        <Paragraph>
          {!data && <Spinner />}
          {data && parse(data.aboutMe.data.attributes.body)}
        </Paragraph>
      </Centered>
    </Content>
  );
};
