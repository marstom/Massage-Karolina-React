import React from "react";
import styled from "styled-components";
import { colors } from "../palette";

const PostDiv = styled.div`
  font-size: 90%;
  font-style: italic;
  //border: blue;
  border-color: ${colors.rose};
  border-style: solid;
  //background: blue;
  background: ${colors.secondary};
  padding: 0.5em;
  margin-bottom: 15px;
`;

type Props = {
  id: string;
  comment: string;
  author: string;
};
const BlogComment: React.FC<Props> = ({ id, comment, author }) => {
  return (
    <PostDiv key={id}>
      {comment}

      <p>
        <i>~{author}</i>
      </p>
    </PostDiv>
  );
};

export default BlogComment;
