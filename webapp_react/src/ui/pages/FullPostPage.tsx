import React from "react";
import { Content } from "ui/atoms/Content";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ReadPostFull } from "ui/types/blogPosts";
import parse from "html-react-parser";
import BlogCommentSection from "../molecules/BlogCommentSection";

const postQuery = gql`
  query Post($id: ID!) {
    post(id: $id) {
      data {
        id
        attributes {
          title
          shortDescription
          body
          post_comments(sort: "createdAt:desc") {
            data {
              id
              attributes {
                comment
                author
                like
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

export const FullPostPage: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<ReadPostFull>(postQuery, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <Content>
      {parse(data!.post.data.attributes.body)}
      <BlogCommentSection comments={data!.post.data.attributes.post_comments} />
    </Content>
  );
};
