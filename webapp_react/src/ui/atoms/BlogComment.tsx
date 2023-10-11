import React from "react";
import styled from "styled-components";
import { colors } from "../palette";

const PostDiv = styled.div`
  font-size: 90%;
  font-style: italic;
  border-color: ${colors.rose};
  border-style: solid;
  background: ${colors.secondary};
`;

type Props = {
  id: string;
  comment: string;
  author: string;
};
const BlogComment: React.FC<Props> = ({ id, comment, author }) => {
  return (
    <PostDiv className="border-0 rounded p-0 mt-7" key={id}>
      <div className="p-2">{comment}</div>
      <div className="bg-secondary-darker m-0 p-0 rounded">
        <i className="text-gray-700 ">
          <span className="text-xs m-2">Autor:</span>
          <span className="text-xs">{author}</span>
        </i>
        <i className="float-right text-gray-700 mr-4">
          <span className=" text-xs">Data: 11-221-22</span>
        </i>
      </div>
    </PostDiv>
  );
};

export default BlogComment;
