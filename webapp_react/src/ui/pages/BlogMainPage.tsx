import React from "react";
import { BlogMinifiedEntry } from "../atoms/BlogMinifiedEntry";
import { Content } from "ui/atoms/Content";
import { gql, useQuery } from "@apollo/client";
import { Posts } from "ui/types/blogPosts";
import styled from "styled-components";
import { BASE_URL } from "../../consts";

const postsQuery = gql`
  query Posts {
    posts(sort: "createdAt:desc") {
      data {
        id
        attributes {
          title
          body
          miniImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
        }
      }
    }
  }
`;

const BlogFlexContent = styled(Content)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: center;
  width: 100%;
`;

export const BlogMainPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<Posts>(postsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <BlogFlexContent>
      {data!.posts.data.map((post) => (
        <BlogMinifiedEntry
          imageUrl={BASE_URL + post.attributes?.miniImage?.data?.attributes.url}
          key={post.id}
          id={post.id}
          title={post.attributes.title}
          content={post.attributes.body}
        />
      ))}
    </BlogFlexContent>
  );
};
