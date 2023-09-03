import { gql, useQuery } from "@apollo/client";
import FooterLinkApiResponse from "../../ui/types/footerLink";

const query = gql`
  query FooterLink {
    footerLink {
      data {
        id
        attributes {
          link {
            name
            icon {
              data {
                id
                attributes {
                  name
                  url
                }
              }
            }
            url
            positionFromRight
          }
        }
      }
    }
  }
`;

export const useFooterLinks = () => {
  return useQuery<FooterLinkApiResponse>(query);
};
