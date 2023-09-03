import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import ContactForm from "../molecules/ContactForm";
import { useContactMessageMutation } from "../../graphql/mutations/contactMessage";

const ContentWithMargin = styled(Content)`
  margin-left: 3%;
  margin-right: 3%;
`;

export const ContactPage = () => {
  const [createMessageMutation, { data, loading, error }] =
    useContactMessageMutation();
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
    </ContentWithMargin>
  );
};
