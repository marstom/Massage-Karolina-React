import React from "react";
import styled from "styled-components";
import { BlogMinifiedEntry } from "../atoms/BlogMinifiedEntry";
import { Content } from "ui/atoms/Content";
import { gql, useQuery } from "@apollo/client";
import { Posts } from "ui/types/blogPosts";

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

export const BlogMainPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<Posts>(postsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <Content>
      {data!.posts.data.map((post) => (
        <BlogMinifiedEntry
          key={post.id}
          id={post.id}
          title={post.attributes.title}
          content={post.attributes.shortDescription}
        />
      ))}
    </Content>
  );
};
