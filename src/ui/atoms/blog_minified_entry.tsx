import React from 'react';
import styled from "styled-components";
import {colors, otherColors} from 'ui/palette'


type Props = {
    title: string;
    content: string;
}

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
`

const BlogpostButton = styled.button`
    background: #1ea7fd;
    //margin-top: 50px;
  //position: relative;
  //right: 0;
  //bottom: 0;
  justify-content: flex-end;
  display: flex;
  width: 10em;
  
`
export const BlogMinifiedEntry = (props: Props) => {
    return (
        <BorderedBlogpostDiv>
            <h2>{props.title}</h2>
            <div>{props.content}</div>
            <BlogpostButton>Czytaj dalej...</BlogpostButton>

        </BorderedBlogpostDiv>
    )

}
