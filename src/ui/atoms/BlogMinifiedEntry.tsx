import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { NonStyledLink } from "./NonStyledLink";

const BorderedBlogpostDiv = styled.div`
  border-color: ${otherColors.darkerGreen};
  border-style: solid;
  border-radius: 20px;
  border-width: 6px;
  //otherrs
  //display: inline-block;
  //position: relative;
  //z-index: 1;
  //width: 300px;
  height: 300px;
  margin: 20px;
  padding: 25px;

  //kontener
  justify-content: space-between;
  flex-direction: column;
  display: flex;
`;

const BlogpostButton = styled(NonStyledLink)`
  display: flex;
  width: 10em;
`;

type Props = {
  title: string;
  content: string;
  id: string;
};

export const BlogMinifiedEntry = (props: Props) => {
  const parser = new DOMParser();

  return (
    <BorderedBlogpostDiv>
      <h2>{props.title}</h2>
      <div>{parse(props.content)}</div>
      <BlogpostButton to={`/blog/${props.id}`}>Czytaj dalej...</BlogpostButton>
    </BorderedBlogpostDiv>
  );
};
