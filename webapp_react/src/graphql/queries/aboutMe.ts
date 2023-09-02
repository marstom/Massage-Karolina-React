import { gql, useQuery } from "@apollo/client";
import { AboutMeResponse } from "../../ui/types/aboutMe";

const query = gql`
  query AboutMe {
    aboutMe {
      data {
        id
        attributes {
          body
        }
      }
    }
  }
`;

export const useAboutMeQuery = () => {
  return useQuery<AboutMeResponse>(query);
};
