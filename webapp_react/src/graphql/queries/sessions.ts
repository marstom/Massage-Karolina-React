import { gql, useQuery } from "@apollo/client";
import {
  SessionDetailsResponse,
  SessionSingle,
  SessionsListResponse,
  SessionType,
} from "../../ui/types/sesstions";

const sessionsQuery = gql`
  query Sessions {
    sessions {
      data {
        id
        attributes {
          type
          urlName
          menuEntryText
        }
      }
    }
  }
`;

export const useSessionsQuery = () => {
  return useQuery<SessionsListResponse>(sessionsQuery);
};

const singleSessionQuery = gql`
  query Session($id: ID!) {
    session(id: $id) {
      data {
        id
        attributes {
          body
        }
      }
    }
  }
`;

export const useSessionQuery = (id: string | undefined) => {
  return useQuery<SessionDetailsResponse>(singleSessionQuery, {
    variables: { id: id },
  });
};
