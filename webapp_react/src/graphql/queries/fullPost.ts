import { gql, useQuery } from "@apollo/client";
import { ReadPostFull } from "../../ui/types/blogPosts";

const postQuery = gql`
  query Post($id: ID!) {
    post(id: $id) {
      data {
        id
        attributes {
          title
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

export const useFullBlogPostQuery = (id: string | undefined) => {
  return useQuery<ReadPostFull>(postQuery, {
    variables: { id: id },
  });
};
