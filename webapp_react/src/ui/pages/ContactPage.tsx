import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";
import ContactForm from "../molecules/ContactForm";
import { gql, useMutation } from "@apollo/client";
import {
  contactInitialVariables,
  ContactPageQueryVariablesType,
} from "../types/contactPage";

const Label = styled.label`
  align-self: center;
`;
const Form = styled.form``;

const Input = styled.input`
  font-size: 100%;
  width: 100%;
  background: ${colors.primary};
  color: ${colors.textColor};
  flex-grow: 1;
  margin-top: 5px;

  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
`;

const Err = styled.span`
  font-size: 80%;
  color: crimson;
  position: absolute;
  margin-left: 30px;
  z-index: 1;
  user-select: none; // prevent from selection
`;
const ErrMessage = styled(Err)`
  margin-top: -30px;
`;

const Item = styled.span`
  flex-basis: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentWithMargin = styled(Content)`
  margin-left: 3%;
  margin-right: 3%;
`;

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

export const ContactPage = () => {
  const [createMessageMutation, { data, loading, error }] = useMutation<
    { id: string },
    ContactPageQueryVariablesType
  >(mutation, {
    variables: contactInitialVariables,
  });
  return (
    <ContentWithMargin>
      <h2>Karolina Banaszewska</h2>
      <p>Skontaktuj się ze mną:</p>
      <p>Adres:</p>
      <p>Gdynia, ul. Żeliwna 7</p>
      <p>Email: kb@gmail.com</p>
      <p>Tel: +48 000 000 000</p>
      <h3>Formularz kontaktowy:</h3>
      <ContactForm createMessageMutation={createMessageMutation} />
      {/*<UnderlineInputContactForm />*/}
    </ContentWithMargin>
  );
};
