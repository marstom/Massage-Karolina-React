import React, { useEffect } from "react";
import { PostComments } from "../types/blogPosts";
import styled from "styled-components";
import BlogComment from "../atoms/BlogComment";
import AddCommentForm from "../atoms/AddCommentForm";
import { gql, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { client } from "apolloClient";

const CommentsSection = styled.div`
  padding-top: 10vh;
`;

type Props = {
  comments: PostComments;
};

const createPostCommentMutation = gql`
  mutation CreatePostComment($post: ID!, $comment: String!, $author: String!) {
    createPostComment(
      data: { post: $post, comment: $comment, author: $author }
    ) {
      data {
        id
      }
    }
  }
`;
export const BlogCommentSection: React.FC<Props> = ({ comments }) => {
  const { id } = useParams();
  const [mutateFunction, { data, loading, error }] = useMutation(
    createPostCommentMutation,
    {
      variables: { id: "", comment: "", author: "" },
    }
  );

  useEffect(() => {
    const refresh = async () => {
      console.log("Refres queryes ....");
      await client.refetchQueries({ include: ["Post"] });
    };
    refresh();
  }, [loading]); // reload all comments after loading changes

  if (!id) {
    return <CommentsSection>Error, no post id.</CommentsSection>;
  }

  return (
    <CommentsSection>
      <h4>Komentarze:</h4>
      {!comments || (comments.data.length === 0 && <i>Brak komentarzy</i>)}
      {comments.data.length > 0 &&
        comments.data.map((post) => (
          <BlogComment
            id={post.id}
            key={post.id}
            comment={post.attributes.comment}
            author={post.attributes.author}
          />
        ))}
      <AddCommentForm
        addCommentMutation={mutateFunction}
        addCommentloading={loading}
        addCommenterror={error}
        postId={id}
      />
    </CommentsSection>
  );
};

export default BlogCommentSection;
