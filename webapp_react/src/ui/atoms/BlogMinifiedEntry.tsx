import React from "react";
import styled from "styled-components";
import { otherColors } from "ui/palette";
import parse from "html-react-parser";
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
  width: 25%;

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
      {/*<img*/}
      {/*  src={*/}
      {/*    "https://miro.medium.com/v2/resize:fit:2000/1*08t_fNgSH1PSa3DFKNxcQA.jpeg"*/}
      {/*  }*/}
      {/*/>*/}
      <div>{parse(props.content)}</div>
      <BlogpostButton to={`/blog/${props.id}`}>Czytaj dalej...</BlogpostButton>
    </BorderedBlogpostDiv>
  );
};
