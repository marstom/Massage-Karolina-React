import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";

const BlogFullPageDiv = styled.div`
  background: ${colors.secondary};
`;
const ArrowBack = styled.button`
  font-size: 5em;
`;
type Props = {
  title: string;
  children: ReactNode;
};
export const BlogFullPage = (props: Props) => {
  return (
    <BlogFullPageDiv>
      <h2>{props.title}</h2>
      <ArrowBack>⬅️</ArrowBack>

      {props.children}
    </BlogFullPageDiv>
  );
};
