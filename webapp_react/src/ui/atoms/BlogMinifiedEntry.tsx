import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import parse from "html-react-parser";
import { NonStyledLink } from "./NonStyledLink";
import style from "./BlogMinifiedEntry.module.css";

const BorderedBlogpostDiv = styled.div`
  border-color: ${otherColors.darkerGreen};
  border-style: solid;

  border-radius: 15px;
  border-width: 2px;

  height: 500px;
  margin: 20px;
  padding: 15px;
  width: 350px;
  align-content: center;
  text-align: justify;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
`;

const BlogpostButton = styled(NonStyledLink)`
  color: ${colors.darkerGreen};
  grid-row-start: 6;
  align-self: end;
  margin-bottom: 12px;
  margin-left: 12px;
`;

type Props = {
  title: string;
  content: string;
  id: string;
};

export const BlogMinifiedEntry = (props: Props) => {
  return (
    <BorderedBlogpostDiv>
      <h2 className={style.postTitle}>{props.title}</h2>
      <img
        className={style.miniImage}
        src={
          "https://miro.medium.com/v2/resize:fit:2000/1*08t_fNgSH1PSa3DFKNxcQA.jpeg"
        }
      />
      <div className={style.shortContent}>{parse(props.content)}</div>
      <BlogpostButton to={`/blog/${props.id}`}>Czytaj dalej...</BlogpostButton>
    </BorderedBlogpostDiv>
  );
};
