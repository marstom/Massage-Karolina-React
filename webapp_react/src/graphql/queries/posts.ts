import { gql, useQuery } from "@apollo/client";
import { Posts } from "../../ui/types/blogPosts";

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

export const useBlogPostsQuery = () => {
  return useQuery<Posts>(postsQuery);
};
