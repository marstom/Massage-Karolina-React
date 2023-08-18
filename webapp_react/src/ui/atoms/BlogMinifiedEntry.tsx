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
  imageUrl: string;
};

export const BlogMinifiedEntry = (props: Props) => {
  const shortenString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    }

    const words = str.split(" ");
    let shortened = "";

    for (const word of words) {
      if ((shortened + word).length <= maxLength - 3) {
        // 3 for "..."
        shortened += (shortened ? " " : "") + word;
      } else {
        break;
      }
    }

    return shortened + "...";
  };
  return (
    <BorderedBlogpostDiv>
      <h2 className={style.postTitle}>{props.title}</h2>
      <img className={style.miniImage} src={props.imageUrl} />
      <div className={style.shortContent}>
        {parse(shortenString(props.content, 220))}
      </div>
      <BlogpostButton to={`/blog/${props.id}`}>Czytaj dalej...</BlogpostButton>
    </BorderedBlogpostDiv>
  );
};
