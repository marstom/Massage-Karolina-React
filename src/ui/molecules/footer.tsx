// 1fr -1fractional rate
import React from 'react';
import {colors, otherColors} from 'ui/palette'

import styled, {css} from "styled-components";


const Footer_ = styled.div`
  background-color: ${otherColors.black};
  color: ${colors.lightBlue};
  border-radius: 0.5px;
  height: 50px;
  display: grid;
  //grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(12, 1fr);
`

const FlexEl = styled.div`
  text-align: center;
  align-self: center;
`

const gc = (col: string): React.CSSProperties => ({
    gridColumn: col
})

type Props = {};
export const Footer = (props: Props) => {
    return (
        <Footer_>
            <FlexEl style={gc("1 / span 2")}>Karolina Banaszewska</FlexEl>
            {/*<FlexEl style={gc("2")}>Karolina Banaszewska</FlexEl>*/}
            {/*<FlexEl style={gc("3 / span 2")}>Karolina Banaszewska</FlexEl> occupy 2 cols*/}
            <FlexEl style={gc("10")}>FB</FlexEl>
            <FlexEl style={gc("11")}>YT</FlexEl>
            <FlexEl style={gc("12")}>TW</FlexEl>

        </Footer_>
    );
};