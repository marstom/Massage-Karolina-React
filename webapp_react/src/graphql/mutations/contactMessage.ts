import { gql, useMutation } from "@apollo/client";
import {
  contactInitialVariables,
  ContactPageQueryVariablesType,
} from "../../ui/types/contactPage";

const mutation = gql`
  mutation CreateContactFormMessage(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    createContactFormMessage(
      data: { name: $name, email: $email, phone: $phone, message: $message }
    ) {
      data {
        id
      }
    }
  }
`;

export const useContactMessageMutation = () => {
  return useMutation<{ id: string }, ContactPageQueryVariablesType>(mutation, {
    variables: contactInitialVariables,
  });
};
