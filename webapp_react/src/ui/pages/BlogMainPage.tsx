import React from "react";
import { BlogMinifiedEntry } from "../atoms/BlogMinifiedEntry";
import { Content } from "ui/atoms/Content";
import { gql, useQuery } from "@apollo/client";
import { Posts } from "ui/types/blogPosts";
import styled from "styled-components";

const postsQuery = gql`
  query Posts {
    posts(sort: "createdAt:desc") {
      data {
        id
        attributes {
          title
          body
          shortDescription
        }
      }
    }
  }
`;

const BlogFlexContent = styled(Content)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BlogMainPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<Posts>(postsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <BlogFlexContent>
      {data!.posts.data.map((post) => (
        <BlogMinifiedEntry
          key={post.id}
          id={post.id}
          title={post.attributes.title}
          content={post.attributes.body}
        />
      ))}
    </BlogFlexContent>
  );
};
