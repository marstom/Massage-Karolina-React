import { gql, useMutation } from "@apollo/client";

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

export const useCreateBlogCommentMutation = () => {
  return useMutation(createPostCommentMutation, {
    variables: { id: "", comment: "", author: "" },
  });
};
