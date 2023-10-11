import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import ContactForm from "../molecules/ContactForm";
import { useContactMessageMutation } from "../../graphql/mutations/contactMessage";

export const ContactPage = () => {
  const [createMessageMutation, { data, loading, error }] =
    useContactMessageMutation();
  return (
    <Content className="">
      <div className="ml-5 leading-8">
        <h2>Karolina Banaszewska</h2>
        <p>Skontaktuj się ze mną:</p>
        <p>Adres:</p>
        <p>Gdynia, ul. Żeliwna 7</p>
        <p>Email: kb@gmail.com</p>
        <p>Tel: +48 000 000 000</p>
        <h3>Formularz kontaktowy:</h3>
      </div>
      <ContactForm createMessageMutation={createMessageMutation} />
    </Content>
  );
};
