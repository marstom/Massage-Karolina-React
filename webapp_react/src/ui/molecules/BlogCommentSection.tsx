import React from "react";
import { PostComments } from "../types/blogPosts";
import styled from "styled-components";
import BlogComment from "../atoms/BlogComment";
import AddCommentForm from "../atoms/AddCommentForm";

const CommentsSection = styled.div`
  padding-top: 10vh;
`;

type Props = {
  comments: PostComments;
};
export const BlogCommentSection: React.FC<Props> = ({ comments }) => {
  if (!comments || comments.data.length === 0) {
    return (
      <CommentsSection>
        <i>Brak komentarzy</i>
        <AddCommentForm />
      </CommentsSection>
    );
  }

  return (
    <CommentsSection>
      <h4>Komentarze:</h4>
      {comments.data.map((post) => (
        <BlogComment
          id={post.id}
          key={post.id}
          comment={post.attributes.comment}
          author={post.attributes.author}
        />
      ))}
      <AddCommentForm />
    </CommentsSection>
  );
};

export default BlogCommentSection;
