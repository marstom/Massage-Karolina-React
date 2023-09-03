import React from "react";
import { Content } from "ui/atoms/Content";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import BlogCommentSection from "../molecules/BlogCommentSection";
import styled from "styled-components";
import { useFullBlogPostQuery } from "../../graphql/queries/fullPost";
import Spinner from "../atoms/spinner/Spinner";
import Error from "../atoms/Error";

export const ContentPost = styled(Content)`
  margin: 50px;

  .image-style-align-left {
    color: rgb(0, 0, 255);
    float: left;
    margin-right: 15px;
  }

  .image-style-align-right {
    float: right;
    margin-left: 15px;
  }
`;

export const FullPostPage: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useFullBlogPostQuery(id);

  if (loading) return <Spinner />;
  if (error) return <Error />;
  return (
    <ContentPost>
      {parse(data!.post.data.attributes.body)}
      <BlogCommentSection comments={data!.post.data.attributes.post_comments} />
    </ContentPost>
  );
};
