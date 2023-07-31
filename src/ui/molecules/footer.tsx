// 1fr -1fractional rate
import React from "react";
import { colors, otherColors } from "ui/palette";

import styled, { css } from "styled-components";

import fb from "assets/icons/facebook_bw.png";
import youtube from "assets/icons/youtube_bw.png";
import insta from "assets/icons/insta_bw.png";

const Footer_ = styled.div`
  background-color: ${otherColors.black};
  color: ${colors.lightBlue};
  border-radius: 0.5px;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  margin-bottom: 0px;
  margin-top: auto;
`;

const FlexEl = styled.div`
  text-align: center;
  align-self: center;
`;

const Icon = styled.img`
  max-width: 30px;
  -webkit-filter: invert(1);
`;

const gc = (col: string): React.CSSProperties => ({
  gridColumn: col,
});

type Props = {};
export const Footer = (props: Props) => {
  return (
    <Footer_>
      <FlexEl style={gc("1 / span 3")}>Karolina Banaszewska</FlexEl>
      {/*<FlexEl style={gc("2")}>Karolina Banaszewska</FlexEl>*/}
      {/*<FlexEl style={gc("3 / span 2")}>Karolina Banaszewska</FlexEl> occupy 2 cols*/}
      <FlexEl style={gc("14")}>
        <Icon src={fb}></Icon>
      </FlexEl>
      <FlexEl style={gc("15")}>
        <Icon src={youtube} />
      </FlexEl>
      <FlexEl style={gc("16")}>
        <Icon src={insta} />
      </FlexEl>
    </Footer_>
  );
};
