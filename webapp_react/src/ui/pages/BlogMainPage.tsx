import React from "react";
import { BlogMinifiedEntry } from "../atoms/BlogMinifiedEntry";
import { Content } from "ui/atoms/Content";
import styled from "styled-components";
import { BASE_URL } from "../../consts";
import { useBlogPostsQuery } from "../../graphql/queries/posts";

const BlogFlexContent = styled(Content)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: center;
  width: 100%;
`;

export const BlogMainPage: React.FC<{}> = () => {
  const { loading, error, data } = useBlogPostsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <BlogFlexContent>
      {data &&
        data.posts.data.map((post) => (
          <BlogMinifiedEntry
            imageUrl={
              BASE_URL + post.attributes?.miniImage?.data?.attributes.url
            }
            key={post.id}
            id={post.id}
            title={post.attributes.title}
            content={post.attributes.body}
          />
        ))}
    </BlogFlexContent>
  );
};
