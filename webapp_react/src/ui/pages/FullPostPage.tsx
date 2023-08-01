import React from "react";
import { Content } from "ui/atoms/Content";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ReadPost } from "ui/types/blogPosts";
import parse from "html-react-parser";

const postQuery = gql`
  query Post($id: ID!) {
    post(id: $id) {
      data {
        id
        attributes {
          title
          shortDescription
          body
        }
      }
    }
  }
`;

export const FullPostPage: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<ReadPost>(postQuery, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return <Content>{parse(data!.post.data.attributes.body)}</Content>;
};
